import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../properties/interface/property';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategories(): Observable<any> {
    return this.http.get(`${environment.baseApi}/categories`)
  }
  deleteCategory(category_id: string) {
    return this.http.delete(`${environment.baseApi}/categories/${category_id}`)
  }
  updateCategory(category: Category, category_id: string) {
    return this.http.put(`${environment.baseApi}/categories/${category_id}`, category)
  }
  addCategory(category: Category) {
    return this.http.post(`${environment.baseApi}/categories`, category)
  }
}
