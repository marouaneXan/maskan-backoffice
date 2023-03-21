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

  constructor(private propertyService: PropertiesService, private loadingService: LoadingService) { }
  ngOnInit(): void {
    this.getAllProperties()
  }
  togglemodalPropertyVisibility():void {
    this.modalPropertyVisibility = !this.modalPropertyVisibility
  }
  getAllProperties() {
    this.isLoading = true
    this.loadingService.show()
    this.propertyService.getProperties().subscribe(
      (res: any) => {
        this.properties = res.properties as Property[]
        this.isLoading = false
        this.loadingService.hide()
        this.propertiesEvent.emit(this.getAllProperties.bind(this))
      },
      err => {
        this.isLoading = false
        this.loadingService.hide()
      }
    )
  }
}
