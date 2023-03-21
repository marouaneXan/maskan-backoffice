import { OnChanges, Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PropertiesService } from '../../services/properties.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnChanges {
  @Input() modalUpdateProperty: boolean = false
  @Input() togglemodalUpdateProperty = (): void => { }
  @Input() propertySelected: any
  @Output() onUpdatedProperty=new EventEmitter()
  step: number = 0
  isLoading = false
  constructor(private toastr: ToastrService, private propertyService: PropertiesService, private loadinService: LoadingService) { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['propertySelected']);
    if (changes['propertySelected']) {
      this.propertySelected = changes['propertySelected'].currentValue;
      if (this.propertySelected) {
        this.updatedProperty.setValue({
          title: this.propertySelected.title || '',
          adress: this.propertySelected.adress || '',
          bedrooms: this.propertySelected.bedrooms || '',
          city: this.propertySelected.city || '',
          stage: this.propertySelected.stage || '',
          price: this.propertySelected.price || '',
          size: this.propertySelected.size || '',
          desc: this.propertySelected.desc || '',
          category: this.propertySelected.category || '',
          type: this.propertySelected.type || '',
          characteristic: this.propertySelected.characteristic || '',
        });
      }
    }
  }
  updatedProperty = new FormGroup({
    title: new FormControl('', [Validators.required]),
    adress: new FormControl('', [Validators.required]),
    bedrooms: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    stage: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    category: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    characteristic: new FormControl('', Validators.required),
  })
  next() {
    if (
      !this.updatedProperty.value.title ||
      !this.updatedProperty.value.adress ||
      !this.updatedProperty.value.bedrooms ||
      !this.updatedProperty.value.city ||
      !this.updatedProperty.value.stage ||
      !this.updatedProperty.value.price ||
      !this.updatedProperty.value.size ||
      !this.updatedProperty.value.desc
    ) this.toastr.error('Please add all fields')
    else this.step++

  }
  previous() {
    this.step--
  }
  updateProperty(updatedProperty: FormGroup, property_id: string) {
    this.isLoading = true
    this.loadinService.show()
    this.propertyService.updateProperty(updatedProperty.value, property_id).subscribe(
      (res: any) => {
        this.onUpdatedProperty.emit()
        this.toastr.success(res.message)
        this.loadinService.hide()
        this.updatedProperty.reset()
        this.modalUpdateProperty = false
      },
      err => {
        this.toastr.error(err.error.message)
      }
    )
  }

}
