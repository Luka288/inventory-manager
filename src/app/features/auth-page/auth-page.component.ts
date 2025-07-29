import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FireAuthService } from '../../shared/services/fire-auth.service';
import { UserRegistration } from '../../shared/models/auth.model';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export class AuthPageComponent {
  private readonly router = inject(ActivatedRoute);
  readonly authService = inject(FireAuthService);

  toggleForm = signal<'login' | 'register'>('login');

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ],
      nonNullable: true,
    }),
  });

  registrationForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),

    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ],
      nonNullable: true,
    }),

    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ],
      nonNullable: true,
    }),
  });

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      if (params['mode'] === 'register') {
        this.toggleForm.set('register');
      } else if (params['mode'] === 'login') {
        this.toggleForm.set('login');
      }
    });
  }

  register() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    const userData = {
      email: this.registrationForm.controls.email.value,
      username: this.registrationForm.controls.username.value,
      password: this.registrationForm.controls.password.value,
    };

    this.authService.registration(UserRegistration.fromUserFrom(userData));
    this.registrationForm.reset();
    this.toggleForm.set('login');
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const userData = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    };

    this.authService.logIn(userData.email, userData.password);
  }
}
