import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { PaimentService } from 'src/app/services/paiment.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor(private paiementService : PaimentService, private clientService: ClientService) { }

  ngOnInit(): void {

  }
//setting the id to a facture 
  setId(id : any) {
    this.clientService.findFacture(id).subscribe({
      next: (data) => {
        console.log("id dial facture"+id)
        console.log(data)
        this.paiementService.facture = data
      },
      error: (e) => console.error(e)
    });
    console.log("Clickeeeed" + this.paiementService.facture.id )
  }

}
