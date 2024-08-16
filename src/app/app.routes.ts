import { Routes } from '@angular/router';
import { LoginComponent } from './Pantallas/login/login.component';
import { RegisterComponent } from './Pantallas/register/register.component';
import { HomeHtmlComponent } from './Pantallas/home/home.html/home.html.component';
import { AdminHomeComponent } from './Pantallas/admin-home/admin-home.component';
import { SupervisorHomeComponent } from './Pantallas/supervisor-home//supervisor-home.component';
import { EmployeeHomeComponent } from './Pantallas/employee-home/employee-home.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeHtmlComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'supervisor', component: SupervisorHomeComponent, canActivate: [AuthGuard], data: { roles: ['Supervisor'] } },
  { path: 'employee', component: EmployeeHomeComponent, canActivate: [AuthGuard], data: { roles: ['Employee'] } },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
