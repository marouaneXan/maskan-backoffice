import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnChanges {
  @Input() ModalUpdateCategory: boolean = false
  @Input() toggleModalUpdateCategory = (): void => { }
  @Input() categorySelected: any
  isLoading:boolean=false
  @Output() onUpdatedCategory=new EventEmitter()
  constructor(private loadingService:LoadingService,private toastr:ToastrService,private categoryService:CategoryService){}
  updatedCatgory = new FormGroup({
    category: new FormControl('', [Validators.required])
  })
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categorySelected']) {
      this.categorySelected = changes['categorySelected'].currentValue;
      if (this.categorySelected) {
        this.updatedCatgory.setValue({
          category: this.categorySelected.category || '',
        });
      }
    }
  }
  updateCategory(updatedCatgory: FormGroup,categgory_id:string) {
    this.isLoading = true
    this.loadingService.show()
    this.categoryService.updateCategory(updatedCatgory.value,categgory_id).subscribe(
      (res: any) => {
        this.toastr.success(res.message)
        this.loadingService.hide()
        this.updatedCatgory.reset()
        this.ModalUpdateCategory = false
        this.onUpdatedCategory.emit()
      },
      err => {
        this.toastr.error(err.error.message)
      }
    )
  }
}
