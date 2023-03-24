import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListCharacteristicsComponent } from './components/list-characteristics/list-characteristics.component';
import { SpinnerModule } from '../spinner/spinner.module';



@NgModule({
  declarations: [
    ListCharacteristicsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SpinnerModule
  ],
  exports:[
    ListCharacteristicsComponent
  ]
})
export class CharacteristicModule { }
