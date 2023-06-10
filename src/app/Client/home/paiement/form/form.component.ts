import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/models/facture.model';
import { Smms } from 'src/app/models/smms';
import { ClientService } from 'src/app/services/client.service';
import { PaimentService } from 'src/app/services/paiment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //showCode:boolean=false;
  result:Boolean=false;
  result2:Number = 0;



  facture : Facture= {
  }
  
  constructor(private paimentService:PaimentService, private clientService: ClientService) { }
/*
  get smms(){
    return this.paimentService.smms;
  }
  
  */

  ngOnInit(): void {

    this.clientService.findBankAccount(this.clientService.client.id).subscribe({
      next: (data) => {
        this.clientService.compte=data;
        
        console.log("yyyyy"+this.clientService.compte.id);
      },
      error: (e) => console.error(e)
    });

    this.clientService.findFacture(1).subscribe({
      next: (data) => {
        this.facture=data;
      
      },
      error: (e) => console.error(e)
    });


  }
  valider(){


    
    console.log(this.facture.id + "somethiiiing " +this.clientService.compte.id)
      this.paimentService.get(this.facture.id, this.clientService.client.id).subscribe({
      next: (data) => {
        console.log(this.clientService.compte.id+"compte iiid");
        this.result=data
      },
      error: (e) => console.error(e)
    });

    const data : Smms ={
      //this.clientService.client.phone
      phoneNumber : this.clientService.client.phone,
      message : "2000Efv2i"
    }

    this.paimentService.sendSms(data).subscribe({
      next:(data) =>{
        this.result2=data;
      },
      error: (e) => console.error(e)
    });

  }

id:Number=1;
  payer(){
    const data = {
      id:this.facture.id,
      montant:this.facture.montant
    }

    console.log(this.facture.id+" fezfze g");
      this.paimentService.validPay(this.facture.id,this.clientService.client.id).subscribe({
      next: (data) => {
        this.result=data;
        console.log(this.result);
      },
      error: (e) => console.error(e)
    });
return 0;
  }

}
