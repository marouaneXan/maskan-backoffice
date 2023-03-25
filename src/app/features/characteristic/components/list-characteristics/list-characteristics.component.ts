import { Component } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CharacteristicService } from '../../services/characteristic.service';
import { Characteristic } from 'src/app/features/properties/interface/property';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-characteristics',
  templateUrl: './list-characteristics.component.html',
  styleUrls: ['./list-characteristics.component.css']
})
export class ListCharacteristicsComponent {
  characteristics: Characteristic[] = []
  isLoading = false
  ModalAddCharacteristic: boolean = false
  modalDeleteCharacteristic: boolean = false
  characteristicSelected: any
  constructor(private characteristicService: CharacteristicService, private loadingService: LoadingService, private router: Router) { }
  ngOnInit(): void {
    this.getAllCharacteristics()
  }
  isCharacteristicPage(): boolean {
    return this.router.url === '/admin/dashboard/characteristics'
  }
  toggleModalAddCharacteristic() {
    this.ModalAddCharacteristic = !this.ModalAddCharacteristic
  }
  togglemodalDeleteCharacteristic() {
    this.modalDeleteCharacteristic = !this.modalDeleteCharacteristic
  }
  getAllCharacteristics() {
    this.isLoading = true
    this.loadingService.show()
    this.characteristicService.getAllCharacteristics().subscribe(
      res => {
        this.characteristics = res as Characteristic[]
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
