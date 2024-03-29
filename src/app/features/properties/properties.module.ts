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
import { PropertyVisibilityComponent } from './components/property-visibility/property-visibility.component';
import { DeletePropertyComponent } from './components/delete-property/delete-property.component';
import { UpdatePropertyComponent } from './components/update-property/update-property.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import {CloudinaryModule} from '@cloudinary/ng';
import { DescPipe } from './pipe/desc.pipe';



@NgModule({
  declarations: [
    ListPropertiesComponent,
    AddPropertyComponent,
    PropertyVisibilityComponent,
    DeletePropertyComponent,
    UpdatePropertyComponent,
    PropertyDetailsComponent,
    DescPipe,
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
    SpinnerModule,
    CloudinaryModule
  ],
  exports: [
    ListPropertiesComponent,
    AddPropertyComponent,

  ],
})
export class PropertiesModule { }
