import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('cartitems');
  }
  getUser(): any {
    return localStorage.getItem('token');
  }
  isLoggedIn(): boolean {
    return this.getUser() != null;
  }
}
