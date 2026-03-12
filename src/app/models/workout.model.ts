export interface Exercise {
    name: string;
    sets: number;
    reps: number;
    weight?: number;
    running?: boolean;
  }
  
  export interface Workout {
    id: string;
    title: string;
    date: string;
    duration: number;
    exercises: Exercise[];
  }