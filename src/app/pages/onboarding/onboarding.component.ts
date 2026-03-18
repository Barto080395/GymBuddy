import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

interface OnboardingStep {
  title: string;
  description?: string;
  list?: string[];
  cta?: boolean;
}

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {
  @Output() onboardingClosed = new EventEmitter<void>();

  step = 0;
  show = true;
  steps: OnboardingStep[] = [];

  // ✅ sempre aggiornato
  get maxStep() {
    return this.steps.length - 1;
  }

  ngOnInit() {
    this.steps = [
      {
        title: 'Benvenuto in GymBuddy!',
        description:
          'Gestisci tutto con la tua app personale: semplice, veloce e completamente digitale.',
      },
      {
        title: 'Funzionalità principali',
        list: [
          'Dashboard con statistiche sempre aggiornate',
          'Cronometro integrato per esercizi e tempi di recupero',
          'Libreria completa degli esercizi',
          'Profilo personale con tutti i tuoi dati',
        ],
      },
      {
        title: 'Supporto',
        list: [
          'Contattaci facilmente via email per qualsiasi esigenza',
          'Supporto diretto anche tramite telefono',
          'Siamo sempre disponibili ad aiutarti',
        ],
      },
      {
        title: 'Inizia Subito',
        description:
          'L’app è completamente gratuita: usala liberamente e inizia subito il tuo percorso.',
        cta: true,
      },
    ];

    const seen = localStorage.getItem('onboardingSeen');
    if (seen) this.show = false;
  }

  next() {
    if (this.step < this.maxStep) this.step++;
  }

  prev() {
    if (this.step > 0) this.step--;
  }

  goToStep(index: number) {
    this.step = index;
  }

  close() {
    this.show = false;
    localStorage.setItem('onboardingSeen', 'true');
    this.onboardingClosed.emit();
  }
}
