// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe, NgIf } from '@angular/common';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile implements OnInit {
  userData: any = null;

  async ngOnInit() {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.userData = docSnap.data();
      }
    }
  }
}