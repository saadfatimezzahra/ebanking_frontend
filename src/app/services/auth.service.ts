import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8189/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials:any): Observable<any> {
    console.log(credentials);
    return this.http.post(AUTH_API + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  checkIfAlreagyLoggedIn(email:string): Observable<any> {
    return this.http.post(AUTH_API + 'first', {
      email: email}, httpOptions);
  }



  changePassword(request:any): Observable<any> {
    return this.http.post(AUTH_API + 'change_password', {
      oldPassword: request.oldPassword,
      newPassword: request.newPassword,
      confPassword: request.confPassword
    }, httpOptions);  
  }
  
  /*register(user:any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }*/

}