import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greater',
  templateUrl: './greater.component.html',
  styleUrls: ['./greater.component.css']
})
export class GreaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    num1:number=0;
    num2:number=0;
}
