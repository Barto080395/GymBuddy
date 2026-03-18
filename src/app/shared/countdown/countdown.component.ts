import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStore } from '../../core/store/user.store';
import { CountdownService } from '../../services/countdown.service';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  @Input() sets = 1;
  @Input() duration = 60;
  @Input() restDuration = 120;
  @Input() exerciseName = '';

  minutes = 0;
  seconds = 0;
  currentSet = 1;
  isRest = false;
  finished = false;
  isPaused = false;

  private remainingTime = 0;
  private currentUserId: string | null = null;

  constructor(
    private userStore: UserStore,
    private countdownService: CountdownService,
  ) {}

  ngOnInit(): void {
    // Prendi l'utente corrente
    this.userStore.user$.subscribe(user => {
      this.currentUserId = user?.uid || null;

      if (!this.currentUserId) {
        // Logout: resetta tutto
        this.stop();
        this.finished = false;
        this.currentSet = 1;
        this.isRest = false;
        this.remainingTime = this.duration;
        return;
      }

      // Carica stato salvato per questo utente
      const saved = this.loadState(this.currentUserId);
      if (saved) {
        this.currentSet = saved.currentSet;
        this.isRest = saved.isRest;
        this.remainingTime = saved.remainingTime;
        this.finished = saved.finished || false;
        this.updateTime(this.remainingTime);

        if (!this.finished) {
          this.startCountdown(this.remainingTime, () => this.onComplete());
        }
      } else {
        this.startExercise();
      }
    });
  }

  ngOnDestroy(): void {
    this.countdownService.stop();
  
    if (this.currentUserId) {
      this.saveState(this.currentUserId);
    }
  }

  pause() {
    this.countdownService.stop();
    this.isPaused = true;
  
    if (this.currentUserId) {
      this.saveState(this.currentUserId);
    }
  }

  resume() {
    if (this.finished || this.remainingTime <= 0 || !this.currentUserId) return;
  
    this.isPaused = false;
    this.startCountdown(this.remainingTime, () => this.onComplete());
  }

  stop() {
    this.countdownService.stop();
    this.finished = true;
  
    if (this.currentUserId) {
      this.clearState(this.currentUserId);
    }
  }

  resetExercise() {
    this.finished = false;
    this.currentSet = 1;
    this.isRest = false;
    this.remainingTime = this.duration;
  
    // Pulisci lo stato salvato
    if (this.currentUserId) this.clearState(this.currentUserId);
  
    // Avvia il countdown da capo
    this.startExercise();
  }

  // =====================
  // Countdown + logica
  // =====================
  private startExercise() {
    this.isRest = false;
    this.finished = false;
    this.remainingTime = this.duration;
    this.updateTime(this.remainingTime);
    this.startCountdown(this.remainingTime, () => this.onComplete());
  }

  private startRest() {
    this.isRest = true;
    this.remainingTime = this.restDuration;
    this.updateTime(this.remainingTime);
    this.startCountdown(this.remainingTime, () => {
      // Finito il riposo, vai al prossimo set
      this.currentSet++;
      if (this.currentSet <= this.sets) {
        this.startExercise();
      } else {
        this.finished = true;
        if (this.currentUserId) this.clearState(this.currentUserId);
      }
    });
  }

  private startCountdown(seconds: number, onComplete: () => void) {

    this.countdownService.start(
      seconds,
  
      (remaining) => {
        this.remainingTime = remaining;
        this.updateTime(remaining);
  
        if (this.currentUserId) {
          this.saveState(this.currentUserId);
        }
      },
  
      () => {
        onComplete();
      }
  
    );
  
  }

  private onComplete() {
    if (!this.isRest) {
      if (this.currentSet < this.sets) {
        this.startRest();
      } else {
        this.finished = true;
        if (this.currentUserId) this.clearState(this.currentUserId);
      }
    } else {
      // Il resto finito gestito dentro startRest
    }
  }

  private updateTime(totalSeconds: number) {
    this.minutes = Math.floor(totalSeconds / 60);
    this.seconds = totalSeconds % 60;
  }

  // =====================
  // LocalStorage per utente
  // =====================

  private saveState(userId: string) {
    const allState = JSON.parse(localStorage.getItem('countdownState') || '{}');
    if (!allState[userId]) allState[userId] = {};
    allState[userId][this.exerciseName] = {
      currentSet: this.currentSet,
      isRest: this.isRest,
      remainingTime: this.remainingTime,
      finished: this.finished
    };
    localStorage.setItem('countdownState', JSON.stringify(allState));
  }

  private loadState(userId: string) {
    const allState = JSON.parse(localStorage.getItem('countdownState') || '{}');
    return allState[userId]?.[this.exerciseName] || null;
  }

  private clearState(userId: string) {
    const allState = JSON.parse(localStorage.getItem('countdownState') || '{}');
    if (allState[userId]) {
      delete allState[userId][this.exerciseName];
      localStorage.setItem('countdownState', JSON.stringify(allState));
    }
  }
}