import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { TokenService } from 'src/app/core/services/token.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isLoading: boolean = false
  signInForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  })
  constructor(private authService: AuthService, private tokenServie: TokenService, private toastr: ToastrService, private loadinService: LoadingService) { }
  signIn(data: FormGroup) {
    if (!this.signInForm.value.email || !this.signInForm.value.password) this.toastr.error('Please add all fields')
    else {
      this.isLoading = true
      this.loadinService.show()
      this.authService.signIn(data.value).subscribe(
        res => {
          this.isLoading = false
          this.loadinService.hide()
          this.tokenServie.setDataToLocalStorage(res)
          this.authService.changeStatus(true)
          this.toastr.success(res.message)
        },
        err => {
          this.isLoading = false
          this.loadinService.hide()
          this.toastr.error(err.error.message)
          this.authService.changeStatus(false)
        }
      )
    }
  }
}
