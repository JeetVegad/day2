import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postitems:Array<any>=[];
  postsevent(postitems:Array<any>){
    this.postitems = postitems;
  }
  isShown: boolean = false ; // hidden by default
  display() {
  
  this.isShown = ! this.isShown;
  
  }
}
