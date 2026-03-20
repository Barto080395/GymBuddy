import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private countdownSub!: Subscription;

  start(seconds: number, tick: (remaining: number) => void, complete: () => void) {
    let remaining = seconds;

    this.stop();

    this.countdownSub = interval(1000).subscribe(() => {
      remaining--;

      if (remaining < 0) {
        remaining = 0;
      }

      tick(remaining);

      if (remaining <= 0) {
        this.stop();
        complete();
      }
    });
  }

  stop() {
    this.countdownSub?.unsubscribe();
  }

  getExerciseDuration(ex: any): number {
    if (ex.duration) return ex.duration;
  
    return ex.reps * 2; // fallback automatico
  }
  
  getRestTime(ex: any): number {
    if (ex.difficulty === 'easy') return 30;
    if (ex.difficulty === 'medium') return 60;
    if (ex.difficulty === 'hard') return 90;
  
    if (ex.weight && ex.weight > 50) return 90;
  
    return 60;
  }
}
