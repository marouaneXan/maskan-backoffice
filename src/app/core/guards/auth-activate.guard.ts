import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthActivateGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router, private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.tokenService.loggedIn()) {
      this.tokenService.clearLocalStorage()
      this.authService.changeStatus(false)
      this.router.navigateByUrl('auth/sign-in')
      return false
    }
    return true
  }

}
