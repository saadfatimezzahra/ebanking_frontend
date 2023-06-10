import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Compte } from '../models/compte';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../models/facture.model';

const baseUrl = 'http://localhost:8189/api/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _client: Client = new Client;
  private _compte: Compte = new Compte;



  constructor(private http: HttpClient) { }

get client(){
return this._client ;
}

get compte(){
  return this._compte ;
}
set compte(value:Compte){
  this._compte=value;
}

set client(value:Client){
  this._client=value;
}
  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(baseUrl+"/clients");
  }
  getProfile(): Observable<Client> {
    return this.http.get(`${baseUrl}/profilClient`);
  }
  get(id : any): Observable<Client> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  
  findBankAccount(id : any): Observable<Compte> {
    return this.http.get(`${baseUrl}/compte/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl+"/addClient", data);
  }
  debit(id:any,amount:any,data:any){
    return this.http.post(`${baseUrl+"/debit"}/${id}/${amount}`, data);
  
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl+"/update_client"}/${id}`, data);
  }
  findByFirstname(id: any): Observable<Client[]> {
    return this.http.get<Client[]>(`${baseUrl+"/clients/{id}"}?id=${id}`);
  }
  findFacture(id : any): Observable<Facture> {
    return this.http.get(`${baseUrl}/facture/${id}`);
  }
}
