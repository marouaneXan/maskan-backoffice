import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Property } from 'src/app/features/properties/interface/property';

@Injectable({
  providedIn: 'root'
})
export class PropertiesSharedService {
  private properties: Property[] = []
  private propertiesSubject = new BehaviorSubject<Property[]>([]);
  properties$ = this.propertiesSubject.asObservable();
  addProperty(property: Property) {
    this.properties.push(property);
    this.propertiesSubject.next(this.properties);
  }
  getProperties() {
    return this.properties$;
  }

  constructor() { }
}
