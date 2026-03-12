import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStore } from '../../core/store/user.store';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

@Component({
  selector: 'app-mini-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-widget.component.html',
  styleUrls: ['./mini-widget.component.scss']
})
export class MiniWidgetComponent implements OnInit {

  avatar: string | null = null;
  menuOpen = false;

  constructor(private userStore: UserStore) {}

  ngOnInit(): void {
    const savedAvatar = localStorage.getItem('avatar');
    if (savedAvatar) {
      this.avatar = savedAvatar;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    // Rimuovi avatar locale
    localStorage.removeItem('avatar');

    // Aggiorna lo stato globale
    this.userStore.setUser(null);

    // Effettua il logout su Firebase
    signOut(auth).then(() => {
      // reindirizza alla home/login
      window.location.href = '/';
    });
  }

}