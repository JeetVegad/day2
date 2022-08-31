import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { Restaurant } from './Model/Restaurant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SwiggyDemo';
 
  constructor() {}
  ngOnInit(): void {
 
  }
}
