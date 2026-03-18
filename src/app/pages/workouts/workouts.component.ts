import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutCardComponent } from '../../shared/workout-card/workout-card.component';
import { Workout } from '../../models/workout.model';
import { CountdownComponent } from '../../shared/countdown/countdown.component';
import { AccordionComponent } from '../../shared/Accordion/accordion.component';


@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [CommonModule, WorkoutCardComponent,AccordionComponent],
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent {

  workouts: Workout[] = [
    {
      id: '1',
      title: 'Petto - Push Day',
      duration: 60,
      date: '03 Marzo 2026',
      exercises: [
        { name: 'Panca Piana', sets: 4, reps: 12, weight: 80, running: false },
        { name: 'Panca Stretta', sets: 4, reps: 12, weight: 60, running: false },
        { name: 'Panca Inclinata', sets: 4, reps: 12, weight: 70, running: false },
        { name: 'Croci', sets: 4, reps: 15, weight: 15, running: false }
      ]
    },
    {
      id: '2',
      title: 'Dorso - Pull Day',
      duration: 60,
      date: '04 Marzo 2026',
      exercises: [
        { name: 'Stacco da Terra', sets: 4, reps: 10, weight: 100, running: false },
        { name: 'Rematore', sets: 4, reps: 12, weight: 60, running: false },
        { name: 'Rematore T-bar', sets: 4, reps: 12, weight: 70, running: false },
        { name: 'Pulley', sets: 4, reps: 12, weight: 30, running: false }
      ]
    },
    {
      id: '3',
      title: 'Gambe',
      duration: 55,
      date: '05 Marzo 2026',
      exercises: [
        { name: 'Squat', sets: 4, reps: 12, weight: 100, running: false },
        { name: 'Leg Press', sets: 4, reps: 12, weight: 120, running: false },
        { name: 'Leg Curl', sets: 4, reps: 15, weight: 40, running: false },
        { name: 'Affondi', sets: 4, reps: 12, weight: 20, running: false },
        { name: 'Polpacci', sets: 4, reps: 20, weight: 50, running: false }
      ]
    },
    {
      id: '4',
      title: 'Spalle',
      duration: 50,
      date: '06 Marzo 2026',
      exercises: [
        { name: 'Military Press', sets: 4, reps: 12, weight: 40, running: false },
        { name: 'Alzate Laterali', sets: 4, reps: 15, weight: 10, running: false },
        { name: 'Alzate Frontali', sets: 4, reps: 15, weight: 10, running: false },
        { name: 'Tirate al Mento', sets: 4, reps: 12, weight: 40, running: false }
      ]
    },
    {
      id: '5',
      title: 'Braccia (Bicipiti e Tricipiti)',
      duration: 50,
      date: '07 Marzo 2026',
      exercises: [
        { name: 'Curl con Bilanciere', sets: 4, reps: 12, weight: 30, running: false },
        { name: 'Curl con Manubri', sets: 4, reps: 12, weight: 12, running: false },
        { name: 'French Press Bilanciere', sets: 4, reps: 12, weight: 40, running: false },
        { name: 'Pushdown Cavo', sets: 4, reps: 12, weight: 35, running: false },
        { name: 'Estensioni Tricipiti con Manubrio', sets: 3, reps: 15, weight: 12, running: false }
      ]
    },
    {
      id: '6',
      title: 'Cardio',
      duration: 30,
      date: '08 Marzo 2026',
      exercises: [
        { name: 'Corsa su Tapis Roulant', sets: 1, reps: 30, weight: 0, running: false },
        { name: 'Cyclette', sets: 1, reps: 20, weight: 0, running: false },
        { name: 'Salto con la Corda', sets: 3, reps: 5, weight: 0, running: false }
      ]
    }
  ];
}