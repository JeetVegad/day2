import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './Models/User';
@Injectable({
  providedIn: 'root'
})
export class CrudoperationService {

  hosturl  = "https://gorest.co.in/public/v2/";
  token = "39d8bbdacb2f6bbce5c066b8b32bc9994e93e0d8fc72b09dae7fd66487beb8b8";
  constructor(private http:HttpClient) { }

  httpToken = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    }) 
}

getUser():Observable<Array<User>>{
  return this.http.get<Array<User>>(`${this.hosturl}users`,this.httpToken);
}

postUser(user:User){
  return this.http.post<User>(`${this.hosturl}users`,user,this.httpToken);
}

putUser(user:User,id:number):Observable<User>{
  return this.http.put<User>(`${this.hosturl}users/${id}`,user,this.httpToken);
}

deleteUser(id:number):Observable<User>{
  return this.http.delete<User>(`${this.hosturl}users/${id}`,this.httpToken);
}
}
