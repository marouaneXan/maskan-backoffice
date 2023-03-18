import { Component } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CharacteristicService } from 'src/app/features/characteristic/services/characteristic.service';
import { Characteristic } from 'src/app/features/properties/interface/property';

@Component({
  selector: 'app-characteristic-select',
  templateUrl: './characteristic-select.component.html',
  styleUrls: ['./characteristic-select.component.css']
})
export class CharacteristicSelectComponent {
  characteristics: Characteristic[] = []
  isLoading = false
  constructor(private characteristicService:CharacteristicService, private loadingService: LoadingService) { }
  ngOnInit(): void {
    this.getAllCategories()
  }
  getAllCategories() {
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
