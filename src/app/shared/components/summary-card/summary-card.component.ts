import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  imports: [CommonModule],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss',
})
export class SummaryCardComponent {
  @Input() title!: string;
  @Input() value!: number;
  @Input() subText!: string;
  @Input() trend?: {
    direction: 'up' | 'down';
    percent: number;
  };
  @Input() bgColor?: string;
}
