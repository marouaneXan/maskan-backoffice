import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteristicSelectComponent } from './characteristic-select/characteristic-select.component';
import { SpinnerModule } from 'src/app/features/spinner/spinner.module';



@NgModule({
  declarations: [
    CharacteristicSelectComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule
  ],
  exports: [
    CharacteristicSelectComponent
  ]
})
export class CharacteristicSelectModule { }
