import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { importProvidersFrom, StaticProvider } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pantallas/login/login.component'; 
import { RegisterComponent } from './Pantallas/register/register.component'; 

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

import { APP_BASE_HREF } from '@angular/common';

platformBrowserDynamic().bootstrapModule(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule) as unknown as StaticProvider,
    importProvidersFrom(HttpClientModule) as unknown as StaticProvider,
    importProvidersFrom(HttpClient) as unknown as StaticProvider,
    importProvidersFrom(RouterModule.forRoot(routes)) as unknown as StaticProvider,
    { provide: APP_BASE_HREF, useValue: '/' } as StaticProvider
  ]
}).catch(err => console.error(err));
