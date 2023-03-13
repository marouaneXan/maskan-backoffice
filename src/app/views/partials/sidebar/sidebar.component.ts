import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  collapseShow = "hidden";
  toggleCollapseShow(classes:string) {
    this.collapseShow = classes;
  }
}
