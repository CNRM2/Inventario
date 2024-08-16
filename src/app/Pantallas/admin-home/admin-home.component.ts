import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AdminHomeComponent implements OnInit {
  users: any[] = [];  // Array para almacenar los datos de usuarios

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.authService.getUsers().subscribe(
      data => {
        // Convertir las fechas en milisegundos a formato legible
        this.users = data.map(user => ({
          ...user,
          fechaIngreso: this.convertMillisecondsToDate(user.fechaIngreso),
        }));
      },
      error => {
        console.error('Error loading users', error);
      }
    );
  }

  convertMillisecondsToDate(milliseconds: number): string {
    const date = new Date(milliseconds);
    return date.toISOString().split('T')[0]; // Formato YYYY-MM-DD
  }

  editUser(user: any): void {
    // Implementa la lógica para editar el usuario
    // Podrías abrir un modal con un formulario de edición, por ejemplo
    console.log('Editing user', user);
  }

  deleteUser(idUser: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.authService.deleteUser(idUser).subscribe(
        () => {
          // Recargar la lista de usuarios después de eliminar uno
          this.loadUsers();
          // Mostrar un mensaje de éxito
          alert('Usuario eliminado correctamente.');
        },
        error => {
          console.error('Error deleting user', error);
          // Mostrar un mensaje de error
          alert('Error al eliminar el usuario.');
        }
      );
    }
  }
  
}
