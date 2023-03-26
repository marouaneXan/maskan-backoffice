import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'
import { Type } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }
  getTypesProperties(): Observable<any> {
    return this.http.get(`${environment.baseApi}/types`)
  }
  deleteType(type_id: string) {
    return this.http.delete(`${environment.baseApi}/types/${type_id}`)
  }
  updateType(type: Type, type_id: string) {
    return this.http.put(`${environment.baseApi}/types/${type_id}`, type)
  }
  addType(type: Type) {
    return this.http.post(`${environment.baseApi}/types`, type)
  }
}
