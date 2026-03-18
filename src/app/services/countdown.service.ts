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
}
