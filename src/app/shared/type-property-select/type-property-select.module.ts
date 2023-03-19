import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypePropertySelectComponent } from './type-property-select/type-property-select.component';
import { SpinnerModule } from 'src/app/features/spinner/spinner.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TypePropertySelectComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    ReactiveFormsModule
  ],
  exports:[
    TypePropertySelectComponent
  ]
})
export class TypePropertySelectModule { }
