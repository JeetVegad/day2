import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://swiggy-2447-jeet-api.radixind.in/api';
  get(route:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${route}`);
  }
}
  // post(route:string,item:any):Observable<any>{
  //   return this.http.post<any>(`${this.baseUrl}/${route}`, item);
  // }}
