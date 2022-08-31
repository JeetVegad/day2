import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingassignment';

  user:Array<any> = [{"ID":1,"UserName":"User 1"},
                      {"ID":2,"UserName":"User 2"}]
}
