import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // necessario se vuoi usare imports
  imports: [RouterOutlet, NavbarComponent,FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'], // corretto
})
export class App {
  protected readonly title = signal('GymBuddy');
}
