import { Component } from '@angular/core';
import { LoginComponent } from './Pantallas/login/login.component';
import { RegisterComponent } from './Pantallas/register/register.component';
import { HomeHtmlComponent } from './Pantallas/home/home.html/home.html.component';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { EmployeeHomeComponent } from './Pantallas/employee-home/employee-home.component';
import { AdminHomeComponent } from './Pantallas/admin-home/admin-home.component';
import { SupervisorHomeComponent } from './Pantallas/supervisor-home/supervisor-home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [LoginComponent, RegisterComponent, RouterModule, HomeHtmlComponent, EmployeeHomeComponent, AdminHomeComponent, SupervisorHomeComponent]
})
export class AppComponent {
  title: string = 'My App';
}