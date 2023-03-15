import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentRoute: string | null= sessionStorage.getItem('currentRoute');
  constructor(private router:Router){}
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url ;
        sessionStorage.setItem('currentRoute', this.currentRoute);
      }
    });
  }
}
