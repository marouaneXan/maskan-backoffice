import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminInformationsComponent } from './components/admin-informations/admin-informations.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminInformationsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    AdminInformationsComponent
  ]
})
export class AdminModule { }
