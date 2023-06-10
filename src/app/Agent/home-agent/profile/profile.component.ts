import { Component, Injectable, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { Agent } from '../../../models/agent';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
//agent details
  agent : Agent = {

  }

  constructor(private agentService : AgentService, private userService : UserService) {
   }

  ngOnInit(): void {

    this.retreiveAgentData();

  }

  retreiveAgentData() : void{
    this.agentService.get(this.userService.getUser().getUserId()).subscribe({
      next: (data) => {
        console.log(data);
        this.agentService.agent = data
      },
      error: (e) => console.error(e)
    })
  }

}
