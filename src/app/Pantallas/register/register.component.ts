import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registro',
    templateUrl: './Registro.html',
})
export class RegisterComponent {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    goToLogin(): void {
        this.router.navigate(['/login']); // Navega a la ruta '/registro'

    }

}
