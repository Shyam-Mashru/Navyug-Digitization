import { Routes } from '@angular/router';
import { Authentication } from './pages/authentication/authentication';

export const routes: Routes = [
    { path: 'auth', component: Authentication, 
        children: [
            { path: 'login', loadComponent: () => import('./pages/authentication/login/login').then(m => m.Login) },
            { path: 'register', loadComponent: () => import('./pages/authentication/register/register').then(m => m.Register) },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    },

    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
    { path: 'subscriptions', loadComponent: () => import('./pages/subscriptions/subscriptions').then(m => m.Subscriptions) },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];
