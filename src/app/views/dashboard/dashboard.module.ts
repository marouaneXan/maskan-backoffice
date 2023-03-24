import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModule } from 'src/app/features/categories/category.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypeModule } from 'src/app/features/type/type.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CategoryModule,
    TypeModule
  ]
})
export class DashboardModule { }
