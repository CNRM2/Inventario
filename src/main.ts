import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './app/Pantallas/login/login.component';
import { RegisterComponent } from './app/Pantallas/register/register.component';
import { HomeHtmlComponent } from './app/Pantallas/home/home.html/home.html.component';
import { EmployeeHomeComponent } from './app/Pantallas/employee-home/employee-home.component';
import { AdminHomeComponent } from './app/Pantallas/admin-home/admin-home.component';
import { SupervisorHomeComponent } from './app/Pantallas/supervisor-home/supervisor-home.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeHtmlComponent },
  { path: 'employee-home', component: EmployeeHomeComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'supervisor-home', component: SupervisorHomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
}).catch(err => console.error(err));
