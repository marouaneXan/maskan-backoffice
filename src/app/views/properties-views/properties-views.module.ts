import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesModule } from '../../features/properties/properties.module';
import { PropertiesViewsRoutingModule } from './properties-views-routing.module';

@NgModule({
  declarations: [PropertiesComponent],
  imports: [CommonModule, PropertiesModule, PropertiesViewsRoutingModule]
})
export class PropertiesViewsModule { }
