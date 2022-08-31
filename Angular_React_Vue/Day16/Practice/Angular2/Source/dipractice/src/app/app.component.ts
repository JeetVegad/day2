import { Component } from '@angular/core';
import { GreetingsService } from './greetings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dipractice';
  str:string='';
constructor(private print:GreetingsService){

}

greeting(){
  this.str = this.print.greeting(this.str);
}
}
