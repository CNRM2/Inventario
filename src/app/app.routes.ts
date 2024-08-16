import { Routes } from '@angular/router';
import { AdminHomeComponent } from './Pantallas/admin-home/admin-home.component';
import { SupervisorHomeComponent } from './Pantallas/supervisor-home/supervisor-home.component';
import { EmployeeHomeComponent } from './Pantallas/employee-home/employee-home.component';
import { HomeHtmlComponent } from './Pantallas/home/home.html/home.html.component';
import { LoginComponent } from './Pantallas/login/login.component';

export const routes: Routes = [
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'supervisor-home', component: SupervisorHomeComponent },
  { path: 'employee-home', component: EmployeeHomeComponent },
  { path: 'home', component: HomeHtmlComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
