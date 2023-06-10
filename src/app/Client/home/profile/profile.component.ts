import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Compte } from 'src/app/models/compte';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
    client : Client = {
  
    }
    compte : Compte = {

    }
  
    constructor(private clientService : ClientService) {
     }

     ngOnInit(): void {
         this.client = this.clientService.client
         this.compte = this.clientService.compte
     }
  
    setClientService(cs :ClientService ){
      this.clientService = cs
    }
  
  }