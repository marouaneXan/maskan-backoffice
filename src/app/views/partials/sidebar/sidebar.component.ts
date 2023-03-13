import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  collapseShow = "hidden";
  sidebarLinks = [
    {
      path: '/admin/dashboard',
      name: 'Dashboard'
    },
    {
      path: '/admin/dashboard/clients',
      name: 'Clients'
    },
    {
      path: '/admin/dashboard/properties',
      name: 'Properties'
    }
  ]
  activeLinkIndex: number = 0;

  setActiveLink(index: number) {
    this.activeLinkIndex = index;
  }
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}
