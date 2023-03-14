import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPropertiesComponent } from './components/list-properties/list-properties.component';



@NgModule({
  declarations: [
    ListPropertiesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule
  ],
  exports: [
    ListPropertiesComponent
  ],
})
export class PropertiesModule { }
