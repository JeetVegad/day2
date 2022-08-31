import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodMaster } from './Model/FoodMaster';

@Injectable({
  providedIn: 'root'
})
export class FoodmasterService {

  hosturl="http://swiggy-2447-jeet-api.radixind.in/api/foodmaster";
  constructor(private http:HttpClient) { }


  
  getFoodMaster():Observable<Array<FoodMaster>>{
    var call = this.http.get<Array<FoodMaster>>(`${this.hosturl}`);
    return call;
  }

  postFoodMaster(city:any){
    console.log(city);
    return this.http.post<any>(`${this.hosturl}`,city);
  }

putFoodMaster(foodmaster:any,id:any){
  return this.http.put<any>(`${this.hosturl}/${id}`,foodmaster);
}

  deleteFoodMaster(id:any){
    return this.http.delete<any>(`${this.hosturl}/${id}`);
  }

}
