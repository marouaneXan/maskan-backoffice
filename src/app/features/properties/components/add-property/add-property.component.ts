import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  status: boolean = false
  step: number = 0
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
    ) {
      alert('Please add all fields')
      this.step=0
    }
    else this.step++
  }
  previous() {
    this.step--
  }
  addNewProperty(){
    console.log(this.newProperty.value);
  }
}
