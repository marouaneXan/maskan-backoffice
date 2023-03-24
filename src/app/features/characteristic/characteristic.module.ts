import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListCharacteristicsComponent } from './components/list-characteristics/list-characteristics.component';



@NgModule({
  declarations: [
    ListCharacteristicsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ListCharacteristicsComponent
  ]
})
export class CharacteristicModule { }
