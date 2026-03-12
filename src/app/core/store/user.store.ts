// src/app/core/store/user.store.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

@Injectable({ providedIn: 'root' })
export class UserStore {
  private _user$ = new BehaviorSubject<User | null>(null);

  user$: Observable<User | null> = this._user$.asObservable();

  constructor() {
    // Monitora lo stato Firebase
    onAuthStateChanged(auth, (user) => {
      this._user$.next(user); // user sarà null se non loggato
    });
  }

  setUser(user: User | null) {
    this._user$.next(user);
  }
}