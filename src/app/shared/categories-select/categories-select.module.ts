import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesSelectComponent } from './categories-select/categories-select.component';



@NgModule({
  declarations: [
    CategoriesSelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CategoriesSelectComponent
  ]
})
export class CategoriesSelectModule { }
