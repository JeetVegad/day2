import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // searchText:string ='';
  constructor(private authservice:AuthService) { }
  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authservice.isLoggedIn();
  }
  flag=true;
  Show(){
    this.flag = !this.flag;
    return this.flag;
  }
}
