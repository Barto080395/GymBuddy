// workout.service.ts
import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model';

/*@Injectable({
  providedIn: 'root'
})

export class WorkoutService {
  private workouts: Workout[] = [
    {
      id: '1',
      title: 'Push Day',
      date: '03 Marzo 2026',
      exercises: [
        { name: 'Panca Piana', sets: 4, reps: 8, weight: 80 },
        { name: 'Military Press', sets: 3, reps: 10, weight: 40 },
        { name: 'Chest Press', sets: 3, reps: 12, weight: 50 },
      ],
      duration: 60
    }
  ];

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  getWorkoutById(id: string): Workout | undefined {
    return this.workouts.find(w => w.id === id);
  }
}*/