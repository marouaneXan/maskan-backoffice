import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  @Input() ModalAddCategory: boolean = false
  @Input() toggleModalAddCategory = (): void => { }
  isLoading: boolean = false
  @Output() onAddCategory = new EventEmitter()
  constructor(private loadingService: LoadingService, private toastr: ToastrService, private categoryService: CategoryService) { }
  addedCategory = new FormGroup({
    category: new FormControl('', [Validators.required])
  })
  addCategory(addedCategory: FormGroup) {
    if (!addedCategory.value.category) this.toastr.error('Please add category name')
    else {
      this.isLoading = true
      this.loadingService.show()
      this.categoryService.addCategory(addedCategory.value).subscribe(
        (res: any) => {
          this.toastr.success(res.message)
          this.loadingService.hide()
          this.addedCategory.reset()
          this.ModalAddCategory = false
          this.onAddCategory.emit()
        },
        err => {
          this.toastr.error(err.error.message)
        }
      )
    }
  }
}
