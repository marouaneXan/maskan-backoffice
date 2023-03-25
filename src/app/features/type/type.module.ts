import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListTypesComponent } from './components/list-types/list-types.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { UpdateTypeComponent } from './components/update-type/update-type.component';
import { DeleteTypeComponent } from './components/delete-type/delete-type.component';



@NgModule({
  declarations: [
    ListTypesComponent,
    AddTypeComponent,
    UpdateTypeComponent,
    DeleteTypeComponent
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
