import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDisactivateGuard implements CanActivate {
  constructor(private tokenService:TokenService,private router:Router,private authService:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.tokenService.loggedIn()){
        this.router.navigateByUrl('admin/dashboard')
        this.authService.changeStatus(true)
        return false
      }
      return true
  }
  
}
