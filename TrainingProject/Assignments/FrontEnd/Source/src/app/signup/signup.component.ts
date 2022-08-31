import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:UserService,private fb:FormBuilder) { }
users:any = [];
user!:any;
  ngOnInit(): void {
    this.service.getUser().subscribe((p:any[])=>{
      this.users = p;
    })
  }
  userdetails = this.fb.group({
    username:['',[Validators.required]],
    useremail:['',[Validators.required, Validators.email]],
    passwords:[''],
    role:['user'],
    phone:[0,[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]]
  })

  postuser(){
    this.user = this.userdetails.value;
    if(this.user.username == ""||this.user.passwords == ""||this.user.useremail==""){
      alert("Please enter username or password or email is empty")
    } 
    else{
    this.service.postUser(this.user).subscribe((p:any)=>{
      this.user=p;
      this.ngOnInit();
    })
  }
  }
  get username() {
    return this.userdetails.get('username') as FormControl;
  }

  get phone() {
    return this.userdetails.get('phone') as FormControl;
  }

  get useremail() {
    return this.userdetails.get('useremail') as FormControl;
  }
}
