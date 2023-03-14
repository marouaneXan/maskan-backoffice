import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesModule } from '../../features/properties/properties.module';

@NgModule({
  declarations: [PropertiesComponent],
  imports: [CommonModule, PropertiesModule]
})
export class PropertiesViewsModule { }
