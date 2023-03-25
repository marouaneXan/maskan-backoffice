import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListCharacteristicsComponent } from './components/list-characteristics/list-characteristics.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { DeleteCharacteristicComponent } from './components/delete-characteristic/delete-characteristic.component';
import { AddCharacteristicComponent } from './components/add-characteristic/add-characteristic.component';
import { UpdateCharacteristicComponent } from './components/update-characteristic/update-characteristic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacteristicRouting } from './characteristic-routing.module';



@NgModule({
  declarations: [
    ListCharacteristicsComponent,
    DeleteCharacteristicComponent,
    AddCharacteristicComponent,
    UpdateCharacteristicComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SpinnerModule,
    ReactiveFormsModule,
    CharacteristicRouting
  ],
  exports:[
    ListCharacteristicsComponent
  ]
})
export class CharacteristicModule { }
