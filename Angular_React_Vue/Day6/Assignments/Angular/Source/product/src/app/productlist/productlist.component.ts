import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() productlist:Array<any>=[];

}
