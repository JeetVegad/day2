import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  result:Array<any>=[];
  even(){
    for( var i=0;i<=100;i++){
        if( i%2==0){
          this.result.push(i);
        }
   
    }
    
  }
      
  }

