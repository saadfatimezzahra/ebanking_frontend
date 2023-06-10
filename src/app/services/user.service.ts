import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const API_URL = 'http://localhost:8191/api/test/';

@Injectable({
  providedIn: 'root'
})

export class UserService implements OnInit, OnDestroy{

  user : User = new User(0)
  constructor(private http: HttpClient) { 
    console.log("Construuuucted userServvv")
  }

  ngOnInit(): void {

    console.log("Iniiiiiiiiit"+this.user.getUserId())
    
  }

  ngOnDestroy(): void {
      console.log("User service is destrooyed")
  }

/*
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }*/

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'client', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'agent', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

    
  setUserId(userId : number) {
    this.user = new User(userId);

  }
  getUser() :User{
    return this.user;
  }

}