import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { User } from './../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  private readonly fire = inject(Firestore);
  private readonly auth = inject(Auth);

  registration(user: User) {
    //TODO: Implement user registration logic
    console.log(user);
  }
}
