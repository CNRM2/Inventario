import { Component } from '@angular/core';
import { LoginComponent } from './Pantallas/login/login.component';
import { RegisterComponent } from './Pantallas/register/register.component';
import { HomeHtmlComponent } from './Pantallas/home/home.html/home.html.component';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [LoginComponent, RegisterComponent, RouterModule, HomeHtmlComponent]
})
export class AppComponent {
  title: string = 'My App';
}
