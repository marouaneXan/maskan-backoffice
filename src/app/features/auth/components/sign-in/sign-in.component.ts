import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  })
  constructor(private authService: AuthService, private tokenServie: TokenService, private toastr: ToastrService) { }
  signIn(data: FormGroup) {
    this.authService.signIn(data.value).subscribe(
      res => {
        this.tokenServie.setDataToLocalStorage(res)
        this.authService.changeStatus(true)
        this.toastr.success(res.message)
      },
      err => {
        this.toastr.success(err.message)
        this.authService.changeStatus(false)
      }
    )
  }
}
