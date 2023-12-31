import { Injectable } from '@angular/core';

const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    localStorage.clear();
  }

  public saveToken(token: string) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return (localStorage.getItem(TOKEN_KEY) || '{}');
  }

  public saveUser(user:any) {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    // Récupérer des données depuis sessionStorage
    return JSON.parse(sessionStorage.getItem(USER_KEY) || '{}');
  }
}