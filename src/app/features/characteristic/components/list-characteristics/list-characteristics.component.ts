import { Component } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CharacteristicService } from '../../services/characteristic.service';
import { Characteristic } from 'src/app/features/properties/interface/property';

@Component({
  selector: 'app-list-characteristics',
  templateUrl: './list-characteristics.component.html',
  styleUrls: ['./list-characteristics.component.css']
})
export class ListCharacteristicsComponent {
  characteristics: Characteristic[] = []
  isLoading = false
  constructor(private characteristicService: CharacteristicService, private loadingService: LoadingService) { }
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
