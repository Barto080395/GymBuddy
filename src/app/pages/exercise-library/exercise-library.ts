import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../shared/Accordion/accordion.component';

interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  equipment?: string;
  gif?: string;
}

@Component({
  selector: 'app-exercise-library',
  standalone: true,
  imports: [CommonModule,AccordionComponent],
  templateUrl: './exercise-library.html',
  styleUrls: ['./exercise-library.scss'],
})
export class ExerciseLibrary {
  exercises: Exercise[] = [
    // Petto
    { id: '1', name: 'Panca Piana', muscleGroup: 'Petto', equipment: 'Bilanciere',  gif: 'assets/gif/panca-piana.png'},
    { id: '2', name: 'Panca Inclinata', muscleGroup: 'Petto', equipment: 'Bilanciere',gif: 'assets/gif/panca-piana.png' },
    { id: '3', name: 'Chest Press', muscleGroup: 'Petto', equipment: 'Macchina',gif: 'assets/gif/chess-press.png' },
    { id: '4', name: 'Croci ai Cavi', muscleGroup: 'Petto', equipment: 'Cavi',gif: 'assets/gif/panca-piana.png' },
    { id: '5', name: 'Push-up', muscleGroup: 'Petto',equipment: 'Guanti',gif: 'assets/gif/piegamenti-sulle-braccia.png'},

    // Dorso
    { id: '6', name: 'Lat Machine', muscleGroup: 'Dorso', equipment: 'Macchina',gif: 'assets/gif/lat-machine.png' },
    { id: '7', name: 'Pull-up', muscleGroup: 'Dorso',equipment: 'Guanti', gif: 'assets/gif/pullups.png' },
    { id: '8', name: 'Rematore con Bilanciere', muscleGroup: 'Dorso', equipment: 'Bilanciere' },
    { id: '9', name: 'Stacco da terra', muscleGroup: 'Dorso', equipment: 'Bilanciere',gif: 'assets/gif/stacco.png' },
    { id: '10', name: 'Pulley', muscleGroup: 'Dorso', equipment: 'Macchina',gif: 'assets/gif/pulley.png' },

    // Gambe
    { id: '11', name: 'Squat', muscleGroup: 'Gambe', equipment: 'Bilanciere', gif: 'assets/gif/squat.png' },
    { id: '12', name: 'Affondi', muscleGroup: 'Gambe', equipment: 'Manubri',gif: 'assets/gif/affondi.png' },
    { id: '13', name: 'Leg Press', muscleGroup: 'Gambe', equipment: 'Macchina',gif:'assets/gif/leg-press.png' },
    { id: '14', name: 'Leg Curl', muscleGroup: 'Gambe', equipment: 'Macchina' },
    { id: '15', name: 'Calf Raise', muscleGroup: 'Polpacci', equipment: 'Macchina' },
    { id: '16', name: 'Pressa a 45°', muscleGroup: 'Gambe', equipment: 'Macchina',gif:'assets/gif/press-45.png' },

    // Bicipiti
    { id: '17', name: 'Curl con Bilanciere', muscleGroup: 'Bicipiti', equipment: 'Bilanciere',gif:'assets/gif/curl-bilanciere.png' },
    { id: '18', name: 'Curl con Manubri', muscleGroup: 'Bicipiti', equipment: 'Manubri',gif: 'assets/gif/curl-con-manubri.png' },
    { id: '19', name: 'Hammer Curl', muscleGroup: 'Bicipiti', equipment: 'Manubri',gif: 'assets/gif/hammer-curl.png' },
    { id: '20', name: 'Curl ai Cavi', muscleGroup: 'Bicipiti', equipment: 'Cavi' },

    // Tricipiti
    { id: '21', name: 'Pushdown ai Cavi', muscleGroup: 'Tricipiti', equipment: 'Cavi',gif: 'assets/gif/cavi-tricipiti.png' },
    { id: '22', name: 'French Press', muscleGroup: 'Tricipiti', equipment: 'Bilanciere',gif: 'assets/gif/french-press.png' },
    { id: '23', name: 'Dips', muscleGroup: 'Tricipiti',equipment: 'Panca', gif: 'assets/gif/dips.png' },

    // Spalle
    { id: '24', name: 'Shoulder Press', muscleGroup: 'Spalle', equipment: 'Manubri',gif: 'assets/gif/spalle.png' },
    { id: '25', name: 'Alzate Laterali', muscleGroup: 'Spalle', equipment: 'Manubri',gif: 'assets/gif/alzate-laterali.png' },
    { id: '26', name: 'Alzate Frontali', muscleGroup: 'Spalle', equipment: 'Palla kettlebell',gif: 'assets/gif/alzate-frontali.png' },
    { id: '27', name: 'Arnold Press', muscleGroup: 'Spalle', equipment: 'Manubri' },

    // Core
    { id: '28', name: 'Plank', muscleGroup: 'Cardio',equipment: 'Tappetino',gif: 'assets/gif/plank.png' },
    { id: '29', name: 'Crunch', muscleGroup: 'Cardio',equipment: 'Panca',gif: 'assets/gif/addominali.png' },
    { id: '30', name: 'Corsa sul Tapis Roulant', muscleGroup: 'Cardio', equipment: 'Tapis Roulant',gif: 'assets/gif/tapis-roulant.png' },
    { id: '31', name: 'Cyclette', muscleGroup: 'Cardio', equipment: 'Cyclette',gif: 'assets/gif/bicicletta.png' },
    { id: '32', name: 'Stepper', muscleGroup: 'Cardio', equipment: 'Macchine',gif: 'assets/gif/stepper.png' },
  ];

  muscleGroups = ['Petto', 'Dorso', 'Gambe', 'Bicipiti', 'Tricipiti', 'Spalle','Cardio'];

  getExercisesByGroup(group: string): Exercise[] {
    return this.exercises.filter(ex => ex.muscleGroup === group);
  }
}