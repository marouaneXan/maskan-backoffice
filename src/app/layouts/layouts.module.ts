import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { PropertiesViewsModule } from '../views/properties-views/properties-views.module';
import { PartialsModule } from '../views/partials/partials.module';
import { DashboardModule } from '../views/dashboard/dashboard.module';


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    PropertiesViewsModule,
    PartialsModule,
    DashboardModule
  ],
  
})
export class LayoutsModule { }
