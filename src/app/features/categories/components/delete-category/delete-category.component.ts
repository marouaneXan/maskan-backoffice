import { Component,Input,EventEmitter,Output } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent {
  @Input() modalDeleteCategory:boolean=false
  @Input() togglemodalDeleteCategory=():void=>{}
  @Input() categorySelected:any
  @Output() onDeleteCategory=new EventEmitter()

  constructor(private categoryService:CategoryService,private toastr:ToastrService){}

  deleteCategory(category_id:string){
    this.categoryService.deleteCategory(category_id).subscribe(
      (res:any)=>{
        this.modalDeleteCategory=false
        this.toastr.success(res.message)
        this.onDeleteCategory.emit()
      },
      err=>{
        this.toastr.error(err.error.message)
      }
    )
  }
}
