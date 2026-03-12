import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>Login</h2>

      <input [(ngModel)]="email" placeholder="Email" />
      <input [(ngModel)]="password" type="password" placeholder="Password" />

      <button (click)="login()">Accedi</button>
    </div>
  `,
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: Auth) {}

  async login() {
    await signInWithEmailAndPassword(this.auth, this.email, this.password);
  }
}