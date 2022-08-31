import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './Models/Users';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  hosturl = "https://gorest.co.in/public/v2/";
  token = "39d8bbdacb2f6bbce5c066b8b32bc9994e93e0d8fc72b09dae7fd66487beb8b8";
  constructor(private http: HttpClient) { }
  getUser(): Observable<Array<User>> {
    const httpToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`
      })
    }
    
    return this.http.get<Array<User>>(`${this.hosturl}users`, httpToken);

  }

  postUser(user:User){
    const httpToken = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`

      })
    }
    return this.http.post<User>(` ${this.hosturl}users`,user,httpToken)
  }


  putUser(user:User,id:number):Observable<User>{
    const httpToken = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`

      })
    }
    return this.http.put<User>(`${this.hosturl}users/${id}`,user,httpToken)
  }
    deleteUser(id:number):Observable<User>{
      const httpToken = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization:`Bearer ${this.token}`
  
        })
      }
      return this.http.delete<User>(`${this.hosturl}users/${id}`,httpToken)
    }
}
