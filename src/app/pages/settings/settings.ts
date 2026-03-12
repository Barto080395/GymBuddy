import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss'],
})
export class Settings {
  settings = [
    { label: 'Notifiche Push', value: true },
    { label: 'Tema Scuro', value: true },
    { label: 'Sincronizzazione Dati', value: false },
  ];
}