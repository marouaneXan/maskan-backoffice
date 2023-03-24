import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { SpinnerModule } from '../spinner/spinner.module';



@NgModule({
  declarations: [
    ListCategoriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SpinnerModule
  ],
  exports:[
    ListCategoriesComponent
  ]
})
export class CategoryModule { }
