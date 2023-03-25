import { Component, Input, Output, OnChanges, SimpleChanges,EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CurrentAdmin } from '../../interfaces/admin';
import { LoadingService } from 'src/app/core/services/loading.service';
import { TokenService } from 'src/app/core/services/token.service';
import { AdminService } from '../../service/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-admin-informations',
  templateUrl: './update-admin-informations.component.html',
  styleUrls: ['./update-admin-informations.component.css']
})
export class UpdateAdminInformationsComponent implements OnChanges {
  @Input() ModalUpdateAdminInformation: boolean = false
  @Input() toggleModalUpdateAdminInformation = (): void => { }
  @Input() admin_information: CurrentAdmin = {
    name: '',
    phone: '',
    adress: '',
    city: '',
    email: '',
    password: ''
  }
  isLoading:boolean=false
  @Output() onUpdatedAdminInformation=new EventEmitter()
  constructor(private loadingService:LoadingService,private tokenService:TokenService,private adminService:AdminService,private toastr:ToastrService){}
  updatedAdminInformation = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    adress: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['admin_information']);
    if (changes['admin_information']) {
      this.admin_information = changes['admin_information'].currentValue;
      if (this.admin_information) {
        this.updatedAdminInformation.setValue({
          name: this.admin_information.name || '',
          phone: this.admin_information.phone || '',
          adress: this.admin_information.adress || '',
          city: this.admin_information.city || '',
          email: this.admin_information.email || '',
        });
      }
    }
  }
  updateAdminInformation(updatedAdminInformation: FormGroup) {
    this.isLoading = true
    this.loadingService.show()
    this.adminService.updateadminInformation(updatedAdminInformation.value, this.tokenService.getAdminIdFromPayload()).subscribe(
      (res: any) => {
        this.toastr.success(res.message)
        this.loadingService.hide()
        this.updatedAdminInformation.reset()
        this.ModalUpdateAdminInformation = false
        this.onUpdatedAdminInformation.emit()
      },
      err => {
        this.toastr.error(err.error.message)
      }
    )
  }
}
