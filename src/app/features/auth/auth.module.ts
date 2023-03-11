import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthRoutingModule } from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms'

import { SignInComponent } from './components/sign-in/sign-in.component';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
