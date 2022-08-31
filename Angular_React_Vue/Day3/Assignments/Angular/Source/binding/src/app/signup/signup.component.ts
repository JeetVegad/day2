import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nam:string='';
  pan:string='';
  address:string='';
  detail:string='';
display(){
          this.detail="Your name is :"+" " + this.nam+","+" "+" Your PAN number is :"+ " "+this.pan+" " +"and"+" "+" Your Address  is :"+" "+this.address;
}
}