import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesSelectComponent } from './categories-select/categories-select.component';
import { SpinnerModule } from 'src/app/features/spinner/spinner.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriesSelectComponent,
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    ReactiveFormsModule
  ],
  exports:[
    CategoriesSelectComponent
  ]
})
export class CategoriesSelectModule { }
