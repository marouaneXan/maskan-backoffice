import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';


@NgModule({
  declarations: [
    ListClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  exports: [ListClientsComponent]
})
export class ClientsModule { }
