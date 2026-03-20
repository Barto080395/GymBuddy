import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Workout } from '../../models/workout.model';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-workout-card',
  standalone: true,
  imports: [CommonModule,CountdownComponent],
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent {
  @Input() workout!: Workout;
  @Output() startExercise = new EventEmitter<any>();

  // Quando clicchi "Avvia serie"
  start(exercise: any) {
    this.startExercise.emit(exercise);
  }
}