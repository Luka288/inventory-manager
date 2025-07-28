import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { User } from './../interfaces/user.interface';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  private readonly fire = inject(Firestore);
  private readonly auth = inject(Auth);
  private readonly alertService = inject(AlertService);

  registration(user: User) {
    try {
      const userCreation = createUserWithEmailAndPassword(
        this.auth,
        user.email,
        user.password
      );

      this.alertService.showAlert(
        'Registration successful!',
        'Success',
        'success'
      );
    } catch (error) {
      throw error;
    }
  }
}
