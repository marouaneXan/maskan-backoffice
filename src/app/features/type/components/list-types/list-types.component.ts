import { Component } from '@angular/core';
import { Type } from 'src/app/features/properties/interface/property';
import { TypeService } from '../../services/type.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-list-types',
  templateUrl: './list-types.component.html',
  styleUrls: ['./list-types.component.css']
})
export class ListTypesComponent {
  types: Type[] = []
  isLoading = false
  constructor(private typeService: TypeService, private loadingService: LoadingService) { }
  ngOnInit(): void {
    this.getAllTypes()
  }
  getAllTypes() {
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
