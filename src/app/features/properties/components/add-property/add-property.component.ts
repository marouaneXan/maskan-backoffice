import { Component, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PropertiesService } from '../../services/properties.service';
import { LoadingService } from 'src/app/core/services/loading.service'
import { Property } from '../../interface/property';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPropertyComponent {
  @Output() propertyAdded = new EventEmitter()
  propertiesData: { properties: Property[], totalItems: number, totalPages: number, empty: string, isLoading: boolean } = {
    properties: [],
    totalItems: 0,
    totalPages: 0,
    empty: '',
    isLoading: false
  };
  status: boolean = false
  step: number = 0
  isLoading = false
  images: File[] = [];
  previewUrls: string[] = [];
  constructor(private toastr: ToastrService,private cdr: ChangeDetectorRef, private propertyService: PropertiesService, private loadinService: LoadingService) {
  }
  toggleModalAddProperty() {
    this.status = !this.status
  }
  newProperty = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    adress: new FormControl(null, [Validators.required]),
    bedrooms: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    stage: new FormControl(null, [Validators.required]),
    images: new FormArray([]),
    price: new FormControl(null, [Validators.required]),
    size: new FormControl(null, [Validators.required]),
    desc: new FormControl(null, [Validators.required]),
    category: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
    characteristic: new FormControl(null, Validators.required),
  })
  next() {
    if (
      !this.newProperty.value.title ||
      !this.newProperty.value.adress ||
      !this.newProperty.value.bedrooms ||
      !this.newProperty.value.city ||
      !this.newProperty.value.stage ||
      !this.newProperty.value.price ||
      !this.newProperty.value.size ||
      !this.newProperty.value.desc
    ) this.toastr.error('Please add all fields')
    else this.step++

  }
  previous() {
    this.step--
  }
  addNewProperty(newProperty: FormGroup) {
    const formData = new FormData();
    for (const key in newProperty.value) {
      if (key !== 'images') {
        formData.append(key, newProperty.value[key]);
      }
    }
    this.images.forEach((image, index) => {
      formData.append(`images`, image);
    });
    console.log(this.newProperty.value);
    this.isLoading = true
    this.loadinService.show()
    this.propertyService.addProperty(formData, newProperty.value.category, newProperty.value.type, newProperty.value.characteristic).subscribe(
      (res: any) => {
        this.toastr.success(res.message)
        this.loadinService.hide()
        this.newProperty.reset()
        this.status = false
        this.propertyAdded.emit()
      },
      err => {
        this.toastr.error(err.error.message)
      }
    )
  }
  onFileSelected(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      this.images.push(file);
      this.previewImages(file)
    }
  }
  previewImages(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.previewUrls.push(event.target.result);
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  cancelUpload(image: File) {
    const index = this.images.indexOf(image);
    if (index > -1) {
      this.images.splice(index, 1);
    }
  }
}
