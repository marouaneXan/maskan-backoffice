import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteristicSelectComponent } from './characteristic-select/characteristic-select.component';
import { SpinnerModule } from 'src/app/features/spinner/spinner.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CharacteristicSelectComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    ReactiveFormsModule
  ],
  exports: [
    CharacteristicSelectComponent
  ]
})
export class CharacteristicSelectModule { }
