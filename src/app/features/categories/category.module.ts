import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { CategoryRouting } from './category-routing.module';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListCategoriesComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SpinnerModule,
    CategoryRouting,
    ReactiveFormsModule
  ],
  exports:[
    ListCategoriesComponent
  ]
})
export class CategoryModule { }
