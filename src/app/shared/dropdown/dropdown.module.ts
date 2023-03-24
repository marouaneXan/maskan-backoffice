import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule
  ],
  exports:[
    DropdownComponent
  ]
})
export class DropdownModule { }
