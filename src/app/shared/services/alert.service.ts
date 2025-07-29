import { Injectable } from '@angular/core';
import { alertBody } from '../interfaces/alert.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private displayAlert = new BehaviorSubject<alertBody | null>(null);
  alert$ = this.displayAlert.asObservable();

  private alertClass = new BehaviorSubject<'enter' | 'exit'>('enter');
  alertClass$ = this.alertClass.asObservable();

  private alertTimeout: ReturnType<typeof setTimeout> | null = null;
  private exitTimeout: ReturnType<typeof setTimeout> | null = null;

  showAlert(
    message: string,
    title: string,
    type: 'success' | 'error' | 'info' | 'warning'
  ) {
    if (this.alertTimeout) clearTimeout(this.alertTimeout);
    if (this.exitTimeout) clearTimeout(this.exitTimeout);

    this.alertClass.next('enter');

    this.displayAlert.next({
      message: message,
      title: title,
      type: type,
    });

    this.alertTimeout = setTimeout(() => {
      this.alertClass.next('exit');

      this.exitTimeout = setTimeout(() => {
        this.displayAlert.next(null);
      }, 400);
    }, 3000);
  }

  clearAlert() {
    if (this.alertTimeout) clearTimeout(this.alertTimeout);
    if (this.exitTimeout) clearTimeout(this.exitTimeout);

    this.alertClass.next('exit');
    this.displayAlert.next(null);
  }
}
