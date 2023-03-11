import { Component,Input } from '@angular/core';
import { Spinner } from '../interface/spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  @Input() props:Spinner={
    height:'',
    width:''
  }

}
