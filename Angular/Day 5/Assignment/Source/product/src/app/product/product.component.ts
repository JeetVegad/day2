import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
     products =[{name:"Wafers",price:25,quntity:30},
     {name:"Choclates",price:25,quntity:30},
     {name:"Soda",price:25,quntity:30}]
}
