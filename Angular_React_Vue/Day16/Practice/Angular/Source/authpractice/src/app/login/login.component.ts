import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ServiceService]
})
export class LoginComponent implements OnInit {

  constructor(private serv:ServiceService,private routes : Router) { }
  msg: any;
  ngOnInit(): void {
  }
      check(uname:string,p:string){
        var output = this.serv.checkup(uname,p);
        if(output){
          this.routes.navigate(['/dashbord']);

        }else{
          this.msg = "Invalid username or password";
        }
      }
}
