import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  checkup(uname:string,pwd:string){
    if(uname =="admin" && pwd == "pass"){
      localStorage.setItem('username','admin');
      return true;
    }else{
      return false;
    }
  }
}
