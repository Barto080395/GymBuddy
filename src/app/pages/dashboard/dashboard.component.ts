import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { FormsModule } from '@angular/forms';
import { StatsModalComponent } from '../../shared/modal/stats/stats-modal.component';
import { RecordsModalComponent } from '../../shared/modal/records/records-modal.component';
import { AccordionComponent } from '../../shared/Accordion/accordion.component';
import { OnboardingComponent } from '../onboarding/onboarding.component';
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    StatsModalComponent,
    RecordsModalComponent,
    FormsModule,
    AccordionComponent,
    OnboardingComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userName = '';
  statsModalVisible = false;
  recordsModalVisible = false;
  selectedMuscleStats: { muscle: string; stats: any[] } | null = null;
  showOnboarding = true;
  todayWorkout = '';
  platformId = inject(PLATFORM_ID);

  statsByMuscle = [
    {
      muscle: 'Petto',
      stats: [
        { label: 'Serie completate', value: 8 },
        { label: 'Massimale', value: '70kg x 5' },
        { label: 'Ripetizioni massime', value: 12 },
        { label: 'Tempo', value: '65 minuti' },
      ],
    },
    {
      muscle: 'Dorso',
      stats: [
        { label: 'Serie completate', value: 10 },
        { label: 'Massimale', value: '100kg x 3' },
        { label: 'Ripetizioni massime', value: 10 },
        { label: 'Tempo', value: '65 minuti' },
      ],
    },
    {
      muscle: 'Gambe',
      stats: [
        { label: 'Serie completate', value: 9 },
        { label: 'Massimale', value: '120kg x 4' },
        { label: 'Ripetizioni massime', value: 8 },
        { label: 'Tempo', value: '65 minuti' },
      ],
    },
    {
      muscle: 'Spalle',
      stats: [
        { label: 'Serie completate', value: 7 },
        { label: 'Massimale', value: '50kg x 6' },
        { label: 'Ripetizioni massime', value: 12 },
        { label: 'Tempo', value: '59 minuti' },
      ],
    },
    {
      muscle: 'Bicipiti',
      stats: [
        { label: 'Serie completate', value: 6 },
        { label: 'Massimale', value: '30kg x 8' },
        { label: 'Ripetizioni massime', value: 15 },
        { label: 'Tempo', value: '35 minuti' },
      ],
    },
    {
      muscle: 'Tricipiti',
      stats: [
        { label: 'Serie completate', value: 5 },
        { label: 'Massimale', value: '25kg x 10' },
        { label: 'Ripetizioni massime', value: 12 },
        { label: 'Tempo', value: '35 minuti' },
      ],
    },
    {
      muscle: 'Cardio',
      stats: [
        { label: 'Serie completate', value: 3 },
        { label: 'Durata', value: '30min' },
        { label: 'Calorie bruciate', value: 250 },
      ],
    },
  ];

  badges = [
    { label: '🔥 Streak 5 giorni', icon: 'fa-fire' },
    { label: '🏆 Primo record', icon: 'fa-medal' },
    { label: '💪 Obiettivo settimana completato', icon: 'fa-flag-checkered' },
  ];

  upcomingWorkouts = [
    { day: 'Lunedì', workout: 'Petto', time: '18:00', completed: true },
    { day: 'Martedì', workout: 'Dorso', time: '18:00', completed: true },
    { day: 'Mercoledì', workout: 'Gambe', time: '18:30', completed: true },
    { day: 'Giovedì', workout: 'Spalle', time: '18:30', completed: true },
    { day: 'Venerdì', workout: 'Bicipiti e Tricipiti', time: '18:00', completed: true },
    { day: 'Sabato', workout: 'Cardio', time: '18:00', completed: true },
  ];

  personalRecords = [
    { exercise: 'Panca piana', max: '80kg x 5' },
    { exercise: 'Stacco', max: '120kg x 3' },
    { exercise: 'Military press', max: '71kg x 3' },
    { exercise: 'Squat', max: '100kg x 4' },
  ];

  shortcuts = [
    { label: 'Nuovo Allenamento', route: '/workouts', icon: 'fa-plus' },
    { label: 'Libreria Esercizi', route: '/exercise-library', icon: 'fa-book' },
    { label: 'Profilo', route: '/profile', icon: 'fa-user' },
  ];

  constructor(private dashboardService: DashboardService) {}

  async ngOnInit() {
    // Controlla se l'utente ha già visto l'onboarding
    if (isPlatformBrowser(this.platformId)) {
      const seen = localStorage.getItem('onboardingSeen');
      this.showOnboarding = !seen;
    }
  

    const name = await this.dashboardService.fetchUserName();
    if (name) this.userName = name;

    const stats = await this.dashboardService.fetchStats();
    if (stats) this.statsByMuscle = stats;

    const records = await this.dashboardService.getRecords();
    if (records && records.length > 0) this.personalRecords = records;

    const savedToday = await this.dashboardService.fetchTodayWorkout();
    if (savedToday) this.todayWorkout = savedToday;
  }

  onOnboardingClosed() {
    this.showOnboarding = false;
  }

  async saveTodayWorkout() {
    if (!this.todayWorkout) return;

    await this.dashboardService.saveTodayWorkout(this.todayWorkout);

    // Aggiorna l'array degli allenamenti
    const todayIndex = new Date().getDay();
    const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    const today = days[todayIndex];

    const existing = this.upcomingWorkouts.find((w) => w.day === today);
    if (existing) {
      existing.workout = this.todayWorkout;
      existing.completed = true;
    } else {
      this.upcomingWorkouts.push({
        day: today,
        workout: this.todayWorkout,
        time: '18:00',
        completed: true,
      });
    }

    alert('Allenamento di oggi salvato! ✅');
  }

  getRemainingWorkouts() {
    const todayIndex = new Date().getDay();
    const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

    // escludiamo oggi
    const remainingDays = days.slice(todayIndex + 1);
    return this.upcomingWorkouts.filter((w) => remainingDays.includes(w.day));
  }

  // Converte una stringa tipo "45" o "1h 30m" in minuti
  getTimeInMinutes(time: string | number | undefined): number {
    if (!time) return 0;

    if (typeof time === 'number') return time;

    // se è solo un numero come stringa "45"
    if (/^\d+$/.test(time)) return parseInt(time, 10);

    // se è tipo "1h 30m" o "45m"
    const hoursMatch = time.match(/(\d+)h/);
    const minutesMatch = time.match(/(\d+)m/);

    let total = 0;
    if (hoursMatch) total += parseInt(hoursMatch[1], 10) * 60;
    if (minutesMatch) total += parseInt(minutesMatch[1], 10);

    return total;
  }

  openMuscleModal(group: { muscle: string; stats: any[] }) {
    this.selectedMuscleStats = group;
    this.statsModalVisible = true;
  }

  openRecordsModal() {
    this.recordsModalVisible = true;
  }

  closeModal() {
    this.statsModalVisible = false;
    this.selectedMuscleStats = { muscle: '', stats: [] }; // invece di null
  }

  closeRecordsModal() {
    this.recordsModalVisible = false;
  }

  async saveAndClose() {
    await this.dashboardService.saveStats(this.statsByMuscle);
    this.closeModal();
    alert('Statistiche aggiornate! 😊');
  }

  async saveRecords() {
    await this.dashboardService.saveRecords(this.personalRecords);
    this.closeRecordsModal();
    alert('Record aggiornati! 😊');
  }
}
