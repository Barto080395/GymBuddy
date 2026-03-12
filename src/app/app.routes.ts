import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkoutsComponent } from './pages/workouts/workouts.component';
import { ExerciseLibrary } from './pages/exercise-library/exercise-library';
import { Profile } from './pages/profile/profile';
import { Settings } from './pages/settings/settings';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },   // Homepage
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'exercise-library', component: ExerciseLibrary },
  { path: 'profile', component: Profile },
  { path: 'settings', component: Settings },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '' }                // fallback
];