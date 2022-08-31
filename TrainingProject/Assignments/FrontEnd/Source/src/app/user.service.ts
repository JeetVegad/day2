import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  hosturl="http://swiggy-2447-jeet-api.radixind.in/api/user";

  getUser():Observable<any[]>{
    var call = this.http.get<any[]>(`${this.hosturl}`);
    return call;
  }

  postUser(user:any):any{
    return this.http.post<any>(`${this.hosturl}`,user);
  }

  attemptLogin(user:any){
    return this.http.post<any>(`${this.hosturl}/login`,user);
  }

}
