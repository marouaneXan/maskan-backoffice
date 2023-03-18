import { Component,OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CategoryService } from 'src/app/features/categories/services/category.service';
import { Category } from 'src/app/features/properties/interface/property';

@Component({
  selector: 'app-categories-select',
  templateUrl: './categories-select.component.html',
  styleUrls: ['./categories-select.component.css']
})
export class CategoriesSelectComponent implements OnInit {
  categories: Category[] = []
  isLoading = false
  constructor(private categoryService: CategoryService, private loadingService: LoadingService) { }
  ngOnInit(): void {
    this.getAllCategories()
  }
  getAllCategories() {
    this.isLoading = true
    this.loadingService.show()
    this.categoryService.getCategories().subscribe(
      res => {
        this.categories=res as Category[]
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
