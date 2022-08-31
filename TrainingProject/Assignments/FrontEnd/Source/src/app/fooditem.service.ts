import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodItem } from './Model/FoodItem';

@Injectable({
  providedIn: 'root'
})
export class FooditemService {

  
  hosturl="http://swiggy-2447-jeet-api.radixind.in/api/fooditem";
  constructor(private http:HttpClient) { }
  // httpOptions={

  //   headers: new HttpHeaders({

  //     'content-Type':'application/json'

  // })

  // }

  getfoodtems(){
    return this.http.get<FoodItem[]>(`${this.hosturl}`);
  }

postfooditem(fooitem:any){
   
    return this.http.post<any>(`${this.hosturl}`,fooitem);
  }

  putfooditem(fooditem:any,id:any){
    return this.http.put<any>(`${this.hosturl}/${id}`,fooditem);
  }

  deletefooditem(id:any){
    return this.http.delete<any>(`${this.hosturl}/${id}`);
  }


}
