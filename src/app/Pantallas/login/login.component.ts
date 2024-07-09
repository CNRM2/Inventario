import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRegister(): void {
    this.router.navigate(['/registro']); // Navega a la ruta '/registro'
    
  }
}

