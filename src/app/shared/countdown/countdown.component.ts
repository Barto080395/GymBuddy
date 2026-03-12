import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  @Input() sets = 1;              // numero di serie
  @Input() duration = 60;         // durata esercizio
  @Input() restDuration = 120;    // durata recupero
  @Input() exerciseName = '';     // nome esercizio

  minutes = 0;
  seconds = 0;
  currentSet = 1;
  isRest = false;
  finished = false;

  private countdownSub!: Subscription;

  ngOnInit(): void {
    this.startExercise();
  }

  ngOnDestroy(): void {
    this.countdownSub?.unsubscribe();
  }

  private startExercise() {
    this.isRest = false;
    this.finished = false;
    this.startCountdown(this.duration, () => {
      if (this.currentSet < this.sets) {
        this.startRest();
      } else {
        this.finished = true;
      }
    });
  }

  private startRest() {
    this.isRest = true;
    this.startCountdown(this.restDuration, () => {
      this.currentSet++;
      this.startExercise();
    });
  }

  private startCountdown(seconds: number, onComplete: () => void) {
    let remaining = seconds;
    this.updateTime(remaining);

    this.countdownSub?.unsubscribe();
    this.countdownSub = interval(1000).subscribe(() => {
      remaining--;
      this.updateTime(remaining);

      if (remaining <= 0) {
        this.countdownSub.unsubscribe();
        onComplete();
      }
    });
  }

  private updateTime(totalSeconds: number) {
    this.minutes = Math.floor(totalSeconds / 60);
    this.seconds = totalSeconds % 60;
  }
}