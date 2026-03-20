// workout-modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from '../../countdown/countdown.component';


@Component({
  selector: 'app-workout-modal',
  standalone: true,
  imports: [CommonModule, CountdownComponent],
  templateUrl: './workout-modal.component.html',
  styleUrls: ['./workout-modal.component.scss'],
})
export class WorkoutModalComponent {
  @Input() exercise: any;            // esercizio selezionato
  @Input() showStart = false;        // mostra modal start
  @Input() showCountdown = false;    // mostra modal countdown
  @Input() countdownDuration = 60;   // durata in secondi
  @Input() restDuration = 120;       // durata rest
  @Output() close = new EventEmitter<void>(); // chiusura modal

  startCountdown() {
    this.showStart = false;
    this.showCountdown = true;
  }

  closeModal() {
    this.showStart = false;
    this.showCountdown = false;
    this.close.emit();
  }
}