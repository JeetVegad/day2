import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './Models/User';
import { CrudoperationService } from './crudoperation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  userdetails:FormGroup;
  user!:User;
  users:Array<User> = [];
  constructor(private crudservice:CrudoperationService,private fb:FormBuilder){
    this.userdetails = this.fb.group({
      id:[0],
      name:[''],
      email:[''],
      gender:[''],
      status:['']
    })
  }

  ngOnInit():void {
    this.crudservice.getUser().subscribe((p:Array<User>)=>{
      this.users = p;
    })
  }
  post(){
    this.user = this.userdetails.value;
    this.crudservice.postUser(this.user).subscribe((p:User)=>{
    this.user = p
    this.ngOnInit();})
  }
  edit(user:User){
    this.userdetails.setValue(user)
  }
  update(){
    this.user=this.userdetails.value;
    this.crudservice.putUser(this.user,this.user.id).subscribe((p:User)=>{
      this.user = p;
      this.ngOnInit();
    })
  }
  delete(id:number){
      this.user = this.userdetails.value;
      this.crudservice.deleteUser(id).subscribe((p:User)=>{
        this.user = p;
        this.ngOnInit();
      })
  }
}
