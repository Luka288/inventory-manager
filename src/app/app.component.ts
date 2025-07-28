import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './shared/components/alert/alert.component';
import { AlertService } from './shared/services/alert.service';
import { CommonModule } from '@angular/common';
import { alertBody } from './shared/interfaces/alert.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlertComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly alertService = inject(AlertService);

  alert = signal<alertBody | null>(null);
  animationClass = signal<'enter' | 'exit'>('enter');

  ngOnInit() {
    this.alertService.alert$.subscribe((alert) => {
      this.alert.set(alert);
    });

    this.alertService.alertClass$.subscribe((alertClass) => {
      this.animationClass.set(alertClass);
    });
  }
}
