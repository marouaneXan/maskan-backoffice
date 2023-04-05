import { Component } from '@angular/core';
import { Property } from 'src/app/features/properties/interface/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  getAllProperties = () => { };
  onGetAllProperties(event: any) {
    this.getAllProperties = event
  }
}
