import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FireAuthService } from '../../shared/services/fire-auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private readonly authService = inject(FireAuthService);

  logOut() {
    this.authService.logOut();
  }
}
