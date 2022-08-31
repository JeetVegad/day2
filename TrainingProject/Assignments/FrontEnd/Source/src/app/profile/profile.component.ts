import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';
import { AddressService } from '../address.service';
import { OrderitemsService } from '../orderitems.service';
import { FooditemService } from '../fooditem.service';
import { CrudService } from '../crud.service';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: any = [];
  orders:any=[];
address: any=[];
orderitems:any=[];
fooditems:any=[];
restaurants:any=[];
 role = localStorage.getItem('role');
  useremail = localStorage.getItem('email');
  constructor(private service:UserService,private orderservice:OrderService,private addressservice:AddressService,private orderitemservice:OrderitemsService,private fooditemservice:FooditemService,private restaurantService:CrudService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe((p: any[]) => {
      this.users = p;
      console.log(this.users);
    });
    this.orderservice.getOrder().subscribe((p:any[])=>{
      this.orders = p;
    })
    this.addressservice.getAddress().subscribe((p: any[]) => {
      this.address = p;
    });
    this.orderitemservice.getOrderItem().subscribe((p: any[]) => {
      this.orderitems = p;
    });
    this.fooditemservice.getfoodtems().subscribe((p: any[]) => {
      this.fooditems = p;
    });
    this.restaurantService.getRestaurants().subscribe((p: any[]) => {
      this.restaurants = p;
    });
  }
  user = this.users.find((i: any) => i.useremail == this.useremail);
  logout(){
    this.authservice.logout();
  }
  isLoggedIn(){
   return this.authservice.isLoggedIn();
  }
}
