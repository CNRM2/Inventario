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
      .subscribe(response => {
        console.log('Login successful', response);
        //this.router.navigate(['/home']);
      }, error => {
        console.error('Login failed', error);
      });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}