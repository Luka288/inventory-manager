import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FireAuthService } from '../../services/fire-auth.service';

@Component({
  selector: 'app-side-panel',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  readonly authService = inject(FireAuthService);
}
