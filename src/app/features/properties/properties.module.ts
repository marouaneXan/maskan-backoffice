import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPropertiesComponent } from './components/list-properties/list-properties.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';



@NgModule({
  declarations: [
    ListPropertiesComponent,
    AddPropertyComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule
  ],
  exports: [
    ListPropertiesComponent,
    AddPropertyComponent
  ],
})
export class PropertiesModule { }
