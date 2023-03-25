import { Component, OnInit } from '@angular/core';
import { CurrentAdmin } from '../../interfaces/admin';
import { LoadingService } from 'src/app/core/services/loading.service';
import { AdminService } from '../../service/admin.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-admin-informations',
  templateUrl: './admin-informations.component.html',
  styleUrls: ['./admin-informations.component.css']
})
export class AdminInformationsComponent implements OnInit {
  admin_information: CurrentAdmin = {
    name: '',
    phone: '',
    adress: '',
    city: '',
    email: '',
    password: ''
  }
  isLoading: boolean = false
  isDisabled: boolean = true
  ModalUpdateAdminInformation: boolean = false
  constructor(private loadingService: LoadingService, private adminService: AdminService, private tokenService: TokenService) { }
  ngOnInit(): void {
    this.getAdminInfo()
  }
  toggleModalUpdateAdminInformation() {
    this.ModalUpdateAdminInformation = !this.ModalUpdateAdminInformation;
  }
  getAdminInfo() {
    this.isLoading = true
    this.loadingService.show()
    this.adminService.getAdminInformations(this.tokenService.getAdminIdFromPayload()).subscribe(
      (res: any) => {
        this.admin_information = res as CurrentAdmin
        this.isLoading = false
        this.loadingService.hide()
      },
      err => {
        this.isLoading = false
        this.loadingService.hide()
      }
    )
  }
}
