import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';



@NgModule({
  declarations: [
    ListCategoriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ListCategoriesComponent
  ]
})
export class CategoryModule { }
