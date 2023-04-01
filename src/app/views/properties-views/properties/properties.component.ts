import { Component } from '@angular/core';
import { Property } from 'src/app/features/properties/interface/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  propertiesData: { properties: Property[], totalItems: number, totalPages: number, empty: string, isLoading: boolean } = {
    properties: [],
    totalItems: 0,
    totalPages: 0,
    empty: '',
    isLoading: false
  }; getAllProperties = () => { };
  onGetAllProperties(event: any) {
    this.getAllProperties = event
  }
  onGetPropertiesData(event: { properties: Property[], totalItems: number, totalPages: number, empty: string, isLoading: boolean }) {
    this.propertiesData = event;
  }
}
