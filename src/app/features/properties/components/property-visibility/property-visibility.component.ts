import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-visibility',
  templateUrl: './property-visibility.component.html',
  styleUrls: ['./property-visibility.component.css']
})
export class PropertyVisibilityComponent {
  @Input() modalPropertyVisibility:boolean=false
  @Input() togglemodalPropertyVisibility=():void=>{}
}
