import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';
  num1:number = 0;
  num2:number =0 ;
  res:number =0;

   Add(){
    this.res = this.num1 + this.num2;
    // console.log(this.res);
  }
  Sub(){
    this.res = (this.num1 - this.num2);
    // console.log(this.res);
  }
  Mul(){
    this.res = this.num1 * this.num2;
    // console.log(this.res);
  }
}