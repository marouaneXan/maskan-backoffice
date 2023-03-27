import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'src/app/core/services/loading.service';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent {
  @Input() ModalAddType: boolean = false
  @Input() toggleModalAddType = (): void => { }
  isLoading: boolean = false
  @Output() onAddType = new EventEmitter()
  constructor(private loadingService: LoadingService, private toastr: ToastrService, private typeService: TypeService) { }
  addedType = new FormGroup({
    type: new FormControl('', [Validators.required])
  })
  addType(addedType: FormGroup) {
    if (!addedType.value.type) this.toastr.error('Please add type name')
    else {
      this.isLoading = true
      this.loadingService.show()
      this.typeService.addType(addedType.value).subscribe(
        (res: any) => {
          this.toastr.success(res.message)
          this.loadingService.hide()
          this.addedType.reset()
          this.ModalAddType = false
          this.onAddType.emit()
        },
        err => {
          this.toastr.error(err.error.message)
        }
      )
    }
  }
}
