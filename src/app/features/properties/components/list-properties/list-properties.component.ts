import { Component } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Property } from '../../interface/property';
import { PropertiesService } from '../../services/properties.service';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css']
})
export class ListPropertiesComponent {
  properties: Property[] = []
  isLoading = false
  constructor(private propertyService: PropertiesService, private loadingService: LoadingService) { }
  ngOnInit(): void {
    this.getAllProperties()
  }
  getAllProperties() {
    this.isLoading = true
    this.loadingService.show()
    this.propertyService.getProperties().subscribe(
      (res: any) => {
        this.properties = res.properties as Property[]
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
