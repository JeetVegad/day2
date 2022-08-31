import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  hosturl="http://swiggy-2447-jeet-api.radixind.in/api/order";
  constructor(private http:HttpClient) { }
  getOrder():Observable<any[]>{
    var call = this.http.get<any[]>(`${this.hosturl}`);
    return call;
  }

  postOrder(order:any):any{
    return this.http.post<any>(`${this.hosturl}`,order);
  }

}
