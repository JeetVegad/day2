import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private fb: FormBuilder,private authservice:AuthService ,private router: Router) { }
  users: any = [];

  loginUser: any;

  userData = this.fb.group({
    email: [''],
    password: [''],
  })
  ngOnInit(): void {
    this.service.getUser().subscribe((p: any[]) => {
      this.users = p;
    })
  }

  login() {
    this.loginUser = this.userData.value;
    if (this.loginUser.email == "" || this.loginUser.password == "") {
      alert("email or password is empty!");
    }
    else {
      this.service.attemptLogin(this.loginUser).subscribe(a => {
        console.log(a.token)
        localStorage.setItem('token', a.token);

        let jwtData = a.token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        localStorage.setItem('role', decodedJwtData.role);
        // console.log(decodedJwtData)
        localStorage.setItem('email',decodedJwtData.email);
        // console.log(decodedJwtData.role);
        // if(decodedJwtData.role === 'admin') {
        //       this.router.navigate(['/adminpanel']);
        // }else{
        //   this.router.navigate(['/']);
        // }
      },(error:HttpErrorResponse) => {

        window.alert("Invalid credentials");
  
    }
      );
    }
  }

  logout(){
    this.authservice.logout();
  }
  isLoggedIn(){
   return this.authservice.isLoggedIn();
  }
  //  jwt = JSON.parse(localStorage.getItem('token') || '{}');





}
