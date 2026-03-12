import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserStore } from '../../core/store/user.store';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private userStore: UserStore
  ) {}

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (userCredential) => {
        // Aggiorna lo store globale con l’utente appena loggato
        this.userStore.setUser(userCredential.user);

        // Naviga alla dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (err) => (this.error = err.message)
    });
  }
}