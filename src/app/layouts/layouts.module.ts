import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from '../views/partials/sidebar/sidebar.component';
import { DashboardComponent } from '../views/dashboard/dashboard/dashboard.component';
import { NavbarComponent } from '../views/partials/navbar/navbar.component';
import { HeaderComponent } from '../views/partials/header/header.component';
import { PropertiesViewsModule } from '../views/properties-views/properties-views.module';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    PropertiesViewsModule
  ],
  
})
export class LayoutsModule { }
