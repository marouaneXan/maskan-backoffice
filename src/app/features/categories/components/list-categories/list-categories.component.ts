import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/features/properties/interface/property';
import { CategoryService } from '../../services/category.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  categories: Category[] = []
  isLoading = false
  modalDeleteCategory: boolean = false
  ModalUpdateCategory: boolean = false
  categorySelected: any
  constructor(private categoryService: CategoryService, private loadingService: LoadingService) { }
  ngOnInit(): void {
    this.getAllCategories()
  }
  togglemodalDeleteCategory() {
    this.modalDeleteCategory = !this.modalDeleteCategory
  }
  toggleModalUpdateCategory() {
    this.ModalUpdateCategory = !this.ModalUpdateCategory
  }
  getAllCategories() {
    this.isLoading = true
    this.loadingService.show()
    this.categoryService.getCategories().subscribe(
      res => {
        this.categories = res as Category[]
        this.isLoading = false
        this.loadingService.hide()
      },
      err => {
        this.isLoading = false
        this.loadingService.hide()
      }
    )
  }
}
