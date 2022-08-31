import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  filter(arg0: (data: any) => boolean): any {
    throw new Error('Method not implemented.');
  }

  constructor(private log:LogService) {}
  studentlist =[ {stdname:'Jeet Vegad',stdid:1,stdstream:'science'},
  {stdname:'Akash Gupta',stdid:2,stdstream:'Commerce'},
  {stdname:'Himanshu Jogani',stdid:3,stdstream:'art'},
  {stdname:'Vivek Jha',stdid:4,stdstream:'science'},
  {stdname:'Chintan Vasoya',stdid:5,stdstream:'Commerce'}]

  getdetails(){
        return this.studentlist;
  }
  adddetails(obj:any){
    this.studentlist.push(obj);
    this.log.logstudents(this.studentlist,'New Detail Added')
  }
  deletedetail(id:number){
      this.studentlist = this.studentlist.filter((data)=>data.stdid != id);
      this.log.logstudents(this.studentlist,`Roll no ${id} is deleted`)
      return this.studentlist;

  }
  editdetail(editeddetail:StudentType){
    this.studentlist.forEach((data,index)=>{
      if(data.stdid === editeddetail.stdid){
        this.studentlist.splice(index,1,editeddetail);
      }
    });
    return this.studentlist;
  }
 
}
export type StudentType = {
  stdname:string;
  stdid:number;
  stdstream:string;
};
