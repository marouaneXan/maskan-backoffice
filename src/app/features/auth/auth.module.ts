import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthRoutingModule } from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms'

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    SpinnerModule
  ]
})
export class AuthModule { }
