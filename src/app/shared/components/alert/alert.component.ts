import { Component, inject, Input } from '@angular/core';
import { alertBody } from '../../interfaces/alert.interface';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  @Input() alertData: alertBody | null = null;
  @Input() animationClass: 'enter' | 'exit' = 'enter';

  tyoeTest = 'success';
}
