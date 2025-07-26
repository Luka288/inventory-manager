import { Routes } from '@angular/router';
import { MainLayoutComponent } from './features/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },

      {
        path: 'home',
        title: 'Home - Inventory Manager',
        loadComponent: () =>
          import('./features/landing-page/landing-page.component').then(
            (c) => c.LandingPageComponent
          ),
      },
    ],
  },

  {
    path: 'auth',
    title: 'Authentication - Inventory Manager',
    loadComponent: () =>
      import('./features/auth-page/auth-page.component').then(
        (c) => c.AuthPageComponent
      ),
  },

  {
    path: 'dashboard',
    title: 'Dashboard - Inventory Manager',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },

  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
    title: 'Redirect - Inventory Manager',
  },
];
