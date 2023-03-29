import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent {
  @Input() modalPropertyDetails: boolean = false
  @Input() togglemodalPropertyDetails = (): void => { }
  @Input() propertySelected: any
  currentIndex = 0
  prevSlide = () => {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.propertySelected.images.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  };

  nextSlide = () => {
    const isLastSlide = this.currentIndex === this.propertySelected.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  };
  goToSlide = (slideIndex: number) => {
    this.currentIndex = slideIndex;;
  };
}
