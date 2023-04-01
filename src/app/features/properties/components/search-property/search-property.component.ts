import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/core/services/loading.service';
import { PropertiesService } from '../../services/properties.service';
import { Property } from '../../interface/property';

@Component({
  selector: 'app-search-property',
  templateUrl: './search-property.component.html',
  styleUrls: ['./search-property.component.css']
})
export class SearchPropertyComponent {
  @Input() properties: Property[] | null = []
  @Input() totalItems: any
  @Input() totalPages: any
  @Input() empty: string = ''
  @Input() isLoading: boolean = false
  @Input() set propertiesData(data: { properties: Property[], totalItems: number, totalPages: number, empty: string, isLoading: boolean }) {
    if (data) {
      this.properties = data.properties;
      this.totalItems = data.totalItems;
      this.totalPages = data.totalPages;
      this.empty = data.empty;
      this.isLoading = data.isLoading;
    }
  }
  constructor(private loadingService: LoadingService, private propertyService: PropertiesService) { }
  searchForm = new FormGroup({
    city: new FormControl('', [Validators.required]),
    stage: new FormControl(''),
    price: new FormControl(''),
  })
  searchProperties( searchForm: FormGroup) {
    this.isLoading = true;
    this.loadingService.show();
    this.propertyService.getProperties(1,5, searchForm.value.city, searchForm.value.stage, searchForm.value.price).subscribe(
      (res: any) => {
        this.properties = res.properties as Property[];
        this.isLoading = false;
        this.loadingService.hide();
        this.totalItems = res.totalItems;
        this.totalPages = res.totalPages;
        this.empty = this.totalItems === 0 ? 'There is no properties' : '';
      },
      (err) => {
        this.isLoading = false;
        this.loadingService.hide();
        this.empty = err.error.message;
      }
    );
  }
}
