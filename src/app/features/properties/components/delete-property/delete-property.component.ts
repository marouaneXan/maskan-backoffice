import { Component,Input,Output,EventEmitter } from '@angular/core';
import { PropertiesService } from '../../services/properties.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-property',
  templateUrl: './delete-property.component.html',
  styleUrls: ['./delete-property.component.css']
})
export class DeletePropertyComponent {
  @Input() modalDeleteProperty:boolean=false
  @Input() togglemodalDeleteProperty=():void=>{}
  @Input() propertySelected:any
  @Output() onDeleteProperty=new EventEmitter()

  constructor(private propetyService:PropertiesService,private toastr:ToastrService){}

  deleteProperty(property_id:string){
    this.propetyService.deleteProperty(property_id).subscribe(
      (res:any)=>{
        this.modalDeleteProperty=false
        this.toastr.success(res.message)
        this.onDeleteProperty.emit()
      },
      err=>{
        this.toastr.error(err.error.message)
      }
    )
  }

}
