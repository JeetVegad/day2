import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from './crud.service';
import { User } from './Models/Users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http';
  userdetail:FormGroup;
  user!:User;
  users:Array<User>=[];
  constructor(private crudservice:CrudService,private fb:FormBuilder) {
  this.userdetail =this.fb.group({
    id:[0],
    name:[''],
    email:[''],
    gender:[''],
    status:['']
  })

  }
  
  ngOnInit(): void {
    this.crudservice.getUser().subscribe((p:Array<User>)=>{
      this.users=p;
    })
  }
  post(){
    this.user = this.userdetail.value;
    this.crudservice.postUser(this.user).subscribe((arg:User)=>{
      this.user=arg
      this.ngOnInit();

    })
  }
  edit(user:User){
    this.userdetail.setValue(user)

    }
    update(){
      this.user = this.userdetail.value;
      this.crudservice.putUser(this.user,this.user.id).subscribe((arg:User)=>{
        this.user =arg
        this.ngOnInit();
      })
    }
    delete(id:number){
    this.user = this.userdetail.value;
      this.crudservice.deleteUser(id).subscribe((arg:User)=>{
        this.user=arg
        this.ngOnInit();
  
      })
    }
  }

