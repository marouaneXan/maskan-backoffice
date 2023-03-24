import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PropertiesService } from '../../services/properties.service';
import { LoadingService } from 'src/app/core/services/loading.service'


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  @Output() propertyAdded = new EventEmitter()
  status: boolean = false
  step: number = 0
  isLoading = false
  images: File[] = [];
  constructor(private toastr: ToastrService, private propertyService: PropertiesService, private loadinService: LoadingService) {
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
    this.isLoading = true
    this.loadinService.show()
    //upload images to cloudinary
    this.propertyService.uploadImages(this.images).subscribe(
      (res: any) => {
        const imageUrls = res.map((image: any) => image.secure_url);
        const imageControls = this.newProperty.get('images') as FormArray;
        imageUrls.forEach((url:string) => {
          imageControls.push(new FormControl(url));
        });
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
    this.propertyService.addProperty(newProperty.value, newProperty.value.category, newProperty.value.type, newProperty.value.characteristic).subscribe(
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
    this.images = [...this.images, ...event.target.files];
  }
  cancelUpload(image: File) {
    const index = this.images.indexOf(image);
    if (index > -1) {
      this.images.splice(index, 1);
    }
  }
}
