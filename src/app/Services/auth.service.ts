import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';
  private usersUrl = 'http://localhost:8080/usuarios'; 
  private redirectUrl: string | null = null; // Nueva propiedad para almacenar la URL de redirección

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(user: { username: string, mail: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(idUser: number): Observable<void> {
    return this.http.delete<void>(`${this.usersUrl}/${idUser}`);
  }

  isAuthenticated(): boolean {
    // Lógica para determinar si el usuario está autenticado
    return !!localStorage.getItem('currentUser');
  }

  getUserRole(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    return currentUser ? currentUser.rol : '';
  }

  setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }

  getRedirectUrl(): string | null {
    return this.redirectUrl;
  }

  clearRedirectUrl() {
    this.redirectUrl = null;
  }
}