import { inject } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const userGuard: CanActivateFn = (
  route,
  state
): Observable<boolean | UrlTree> => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Observable<boolean | UrlTree>((observer) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        observer.next(router.parseUrl('/dashboard'));
      } else {
        observer.next(true);
      }

      observer.complete();
      unsub();
    });
  });
};
