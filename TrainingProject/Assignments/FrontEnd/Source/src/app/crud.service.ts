import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './Model/Restaurant';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  hosturl="http://swiggy-2447-jeet-api.radixind.in/api/restaurant";
  constructor(private http:HttpClient) { }
  httpOptions={

    headers: new HttpHeaders({

      'content-Type':'application/json'

  })

  }
  getRestaurants():Observable<Array<Restaurant>>{
    var call = this.http.get<Array<Restaurant>>(`${this.hosturl}`);
    return call;
  }
  getretau(id:number):Observable<Array<Restaurant>>{
    var call = this.http.get<Array<Restaurant>>(`${this.hosturl}/${id}`);
    return call;
  }

  postrestaureant(restaurant:any){
    console.log(restaurant);
    return this.http.post<any>(`${this.hosturl}`,restaurant,this.httpOptions);
  }

  putrestaurant(restaurant:any,id:any){
    return this.http.put<any>(`${this.hosturl}/${id}`,restaurant);
  }

  deleterestaurant(id:any){
    return this.http.delete<any>(`${this.hosturl}/${id}`);
  }


}
