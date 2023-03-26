import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeService } from '../../services/type.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-type',
  templateUrl: './delete-type.component.html',
  styleUrls: ['./delete-type.component.css']
})
export class DeleteTypeComponent {
  @Input() modalDeleteType: boolean = false
  @Input() togglemodalDeleteType = (): void => { }
  @Input() typeSelected: any
  @Output() onDeleteType = new EventEmitter()

  constructor(private typeService: TypeService, private toastr: ToastrService) { }

  deleteType(type_id: string) {
    this.typeService.deleteType(type_id).subscribe(
      (res: any) => {
        this.modalDeleteType = false
        this.toastr.success(res.message)
        this.onDeleteType.emit()
      },
      err => {
        this.toastr.error(err.error.message)
      }
    )
  }
}
