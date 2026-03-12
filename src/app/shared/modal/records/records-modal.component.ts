import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-records-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './records-modal.component.html',
  styleUrls: ['./records-modal.component.scss'],
})
export class RecordsModalComponent {
  @Input() title: string = 'Titolo Modale';
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  // Chiude il modale
  onClose() {
    this.close.emit();
  }
}