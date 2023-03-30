import { Component } from '@angular/core';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  constructor(private tokenService: TokenService) { }
  checkAuth() {
    return this.tokenService.loggedIn() ? '/admin/dashboard' : '/auth/sign-in'
  }
}
