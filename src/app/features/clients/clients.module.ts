import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from '../spinner/spinner.module';


@NgModule({
  declarations: [
    ListClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    HttpClientModule,
    SpinnerModule
  ],
  exports: [ListClientsComponent]
})
export class ClientsModule { }
