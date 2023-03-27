import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ClientService } from '../../service/client.service';
import { Client } from '../../interface/client';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  clients: Client[] = []
  isLoading = false
  constructor(private clientService: ClientService, private loadingService: LoadingService) { }
  ngOnInit(): void {
    this.getAllClients()
  }
  getAllClients() {
    this.isLoading = true
    this.loadingService.show()
    this.clientService.getClients().subscribe(
      res => {
        this.clients = res as Client[]
        this.isLoading = false
        this.loadingService.hide()
      },
      err => {
        this.isLoading = false
        this.loadingService.hide()
      }
    )
  }
}
