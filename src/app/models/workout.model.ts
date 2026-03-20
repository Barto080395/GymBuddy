export interface Exercise {
    name: string;
    sets: number;
    reps: number;
    weight?: number;
    running?: boolean;
    duration?: number; // in secondi
    difficulty?: 'easy' | 'medium' | 'hard';  
  }
  
  export interface Workout {
    id: string;
    title: string;
    date: string;
    duration: number;
    exercises: Exercise[];
  }

  export interface Exercise_Library {
    id: string;
    name: string;
    muscleGroup: string;
    equipment?: string;
    gif?: string;
    description?: string;
  }