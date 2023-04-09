import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/app/core/services/statistic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  properties: number = 0
  types: number = 0
  clients: number = 0
  categories: number = 0
  cards = [
    {
      title: 'properties',
      statistic: this.properties,
      icon: 'fa-solid fa-house-signal'
    },
    {
      title: 'clients',
      statistic: this.clients,
      icon: 'fa-solid fa-users'
    },
    {
      title: 'categories',
      statistic: this.categories,
      icon: 'fa-solid fa-layer-group'
    },
    {
      title: 'types',
      statistic: this.types,
      icon: 'fa-solid fa-bolt'
    }
  ]
  constructor(private statisticService: StatisticService) { }
  ngOnInit(): void {
    this.statistics()
  }
  statistics() {
    this.statisticService.getStatistic().subscribe(
      (res:any) => {
        this.categories=res.categories
        this.properties=res.properties
        this.clients=res.clients
        this.types=res.types
        this.cards[0].statistic = this.properties;
        this.cards[1].statistic = this.clients;
        this.cards[2].statistic = this.categories;
        this.cards[3].statistic = this.types;
      }
    )
  }
}
