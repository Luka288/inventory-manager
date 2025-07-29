import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { User } from './../interfaces/user.interface';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  private readonly fire = inject(Firestore);
  private readonly auth = inject(Auth);
  private readonly alertService = inject(AlertService);
  private readonly router = inject(Router);

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

  async logIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.alertService.showAlert('Login successful!', 'Success', 'success');
        this.router.navigate(['/dashboard']);
      })
      .catch((e) => {
        this.alertService.showAlert('Login failed', 'Error', 'error');
        throw e;
      });
  }

  async logOut() {
    this.auth.signOut().then(() => {
      this.alertService.showAlert(
        'Logged out successfully!',
        'Success',
        'success'
      );
      this.router.navigate(['/auth']);
    });
  }

  async googleAuth() {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(this.auth, provider);

      this.router.navigateByUrl('/dashboard');
    } catch {
      this.alertService.showAlert(
        'Authorized with google',
        'Success',
        'success'
      );
    }
  }
}
