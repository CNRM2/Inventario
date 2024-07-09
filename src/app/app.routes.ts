import { Routes } from '@angular/router';
import { LoginComponent } from './Pantallas/login/login.component';
import { RegisterComponent } from './Pantallas/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent }
];
