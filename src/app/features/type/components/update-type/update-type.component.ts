import { Component,Input,Output,EventEmitter,SimpleChanges,OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'src/app/core/services/loading.service';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnChanges {
  @Input() ModalUpdateType: boolean = false
  @Input() toggleModalUpdateType = (): void => { }
  @Input() typeSelected: any
  isLoading: boolean = false
  @Output() onUpdateType = new EventEmitter()
  constructor(private loadingService: LoadingService, private toastr: ToastrService, private typeService: TypeService) { }
  updatedType = new FormGroup({
    type: new FormControl('', [Validators.required])
  })
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['typeSelected']);
    if (changes['typeSelected']) {
      this.typeSelected = changes['typeSelected'].currentValue;
      if (this.typeSelected) {
        this.updatedType.setValue({
          type: this.typeSelected.type || '',
        });
      }
    }
  }
  updateType(updatedType: FormGroup, type_id: string) {
    this.isLoading = true
    this.loadingService.show()
    this.typeService.updateType(updatedType.value, type_id).subscribe(
      (res: any) => {
        this.toastr.success(res.message)
        this.loadingService.hide()
        this.updatedType.reset()
        this.ModalUpdateType = false
        this.onUpdateType.emit()
      },
      err => {
        this.toastr.error(err.error.message)
      }
    )
  }
}
