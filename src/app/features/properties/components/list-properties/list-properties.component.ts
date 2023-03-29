import { Component, Output, EventEmitter } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Property } from '../../interface/property';
import { PropertiesService } from '../../services/properties.service';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css']
})
export class ListPropertiesComponent {
  @Output() propertiesEvent = new EventEmitter()
  properties: Property[] = []
  isLoading = false
  modalPropertyVisibility: boolean = false
  modalDeleteProperty: boolean = false
  modalUpdateProperty: boolean = false
  modalPropertyDetails: boolean = false
  propertySelected: any
  empty: string = ''
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;

  constructor(private propertyService: PropertiesService, private loadingService: LoadingService) { }
  ngOnInit(): void {
    this.getAllProperties()
  }
  togglemodalPropertyVisibility(): void {
    this.modalPropertyVisibility = !this.modalPropertyVisibility
  }
  togglemodalDeleteProperty(): void {
    this.modalDeleteProperty = !this.modalDeleteProperty
  }
  togglemodalUpdateProperty(): void {
    this.modalUpdateProperty = !this.modalUpdateProperty
  }
  togglemodalPropertyDetails(): void {
    this.modalPropertyDetails = !this.modalPropertyDetails
  }
  getAllProperties(page: number = 1, limit: number = 5) {
    this.isLoading = true
    this.loadingService.show()
    this.propertyService.getProperties(page,limit).subscribe(
      (res: any) => {
        this.properties = res.properties as Property[]
        this.isLoading = false
        this.loadingService.hide()
        this.propertiesEvent.emit(this.getAllProperties.bind(this))
      },
      err => {
        this.isLoading = false
        this.loadingService.hide()
        this.empty = err.error.message;

      }
    )
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.getAllProperties(page);
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
