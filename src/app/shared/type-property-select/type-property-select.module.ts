import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypePropertySelectComponent } from './type-property-select/type-property-select.component';
import { SpinnerModule } from 'src/app/features/spinner/spinner.module';



@NgModule({
  declarations: [
    TypePropertySelectComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule
  ],
  exports:[
    TypePropertySelectComponent
  ]
})
export class TypePropertySelectModule { }
