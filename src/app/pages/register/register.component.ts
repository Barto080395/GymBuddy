import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Timestamp, doc, setDoc } from 'firebase/firestore';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  nome = '';
  cognome = '';
  email = '';
  password = '';
  eta: number | null = null;
  sesso = '';
  altezza: number | null = null;
  peso: number | null = null;
  obiettivo = '';
  livello = '';
  dataNascita: Date | null = null;
  note = '';
  error = '';

  constructor(private router: Router) {}

  async register() {
    if (!this.nome || !this.email || !this.password) {
      this.error = 'Compila tutti i campi';
      return;
    }

    try {
      // crea utente Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);

      const uid = userCredential.user.uid;

      // salva utente su Firestore
      await setDoc(doc(db, 'users', uid), {
        nome: this.nome,
        cognome: this.cognome,
        email: this.email,
        eta: this.eta,
        sesso: this.sesso,
        altezza: this.altezza,
        peso: this.peso,
        obiettivo: this.obiettivo,
        livello: this.livello,
        dataNascita: this.dataNascita ? Timestamp.fromDate(new Date(this.dataNascita)) : null,
        note: this.note,
        createdAt: new Date(),
      });

      // redirect
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.error = err.message;
    }
  }
}
