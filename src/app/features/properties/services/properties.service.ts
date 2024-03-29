import { Injectable } from '@angular/core';
import { Property } from '../interface/property';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http: HttpClient) { }
  addProperty(property: FormData, category_id: string, type_id: string, characteristic_id: string): Observable<string> {
    return this.http.post<string>(`${environment.baseApi}/properties/${category_id}/${type_id}/${characteristic_id}`, property)
  }
  getProperties(page: number, limit: number, city?: string, stage?: number, price?: number): Observable<Property[]> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    if (city) {
      params = params.set('city', city);
    }

    if (stage) {
      params = params.set('stage', stage.toString());
    }

    if (price) {
      params = params.set('price', price.toString());
    }
    return this.http.get<Property[]>(`${environment.baseApi}/properties`, { params })
  }
  changePropertyVisibility(property_id: string): Observable<string> {
    return this.http.patch<string>(`${environment.baseApi}/properties/${property_id}`, {}).pipe(
      catchError((error: any) => {
        return throwError('An error occurred while trying to update the property status');
      })
    );
  }
  deleteProperty(property_id: string): Observable<string> {
    return this.http.delete<string>(`${environment.baseApi}/properties/${property_id}`).pipe(
      catchError((error: any) => {
        return throwError('An error occurred while trying to delete property');
      })
    );
  }
  updateProperty(data: Property, property_id: string): Observable<string> {
    return this.http.put<string>(`${environment.baseApi}/properties/${property_id}`, data).pipe(
      catchError((error: any) => {
        return throwError('An error occurred while trying to delete property');
      })
    );
  }
}
