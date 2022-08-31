import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  greeting(a:string){
    var b = "Greetings of the Day!!!"
    return b;
  }
  constructor() { }
}
