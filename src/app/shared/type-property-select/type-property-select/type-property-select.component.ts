import { Component,OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CategoryService } from 'src/app/features/categories/services/category.service';
import { Type } from 'src/app/features/properties/interface/property';
import { TypeService } from 'src/app/features/type/services/type.service';

@Component({
  selector: 'app-type-property-select',
  templateUrl: './type-property-select.component.html',
  styleUrls: ['./type-property-select.component.css']
})
export class TypePropertySelectComponent implements OnInit {
  types: Type[] = []
  isLoading = false
  constructor(private typeService: TypeService, private loadingService: LoadingService) { }
  ngOnInit(): void {
    this.getAllCategories()
  }
  getAllCategories() {
    this.isLoading = true
    this.loadingService.show()
    this.typeService.getTypesProperties().subscribe(
      res => {
        this.types=res as Type[]
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
