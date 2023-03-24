import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListTypesComponent } from './components/list-types/list-types.component';



@NgModule({
  declarations: [
    ListTypesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ListTypesComponent
  ]
})
export class TypeModule { }
