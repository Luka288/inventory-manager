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

  showAlert(
    message: string,
    title: string,
    type: 'success' | 'error' | 'info' | 'warning'
  ) {
    // Logic to display alert

    this.displayAlert.next({
      message: message,
      title: title,
      type: type,
    });

    setTimeout(() => {
      this.alertClass.next('exit');

      setTimeout(() => {
        this.displayAlert.next(null);
      }, 400);
    }, 3000);
  }

  clearAlert() {
    this.alertClass.next('exit');
    this.displayAlert.next(null);
  }
}
