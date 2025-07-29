import { Routes } from '@angular/router';
import { MainLayoutComponent } from './features/main-layout/main-layout.component';
import { authGuard } from './shared/guards/auth.guard';
import { userGuard } from './shared/guards/user.guard';

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
        canActivate: [userGuard],
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
    canActivate: [userGuard],
  },

  {
    path: 'dashboard',
    title: 'Dashboard - Inventory Manager',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    canActivate: [authGuard],
  },

  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
    title: 'Redirect - Inventory Manager',
  },
];
