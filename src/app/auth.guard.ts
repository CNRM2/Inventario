import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    const userRole = this.authService.getUserRole();

    if (isAuthenticated) {
      const allowedRoles = route.data['roles'] as Array<string>;
      if (userRole && allowedRoles.includes(userRole)) {
        return true;
      } else {
        // Redirigir a una página segura si no tiene permisos
        this.router.navigate(['/home']);
        return false;
      }
    } else {
      // Guardar la URL a la que se intentaba acceder
      this.authService.setRedirectUrl(state.url);
      // Redirigir al login si no está autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}
