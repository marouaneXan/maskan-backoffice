import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isLoading: boolean = false

  signUpForm=new FormGroup({
    name:new FormControl(null,Validators.required),
    phone:new FormControl(null,Validators.required),
    adress:new FormControl(null,Validators.required),
    city:new FormControl(null,Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  })
  constructor(private authService:AuthService,private toastr:ToastrService,private loadingService:LoadingService,private tokenService:TokenService){}

  signUp(data: FormGroup) {
    if (!this.signUpForm.value.email || !this.signUpForm.value.password) this.toastr.error('Please add all fields')
    else {
      this.isLoading = true
      this.loadingService.show()
      this.authService.signUp(data.value).subscribe(
        res => {
          this.isLoading = false
          this.loadingService.hide()
          this.tokenService.setDataToLocalStorage(res)
          this.authService.changeStatus(true)
          this.toastr.success(res.message)
        },
        err => {
          this.isLoading = false
          this.loadingService.hide()
          this.toastr.error(err.error.message)
          this.authService.changeStatus(false)
        }
      )
    }
  }

}
