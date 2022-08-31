import { Component, OnInit,TemplateRef } from '@angular/core';
import { LogService } from '../log.service';
import { StudentService ,StudentType} from '../student.service';
import {BsModalRef,BsModalService} from 'ngx-bootstrap/modal'
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  providers:[LogService,StudentService]
})
export class StudentlistComponent implements OnInit {
  editModalRef?: BsModalRef;
  constructor(private std:StudentService,private modalService:BsModalService) { }

  ngOnInit(): void {
    this.list = this.std.getdetails();
    
  }
  stdlist = this.std.studentlist;
  studentData!:StudentType;
  list:any =[];
  name:any;
  id:any;
  stream:any;
  
  
  submitdata(){
    var obj = {stdname:this.name,stdid:this.id,stdstream:this.stream}
    this.std.adddetails(obj);
    console.log(this.list)
  }
  deletedetail(event:any){
this.list = this.std.deletedetail(parseInt(event.currentTarget.id));
  }
  editdetail(){
    this.modalService.hide();
    this.list = this.std.editdetail(this.studentData);
  }
  open(template:TemplateRef<any>,event:any){
    this.studentData = {
      ...this.stdlist.filter((data)=>data.stdid===parseInt(event.currentTarget.id))[0],
      stdid:parseInt(event.currentTarget.id)
    };
    this.editModalRef = this.modalService.show(template);
  }
}
