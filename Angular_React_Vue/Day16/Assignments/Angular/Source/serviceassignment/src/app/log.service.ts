import { Injectable } from '@angular/core';
import { StudentType } from './student.service';
@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  logstudents(studentlist:StudentType[] | StudentType,message:string){
    console.log(message,studentlist);
  }
}
