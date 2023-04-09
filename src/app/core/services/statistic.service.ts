import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryService } from 'src/app/features/categories/services/category.service';
import { ClientService } from 'src/app/features/clients/service/client.service';
import { PropertiesService } from 'src/app/features/properties/services/properties.service';
import { TypeService } from 'src/app/features/type/services/type.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http:HttpClient, private typeService:TypeService,private propetyService:PropertiesService,private categoryService:CategoryService,private clientService:ClientService) { }
  getStatistic(){
    return this.http.get('http://localhost:5000/api/statistics')
  }
}
