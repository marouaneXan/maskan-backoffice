import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesSelectComponent } from './categories-select/categories-select.component';
import { SpinnerModule } from 'src/app/features/spinner/spinner.module';



@NgModule({
  declarations: [
    CategoriesSelectComponent,
  ],
  imports: [
    CommonModule,
    SpinnerModule
  ],
  exports:[
    CategoriesSelectComponent
  ]
})
export class CategoriesSelectModule { }
