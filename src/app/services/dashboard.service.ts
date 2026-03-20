// src/app/services/dashboard.service.ts
import { Injectable } from '@angular/core';
import { User, onAuthStateChanged } from 'firebase/auth';

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

@Injectable({
  providedIn: 'root', // rende il servizio disponibile globalmente
})

export class DashboardService {
  userName = '';

  constructor() {}

  // Metodo per recuperare il nome e cognome dell'utente
  async fetchUserName(): Promise<string | null> {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, async (user: User | null) => {
        if (user) {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            this.userName = data['nome'] + ' ' + data['cognome'];
            resolve(this.userName);
          } else {
            resolve(null);
          }
        } else {
          resolve(null);
        }
      });
    });
  }

  // ==============================
  // Recupera statistiche utente
  // ==============================

  async fetchStats(): Promise<any[] | null> {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, async (user: User | null) => {
        if (!user) {
          resolve(null);
          return;
        }

        try {
          const docRef = doc(db, 'stats', user.uid);

          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();

            resolve(data['statsByMuscle']);
          } else {
            // se non esistono statistiche ancora
            resolve(null);
          }
        } catch (error) {
          console.error('Errore recupero statistiche:', error);

          resolve(null);
        }
      });
    });
  }

  // ==============================
  // Recupera Record
  // ==============================

  async getRecords(): Promise<any[]> {
    const user = auth.currentUser;
    if (!user) return [];

    const docRef = doc(db, 'records', user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data()['records'];
    }

    return [];
  }

  // ==============================
  // Recupera il workout di oggi
  // ==============================
  async fetchTodayWorkout(): Promise<string | null> {
    const user = auth.currentUser;
    if (!user) return null;

    try {
      const docRef = doc(db, 'todayWorkouts', user.uid); // raccolta separata per allenamenti di oggi
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data()['workout'] || null;
      }

      return null;
    } catch (error) {
      console.error('Errore recupero allenamento di oggi:', error);
      return null;
    }
  }

  // ==============================
  // Salva il workout di oggi
  // ==============================
  async saveTodayWorkout(workout: string): Promise<void> {
    const user = auth.currentUser;
    if (!user) return;

    try {
      const docRef = doc(db, 'todayWorkouts', user.uid);
      await setDoc(docRef, {
        workout,
        updatedAt: new Date(),
      });
    } catch (error) {
      console.error('Errore salvataggio allenamento di oggi:', error);
    }
  }

  // ==============================
  // Salva Records
  // ==============================

  async saveRecords(records: any[]) {
    const user = auth.currentUser;
    if (!user) return;

    const docRef = doc(db, 'records', user.uid);

    await setDoc(docRef, { records });
  }

  // ==============================
  // Salva statistiche utente
  // ==============================

  async saveStats(statsByMuscle: any[]): Promise<boolean> {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, async (user: User | null) => {
        if (!user) {
          resolve(false);
          return;
        }

        try {
          const docRef = doc(db, 'stats', user.uid);

          await setDoc(docRef, {
            statsByMuscle: statsByMuscle,
          });

          resolve(true);
        } catch (error) {
          console.error('Errore salvataggio statistiche:', error);

          resolve(false);
        }
      });
    });
  }
}
