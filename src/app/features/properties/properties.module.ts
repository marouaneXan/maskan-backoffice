import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPropertiesComponent } from './components/list-properties/list-properties.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesSelectModule } from 'src/app/shared/categories-select/categories-select.module';
import { TypePropertySelectModule } from 'src/app/shared/type-property-select/type-property-select.module';
import { CharacteristicSelectModule } from 'src/app/shared/characteristic-select/characteristic-select.module';
import { SpinnerModule } from '../spinner/spinner.module';



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
    HttpClientModule,
    CategoriesSelectModule,
    TypePropertySelectModule,
    CharacteristicSelectModule,
    SpinnerModule
  ],
  exports: [
    ListPropertiesComponent,
    AddPropertyComponent
  ],
})
export class PropertiesModule { }
