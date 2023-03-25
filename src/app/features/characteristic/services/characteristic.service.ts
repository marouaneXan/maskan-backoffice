import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { Characteristic } from '../../properties/interface/property';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicService {

  constructor(private http: HttpClient) { }
  getAllCharacteristics(): Observable<any> {
    return this.http.get(`${environment.baseApi}/characteristics`)
  }
  deleteCharacteristic(characteristic_id: string) {
    return this.http.delete(`${environment.baseApi}/characteristics/${characteristic_id}`)
  }
  updateCharacteristic(characteristic: Characteristic, characteristic_id: string) {
    return this.http.put(`${environment.baseApi}/characteristics/${characteristic_id}`, characteristic)
  }
  addCharacteristic(characteristic: Characteristic) {
    return this.http.post(`${environment.baseApi}/characteristics`, characteristic)
  }
}
