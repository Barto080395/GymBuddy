import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import { UserStore } from '../../core/store/user.store';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  user$!: Observable<User | null>;

  constructor(private userStore: UserStore) {
    this.user$ = this.userStore.user$;
  }
}