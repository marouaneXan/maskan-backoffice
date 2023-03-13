import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from '../views/partials/sidebar/sidebar.component';
import { DashboardComponent } from '../views/dashboard/dashboard/dashboard.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
