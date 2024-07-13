import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './Registro.html',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class RegisterComponent implements OnInit {
  username: string = '';
  mail: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.authService.register({ username: this.username, mail: this.mail, password: this.password })
      .subscribe(response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      }, error => {
        console.error('Registration failed', error);
      });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
