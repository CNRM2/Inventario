import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login({ username: this.username, password: this.password })
      .subscribe({
        next: (response) => {
          // Guarda la respuesta en el almacenamiento local
          localStorage.setItem('user', JSON.stringify(response));

          // Redirige según el rol del usuario
          const user = response;
          if (user.rol === 'Administrador') {
            this.router.navigate(['/admin-home']);
          } else if (user.rol === 'Supervisor') {
            this.router.navigate(['/supervisor-home']);
          } else if (user.rol === 'Empleado') {
            this.router.navigate(['/employee-home']);
          } else {
            this.router.navigate(['/home']); // Ruta por defecto
          }
          console.log('Login successful', response);
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}