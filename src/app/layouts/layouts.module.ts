import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from '../views/dashboard/dashboard/dashboard.component';
import { PropertiesViewsModule } from '../views/properties-views/properties-views.module';
import { PartialsModule } from '../views/partials/partials.module';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    PropertiesViewsModule,
    PartialsModule
  ],
  
})
export class LayoutsModule { }
