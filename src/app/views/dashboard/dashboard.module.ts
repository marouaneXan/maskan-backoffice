import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModule } from 'src/app/features/categories/category.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CategoryModule
  ]
})
export class DashboardModule { }
