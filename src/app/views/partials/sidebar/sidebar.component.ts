import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  logoSrc:string='../../../../assets/images/maskan-logo.svg'
  activeLinkIndex: number = 0; // Initialize activeLinkIndex with 0
  constructor(private tokenService:TokenService,private router:Router){}

  sidebarLinks = [
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      icon:'fa-solid fa-gauge'
    },
    {
      path: '/admin/dashboard/clients',
      name: 'Clients',
      icon:'fa-solid fa-users'
    },
    {
      path: '/admin/dashboard/properties',
      name: 'Properties',
      icon:'fa-solid fa-house-signal'
    },
    {
      path: '/admin/dashboard/categories',
      name: 'Categories',
      icon:'fa-solid fa-layer-group'
    },
    {
      path: '/admin/dashboard/types',
      name: 'Types',
      icon:'fa-solid fa-bolt'
    },
    {
      path: '/admin/dashboard/characteristics',
      name: 'Characteristics',
      icon:'fa-solid fa-chart-simple'
    },
  ]

  ngOnInit() {
    // Retrieve activeLinkIndex from local storage when component is initialized
    const activeLinkIndex = localStorage.getItem('activeLinkIndex');
    if (activeLinkIndex) {
      this.activeLinkIndex = +activeLinkIndex; // Convert string to number
    }
  }

  setActiveLink(index: number) {
    this.activeLinkIndex = index;
    localStorage.setItem('activeLinkIndex', String(index)); // Store activeLinkIndex in local storage
  }

  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }

  //logout
  logout(){
    this.tokenService.clearLocalStorage()
    setTimeout(()=>{
      this.router.navigate(['/auth/sign-in'])
    },1000)
  }
}
