import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user: string = '';
  pass: string = '';
  res: string = '';
  res1: string = '';
  match() {
    const rExp: RegExp = /admin/;
    console.log(rExp.test(this.user));
    if (this.user == '') {
      this.res = "Enter valid username";
    } else if (this.pass == '') {
      this.res = "Enter valid  password";
    } else if (rExp.test(this.user)  && rExp.test(this.pass)) {
      this.res1 = "You are Login succesfully!!"
      this.res="";
    } else {
      this.res = "Enter valid user name or password"
      this.res1="";
    }
  }
}