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
  addProperty(property:Property):Observable<string>{
    return this.http.post<string>(`${environment.baseApi}/properties`,property)
  }
}
