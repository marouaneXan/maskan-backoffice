import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CurrentAdmin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  getAdminInformations(admin_id: string) {
    return this.http.get(`${environment.baseApi}/admin/auth/informations/${admin_id}`)
  }
  updateadminInformation(data: CurrentAdmin, admin_id: string) {
    return this.http.put(`${environment.baseApi}/admin/auth/informations/update/${admin_id}`, data)
  }
}
