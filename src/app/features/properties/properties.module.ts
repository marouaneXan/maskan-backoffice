import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPropertiesComponent } from './components/list-properties/list-properties.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListPropertiesComponent,
    AddPropertyComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ListPropertiesComponent,
    AddPropertyComponent
  ],
})
export class PropertiesModule { }
