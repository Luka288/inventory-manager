import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home - Inventory Manager',
    loadComponent: () =>
      import('./features/landing-page/landing-page.component').then(
        (c) => c.LandingPageComponent
      ),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
