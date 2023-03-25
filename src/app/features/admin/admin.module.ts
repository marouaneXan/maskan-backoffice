import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminInformationsComponent } from './components/admin-informations/admin-informations.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from '../spinner/spinner.module';
import { UpdateAdminInformationsComponent } from './components/update-admin-informations/update-admin-informations.component';


@NgModule({
  declarations: [
    AdminInformationsComponent,
    UpdateAdminInformationsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SpinnerModule
  ],
  exports:[
    AdminInformationsComponent,
    UpdateAdminInformationsComponent
  ]
})
export class AdminModule { }
