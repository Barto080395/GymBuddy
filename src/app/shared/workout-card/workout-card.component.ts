import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Workout } from '../../models/workout.model';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-workout-card',
  standalone: true,
  imports: [CommonModule, CountdownComponent], // ✅ qui va il countdown
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent {
  @Input() workout!: Workout;
}