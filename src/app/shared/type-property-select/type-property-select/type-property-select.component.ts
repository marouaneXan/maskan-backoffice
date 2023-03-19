import { Component,OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Type } from 'src/app/features/properties/interface/property';
import { TypeService } from 'src/app/features/type/services/type.service';

@Component({
  selector: 'app-type-property-select',
  templateUrl: './type-property-select.component.html',
  styleUrls: ['./type-property-select.component.css']
})
export class TypePropertySelectComponent implements OnInit {
  @Input() newProperty: FormGroup = new FormGroup({});
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
