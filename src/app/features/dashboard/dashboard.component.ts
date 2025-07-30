import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FireAuthService } from '../../shared/services/fire-auth.service';
import { SidePanelComponent } from '../../shared/components/side-panel/side-panel.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SidePanelComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private readonly authService = inject(FireAuthService);

  logOut() {
    this.authService.logOut();
  }
}
