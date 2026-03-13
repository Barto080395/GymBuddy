import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../shared/Accordion/accordion.component';
import { Exercise_Library } from '../../models/workout.model';

@Component({
  selector: 'app-exercise-library',
  standalone: true,
  imports: [CommonModule,AccordionComponent],
  templateUrl: './exercise-library.html',
  styleUrls: ['./exercise-library.scss'],
})
export class ExerciseLibrary {
  exercises: Exercise_Library[] = [
    // Petto
    { id: '1', name: 'Panca Piana', muscleGroup: 'Petto', equipment: 'Bilanciere', gif: 'assets/gif/panca-piana.png',
      description: 'Esercizio classico per sviluppare forza e massa del petto, coinvolge anche spalle e tricipiti.' },
    { id: '2', name: 'Panca Inclinata', muscleGroup: 'Petto', equipment: 'Bilanciere', gif: 'assets/gif/panca-inclinata.png',
      description: 'Focalizza la parte superiore del petto, migliora la definizione e l’estetica del torace.' },
    { id: '3', name: 'Chest Press', muscleGroup: 'Petto', equipment: 'Macchina', gif: 'assets/gif/chess-press.png',
      description: 'Esercizio guidato per petto e tricipiti, ottimo per principianti o riscaldamento.' },
    { id: '4', name: 'Croci ai Cavi', muscleGroup: 'Petto', equipment: 'Cavi', gif: 'assets/gif/panca-piana.png',
      description: 'Isola i pettorali durante il movimento, migliora la definizione e l’allungamento muscolare.' },
    { id: '5', name: 'Push-up', muscleGroup: 'Petto', equipment: 'Corpo Libero', gif: 'assets/gif/piegamenti-sulle-braccia.png',
      description: 'Classico esercizio a corpo libero per forza e resistenza di petto, spalle e tricipiti.' },
  
    // Dorso
    { id: '6', name: 'Lat Machine', muscleGroup: 'Dorso', equipment: 'Macchina', gif: 'assets/gif/lat-machine.png',
      description: 'Sviluppa il gran dorsale, migliorando ampiezza e postura della schiena.' },
    { id: '7', name: 'Pull-up', muscleGroup: 'Dorso', equipment: 'Corpo Libero', gif: 'assets/gif/pullups.png',
      description: 'Esercizio a corpo libero che rafforza dorsali, spalle e braccia, ottimo per forza totale.' },
    { id: '8', name: 'Rematore con Bilanciere', muscleGroup: 'Dorso', equipment: 'Bilanciere',gif: 'assets/gif/panca-piana.png',
      description: 'Rafforza i dorsali, romboidi e bicipiti; migliora stabilità e postura della schiena.' },
    { id: '9', name: 'Stacco da terra', muscleGroup: 'Dorso', equipment: 'Bilanciere', gif: 'assets/gif/stacco.png',
      description: 'Esercizio multi-articolare per schiena, gambe e core; fondamentale per forza totale.' },
    { id: '10', name: 'Pulley', muscleGroup: 'Dorso', equipment: 'Macchina', gif: 'assets/gif/pulley.png',
      description: 'Isola i dorsali mantenendo il movimento guidato, ideale per tecnica e sicurezza.' },
  
    // Gambe
    { id: '11', name: 'Squat', muscleGroup: 'Gambe', equipment: 'Bilanciere', gif: 'assets/gif/squat.png',
      description: 'Esercizio fondamentale per quadricipiti, glutei e core; migliora forza e stabilità.' },
    { id: '12', name: 'Affondi', muscleGroup: 'Gambe', equipment: 'Manubri', gif: 'assets/gif/affondi.png',
      description: 'Isola quadricipiti e glutei, migliora equilibrio e simmetria delle gambe.' },
    { id: '13', name: 'Leg Press', muscleGroup: 'Gambe', equipment: 'Macchina', gif:'assets/gif/leg-press.png',
      description: 'Allenamento guidato per la forza delle gambe, sicuro e controllato.' },
    { id: '14', name: 'Leg Curl', muscleGroup: 'Gambe', equipment: 'Macchina',gif: 'assets/gif/panca-piana.png',
      description: 'Isola i muscoli posteriori della coscia, importante per equilibrio muscolare.' },
    { id: '15', name: 'Calf Raise', muscleGroup: 'Polpacci', equipment: 'Macchina',
      description: 'Rafforza i polpacci e migliora stabilità e resistenza dei piedi.' },
    { id: '16', name: 'Pressa a 45°', muscleGroup: 'Gambe', equipment: 'Macchina', gif:'assets/gif/press-45.png',
      description: 'Simula lo squat su macchina, sviluppa quadricipiti e glutei in sicurezza.' },
  
    // Bicipiti
    { id: '17', name: 'Curl con Bilanciere', muscleGroup: 'Bicipiti', equipment: 'Bilanciere', gif:'assets/gif/curl-bilanciere.png',
      description: 'Isola i bicipiti, ottimo per crescita muscolare e forza del braccio.' },
    { id: '18', name: 'Curl con Manubri', muscleGroup: 'Bicipiti', equipment: 'Manubri', gif: 'assets/gif/curl-con-manubri.png',
      description: 'Permette movimento indipendente per ciascun braccio; migliora simmetria.' },
    { id: '19', name: 'Hammer Curl', muscleGroup: 'Bicipiti', equipment: 'Manubri', gif: 'assets/gif/hammer-curl.png',
      description: 'Focalizza il brachiale e rinforza avambracci; ottimo per definizione braccio.' },
    { id: '20', name: 'Curl ai Cavi', muscleGroup: 'Bicipiti', equipment: 'Cavi',gif: 'assets/gif/panca-piana.png',
      description: 'Controllo costante lungo tutto il movimento, ottimo per contrazione massima.' },
  
    // Tricipiti
    { id: '21', name: 'Pushdown ai Cavi', muscleGroup: 'Tricipiti', equipment: 'Cavi', gif: 'assets/gif/cavi-tricipiti.png',
      description: 'Isola i tricipiti mantenendo movimento guidato, ottimo per definizione.' },
    { id: '22', name: 'French Press', muscleGroup: 'Tricipiti', equipment: 'Bilanciere', gif: 'assets/gif/french-press.png',
      description: 'Rafforza la parte posteriore del braccio, fondamentale per forza e stabilità.' },
    { id: '23', name: 'Dips', muscleGroup: 'Tricipiti', equipment: 'Panca', gif: 'assets/gif/dips.png',
      description: 'Esercizio a corpo libero per tricipiti, spalle e petto; ottimo per forza funzionale.' },
  
    // Spalle
    { id: '24', name: 'Shoulder Press', muscleGroup: 'Spalle', equipment: 'Manubri', gif: 'assets/gif/spalle.png',
      description: 'Sviluppa deltoidi anteriori e laterali, migliora forza e stabilità della spalla.' },
    { id: '25', name: 'Alzate Laterali', muscleGroup: 'Spalle', equipment: 'Manubri', gif: 'assets/gif/alzate-laterali.png',
      description: 'Isola i deltoidi laterali per aumentare larghezza e definizione.' },
    { id: '26', name: 'Alzate Frontali', muscleGroup: 'Spalle', equipment: 'Palla kettlebell', gif: 'assets/gif/alzate-frontali.png',
      description: 'Sviluppa deltoidi anteriori, migliora stabilità e postura.' },
    { id: '27', name: 'Arnold Press', muscleGroup: 'Spalle', equipment: 'Manubri',gif: 'assets/gif/panca-piana.png',
      description: 'Variante della shoulder press che coinvolge tutti i deltoidi e migliora mobilità articolare.' },
  
    // Core / Cardio
    { id: '28', name: 'Plank', muscleGroup: 'Cardio', equipment: 'Tappetino', gif: 'assets/gif/plank.png',
      description: 'Isometrico per addominali e core, migliora stabilità e postura.' },
    { id: '29', name: 'Crunch', muscleGroup: 'Cardio', equipment: 'Panca', gif: 'assets/gif/addominali.png',
      description: 'Focalizza gli addominali superiori; ottimo per definizione e resistenza.' },
    { id: '30', name: 'Corsa sul Tapis Roulant', muscleGroup: 'Cardio', equipment: 'Tapis Roulant', gif: 'assets/gif/tapis-roulant.png',
      description: 'Esercizio cardiovascolare per resistenza, cuore e gambe.' },
    { id: '31', name: 'Cyclette', muscleGroup: 'Cardio', equipment: 'Cyclette', gif: 'assets/gif/bicicletta.png',
      description: 'Allenamento cardio a basso impatto, ideale per gambe e condizione generale.' },
    { id: '32', name: 'Stepper', muscleGroup: 'Cardio', equipment: 'Macchine', gif: 'assets/gif/stepper.png',
      description: 'Simula salita scale, rafforza gambe e migliora resistenza cardiovascolare.' },
  ];

  muscleGroups = ['Petto', 'Dorso', 'Gambe', 'Bicipiti', 'Tricipiti', 'Spalle','Cardio'];

  getExercisesByGroup(group: string): Exercise_Library[] {
    return this.exercises.filter(ex => ex.muscleGroup === group);
  }
}