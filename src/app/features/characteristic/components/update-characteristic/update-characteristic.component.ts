import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CharacteristicService } from '../../services/characteristic.service';
@Component({
  selector: 'app-update-characteristic',
  templateUrl: './update-characteristic.component.html',
  styleUrls: ['./update-characteristic.component.css']
})
export class UpdateCharacteristicComponent implements OnChanges {
  @Input() modalUpdateCharacteristic: boolean = false
  @Input() characteristicSelected: any
  @Input() togglemodalUpdateCharacteristic = (): void => { }
  isLoading: boolean = false
  @Output() onUpdateCharacteristic = new EventEmitter()
  constructor(private loadingService: LoadingService, private toastr: ToastrService, private characteristicService: CharacteristicService) { }
  updatedCharacteristic = new FormGroup({
    name: new FormControl('', [Validators.required])
  })
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['characteristicSelected']) {
      this.characteristicSelected = changes['characteristicSelected'].currentValue;
      if (this.characteristicSelected) {
        this.updatedCharacteristic.setValue({
          name: this.characteristicSelected.name || '',
        });
      }
    }
  }
  updateCharacteristic(updatedCharacteristic: FormGroup, characteristic_id: string) {
    if (!updatedCharacteristic.value.name) {
      this.toastr.error('Please add characteristic name')
      this.isLoading = false
    }
    else {
      this.isLoading = true
      this.loadingService.show()
      this.characteristicService.updateCharacteristic(updatedCharacteristic.value, characteristic_id).subscribe(
        (res: any) => {
          this.isLoading = false
          this.toastr.success(res.message)
          this.loadingService.hide()
          this.updatedCharacteristic.reset()
          this.modalUpdateCharacteristic = false
          this.onUpdateCharacteristic.emit()
        },
        err => {
          this.toastr.error(err.error.message)
        }
      )
    }
  }
}
