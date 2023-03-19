import { Injectable } from '@angular/core';
import { Property } from '../interface/property';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http:HttpClient) { }
  addProperty(property:Property,category_id:string,type_id:string,characteristic_id:string):Observable<string>{
    return this.http.post<string>(`${environment.baseApi}/properties/${category_id}/${type_id}/${characteristic_id}`,property)
  }
}
