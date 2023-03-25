import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CharacteristicService } from '../../services/characteristic.service';
@Component({
  selector: 'app-add-characteristic',
  templateUrl: './add-characteristic.component.html',
  styleUrls: ['./add-characteristic.component.css']
})
export class AddCharacteristicComponent {
  @Input() ModalAddCharacteristic: boolean = false
  @Input() toggleModalAddCharacteristic = (): void => { }
  isLoading: boolean = false
  @Output() onAddCharacteristic = new EventEmitter()
  constructor(private loadingService: LoadingService, private toastr: ToastrService, private characteristicService: CharacteristicService) { }
  addedCharacteristic = new FormGroup({
    name: new FormControl('', [Validators.required])
  })
  addCharacteristic(addedCharacteristic: FormGroup) {
    if (!addedCharacteristic.value.name) {
      this.toastr.error('Please add characteristic name')
      this.isLoading = false
    }
    else {
      this.isLoading = true
      this.loadingService.show()
      this.characteristicService.addCharacteristic(addedCharacteristic.value).subscribe(
        (res: any) => {
          this.isLoading = false
          this.toastr.success(res.message)
          this.loadingService.hide()
          this.addedCharacteristic.reset()
          this.ModalAddCharacteristic = false
          this.onAddCharacteristic.emit()
        },
        err => {
          this.toastr.error(err.error.message)
        }
      )
    }
  }
}
