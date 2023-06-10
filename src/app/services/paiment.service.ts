import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Facture } from '../models/facture.model';
import { Smms } from '../models/smms';

const baseUrl = 'http://localhost:8189/api/client';

@Injectable({
  providedIn: 'root'
})
export class PaimentService {
  private _facture: Facture = new Facture;


  /*
  private _smms: Smms = new Smms;


  get smms(){
    return this._smms;
  }
  set smms(value:Smms){
    this._smms=value;
  }

  */
  get facture(){
    
    return this._facture ;
  }
  
  set facture(value:Facture){
    this._facture=value;
  }

  constructor(private http: HttpClient) { }

  get(factId: any, accountId: any): Observable<any> {
    return this.http.get(`${baseUrl+"/checkSolde"}/${accountId}/${factId}`);
  }
  
  validPay(factId: any,accountId: any):Observable<any>{

     return this.http.get(`${baseUrl+"/validPay"}/${accountId}/${factId}`);
     
  }
  sendSms(sendSMS: Smms): Observable<any> {
    console.log(sendSMS.phoneNumber)
    const url = `${baseUrl}/sendSMS`; 
    return this.http.post(url, sendSMS);
  }

}
