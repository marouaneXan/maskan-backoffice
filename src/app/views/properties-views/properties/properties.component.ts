import { Component } from '@angular/core';

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
