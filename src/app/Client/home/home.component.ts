import { Component, NgModule, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/services/user.service';
import { Client } from 'src/app/models/client';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  client : Client = {
  
  }

  constructor(private clientService : ClientService, private userService : UserService) { }

    
  ngOnInit(): void {
    this.retreiveClientData();
  }

  
  retreiveClientData() : void{
  
    this.clientService.get(this.userService.getUser().getUserId()).subscribe({
      next: (data) => {
        console.log(this.userService.getUser().getUserId());
        this.client = data
        this.clientService.client=data
      },
      error: (e) => console.error(e)
    })
  }

}
