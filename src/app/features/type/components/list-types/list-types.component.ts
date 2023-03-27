import { Component } from '@angular/core';
import { Type } from 'src/app/features/properties/interface/property';
import { TypeService } from '../../services/type.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-types',
  templateUrl: './list-types.component.html',
  styleUrls: ['./list-types.component.css']
})
export class ListTypesComponent {
  types: Type[] = []
  isLoading = false
  modalDeleteType: boolean = false
  ModalAddType: boolean = false
  typeSelected: any
  constructor(private typeService: TypeService, private loadingService: LoadingService,private router:Router) { }
  ngOnInit(): void {
    this.getAllTypes()
  }
  togglemodalDeleteType() {
    this.modalDeleteType = !this.modalDeleteType
  }
  toggleModalAddType = (): void => {
    this.ModalAddType = !this.ModalAddType
  }
  isTypePage(){
    return this.router.url==="/admin/dashboard/types"
  }
  getAllTypes() {
    this.isLoading = true
    this.loadingService.show()
    this.typeService.getTypesProperties().subscribe(
      res => {
        this.types = res as Type[]
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
