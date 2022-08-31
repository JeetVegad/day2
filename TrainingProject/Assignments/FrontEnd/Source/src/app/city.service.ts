import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { city } from './Model/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  hosturl="https://localhost:44357/api/City";
  constructor(private http:HttpClient) { }


  
  getCity():Observable<Array<city>>{
    var call = this.http.get<Array<city>>(`${this.hosturl}`);
    return call;
  }

  postCity(city:any){
    console.log(city);
    return this.http.post<any>(`${this.hosturl}`,city);
  }

  putCity(city:any,id:any){
    return this.http.put<any>(`${this.hosturl}/${id}`,city);
  }


  deleteciry(id:any){
    return this.http.delete<any>(`${this.hosturl}/${id}`);
  }

}
