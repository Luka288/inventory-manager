import { inject } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { observable, Observable } from 'rxjs';

export const authGuard: CanActivateFn = (
  route,
  state
): Observable<boolean | UrlTree> => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Observable<boolean | UrlTree>((observer) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        observer.next(true);
      } else {
        observer.next(router.parseUrl('/home')); // ან ავტორიზაციის გვერდი
      }

      observer.complete();
      unsub();
    });
  });
};
