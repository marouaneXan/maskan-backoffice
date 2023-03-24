import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListTypesComponent } from './components/list-types/list-types.component';
import { SpinnerModule } from '../spinner/spinner.module';



@NgModule({
  declarations: [
    ListTypesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SpinnerModule
  ],
  exports:[
    ListTypesComponent
  ]
})
export class TypeModule { }
