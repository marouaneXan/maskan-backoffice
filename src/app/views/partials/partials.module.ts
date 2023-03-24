import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import { DropdownComponent } from 'src/app/shared/dropdown/dropdown/dropdown.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule
  ],
  exports:[
    SidebarComponent,
    NavbarComponent
  ]
})
export class PartialsModule { }
