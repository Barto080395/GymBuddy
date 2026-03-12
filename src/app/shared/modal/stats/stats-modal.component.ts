import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stats-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-modal.component.html',
  styleUrls: ['./stats-modal.component.scss'],
})
export class StatsModalComponent {
  @Input() title: string = 'Titolo Modale';
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  // Chiude il modale
  onClose() {
    this.close.emit();
  }
}