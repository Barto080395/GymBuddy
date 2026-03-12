import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MiniWidgetComponent } from '../../pages/mini-widget/mini-widget.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import { UserStore } from '../../core/store/user.store';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MiniWidgetComponent,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {

  menuOpen = false;

  user$!: Observable<User | null>;

  constructor(private userStore: UserStore) {
    this.user$ = this.userStore.user$;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}