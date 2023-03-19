import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PropertiesService } from '../../services/properties.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  status: boolean = false
  step: number = 0
  isLoading = false
  constructor(private toastr: ToastrService, private propertyService: PropertiesService, private loadinService: LoadingService) { }
  toggleModalAddProperty() {
    this.status = !this.status
  }
  newProperty = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    adress: new FormControl(null, [Validators.required]),
    bedrooms: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    stage: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    size: new FormControl(null, [Validators.required]),
    desc: new FormControl(null, [Validators.required]),
    category: new FormControl(null, Validators.required),
    // type: new FormControl(null, Validators.required),
    // characteristic: new FormControl(null, Validators.required),
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
    this.propertyService.addProperty(newProperty.value).subscribe(
      (res: any) => {
        this.loadinService.hide()
        this.toastr.success(res.data.message)
        this.newProperty.reset()
        this.status = false
      },
      err => {
        this.toastr.error(err.error.message)
      }
    )
  }
}
