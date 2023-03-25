import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { CategoryRouting } from './category-routing.module';



@NgModule({
  declarations: [
    ListCategoriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SpinnerModule,
    CategoryRouting
  ],
  exports:[
    ListCategoriesComponent
  ]
})
export class CategoryModule { }
