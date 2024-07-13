import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/Pantallas/login/login.component';
import { RegisterComponent } from './app/Pantallas/register/register.component';
import { HomeHtmlComponent } from './app/Pantallas/home/home.html/home.html.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeHtmlComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(),
    importProvidersFrom(RouterModule.forRoot(routes)),
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
}).catch(err => console.error(err));
