import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  add:any;
  hosturl="http://swiggy-2447-jeet-api.radixind.in/api/Address"
  // hosturl="https://localhost:44357/api/Address"

  constructor(private http:HttpClient) { }
  getAddress():Observable<any[]>{
    var call = this.http.get<any[]>(`${this.hosturl}`);
    return call;
  }
  postAddress(add:any){
    return this.http.post<any>(`${this.hosturl}`,add);
  }
}
