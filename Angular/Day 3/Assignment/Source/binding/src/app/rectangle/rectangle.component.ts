import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  num1:number =0;
  num2:number =0;
  res:number = 0;

  cal(){
    this.res= this.num1*this.num2;
  }
}
