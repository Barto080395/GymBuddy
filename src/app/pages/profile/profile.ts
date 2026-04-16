import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Fondamentale per ngModel
import { auth, db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore'; // Aggiunto updateDoc

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit {
  userData: any = null;
  editData: any = null; // Copia di lavoro per il form
  loading: boolean = true;
  editMode = signal<boolean>(false);

  ngOnInit(): void {
    this.loadUserData();
  }

  private async loadUserData() {
    this.loading = true;
    try {
      const user = auth.currentUser;
      if (user) {
        const data = await this.fetchFromFirestore(user.uid);
        this.userData = data ? this.formatData(data) : null;
        // Inizializziamo editData con una copia profonda
        this.editData = this.userData ? { ...this.userData } : null;
      }
    } catch (error) {
      console.error('Errore caricamento profilo:', error);
    } finally {
      this.loading = false;
    }
  }

  private async fetchFromFirestore(uid: string) {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  }

  private formatData(data: any) {
    return {
      ...data,
      dataNascita: data['dataNascita'] ? data['dataNascita'].toDate() : null,
    };
  }

  // --- LOGICA DI AGGIORNAMENTO ---

  toggleEdit() {
    this.editMode.set(true);
    this.editData = { ...this.userData }; // Reset dei campi del form ai valori attuali
  }

  annulla() {
    this.editMode.set(false);
    this.editData = { ...this.userData };
  }

  async salva() {
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        
        // Rimuoviamo eventuali campi che non vogliamo salvare (es. l'id se presente)
        const { dataNascita, ...toSave } = this.editData;

        await updateDoc(docRef, toSave);
        
        this.userData = { ...this.editData }; // Aggiorna la vista
        this.editMode.set(false);
        alert('Profilo aggiornato con successo! ✨');
      }
    } catch (error) {
      console.error("Errore durante l'aggiornamento:", error);
      alert("Errore nel salvataggio dei dati.");
    }
  }
}