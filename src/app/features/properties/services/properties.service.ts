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
  uploadImages(files: File[]) {
    const form = new FormData();
    for (let i = 0; i < files.length; i++) {
      form.append('file', files[i]);
    }
    form.append('upload_preset', 'dq80asfsi');
    return this.http.post('https://api.cloudinary.com/v1_1/dq80asfsi', form)
  }
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
