import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/features/properties/interface/property';
import { CategoryService } from '../../services/category.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Router } from '@angular/router';

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
  ModalAddCategory: boolean = false
  categorySelected: any
  constructor(private categoryService: CategoryService, private loadingService: LoadingService,private router :Router) { }
  ngOnInit(): void {
    this.getAllCategories()
  }
  isCategoryPage(): boolean {
    return this.router.url === '/admin/dashboard/categories';
  }
  togglemodalDeleteCategory() {
    this.modalDeleteCategory = !this.modalDeleteCategory
  }
  toggleModalUpdateCategory() {
    this.ModalUpdateCategory = !this.ModalUpdateCategory
  }
  toggleModalAddCategory() {
    this.ModalAddCategory = !this.ModalAddCategory
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
