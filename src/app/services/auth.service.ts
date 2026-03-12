import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { UserStore } from '../core/store/user.store';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private userStore: UserStore) {

    onAuthStateChanged(auth, (user) => {
      this.userStore.setUser(user);
    });

  }

  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(auth, email, password));
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(auth, email, password));
  }

}