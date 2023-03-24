import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards=[
    {
      title:'properties',
      statistic:'1234',
      desc:'property description',
      icon:'icon'
    },
    {
      title:'users',
      statistic:'1234',
      desc:'user description',
      icon:'icon'
    },
    {
      title:'properties',
      statistic:'1234',
      desc:'property description',
      icon:'icon'
    },
    {
      title:'properties',
      statistic:'1234',
      desc:'property description',
      icon:'icon'
    }
  ]
}
