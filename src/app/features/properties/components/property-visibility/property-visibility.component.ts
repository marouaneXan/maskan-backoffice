import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertiesService } from '../../services/properties.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-property-visibility',
  templateUrl: './property-visibility.component.html',
  styleUrls: ['./property-visibility.component.css']
})
export class PropertyVisibilityComponent {
  @Input() modalPropertyVisibility:boolean=false
  @Input() togglemodalPropertyVisibility=():void=>{}
  @Input() propertySelected:any
  @Output() onChangedVisibility=new EventEmitter()

  constructor(private propetyService:PropertiesService,private toastr:ToastrService){}

  chnagedVisibility(property_id:string){
    this.propetyService.changePropertyVisibility(property_id).subscribe(
      (res:any)=>{
        this.modalPropertyVisibility=false
        this.toastr.success(res.message)
        this.onChangedVisibility.emit()
      },
      err=>{
        this.toastr.error(err.error.message)
      }
    )
  }
}
