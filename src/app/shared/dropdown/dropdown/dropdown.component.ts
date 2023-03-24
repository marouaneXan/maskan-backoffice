import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  constructor(private tokenService: TokenService, private router: Router) { }
  logout() {
    this.tokenService.clearLocalStorage()
    setTimeout(() => {
      this.router.navigate(['/auth/sign-in'])
    }, 1000)
  }
}
