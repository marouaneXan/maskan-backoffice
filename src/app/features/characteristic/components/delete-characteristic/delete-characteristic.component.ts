import { Component,Input,EventEmitter,Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CharacteristicService } from '../../services/characteristic.service';

@Component({
  selector: 'app-delete-characteristic',
  templateUrl: './delete-characteristic.component.html',
  styleUrls: ['./delete-characteristic.component.css']
})
export class DeleteCharacteristicComponent {
  @Input() modalDeleteCharacteristic:boolean=false
  @Input() togglemodalDeleteCharacteristic=():void=>{}
  @Input() characteristicSelected:any
  @Output() onDeleteCharacteristic=new EventEmitter()

  constructor(private characteristicService:CharacteristicService,private toastr:ToastrService){}

  deleteCharacteristic(characteristic_id:string){
    this.characteristicService.deleteCharacteristic(characteristic_id).subscribe(
      (res:any)=>{
        this.modalDeleteCharacteristic=false
        this.toastr.success(res.message)
        this.onDeleteCharacteristic.emit()
      },
      err=>{
        this.toastr.error(err.error.message)
      }
    )
  }
}
