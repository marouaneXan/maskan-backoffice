import { Injectable } from '@angular/core';
import { Property } from '../interface/property';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http: HttpClient) { }
  addProperty(property: Property, category_id: string, type_id: string, characteristic_id: string): Observable<string> {
    return this.http.post<string>(`${environment.baseApi}/properties/${category_id}/${type_id}/${characteristic_id}`, property)
  }
  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(`${environment.baseApi}/properties`)
  }
  changePropertyVisibility(property_id: string): Observable<string> {
    return this.http.patch<string>(`${environment.baseApi}/properties/${property_id}`, {}).pipe(
      catchError((error: any) => {
        return throwError('An error occurred while trying to update the property status');
      })
    );
  }
}
