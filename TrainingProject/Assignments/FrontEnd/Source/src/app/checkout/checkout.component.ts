import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddressService } from '../address.service';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  users: any = [];
  address: Array<any> = [];
  order: Array<any> = [];
  useremail = localStorage.getItem('email');
  useraddress: any;
  flag=false;
  add:any;
  user:any;
  // adduser:any;
  // addd:any;
  // orderobject={
  //   addid:0,
  //   userid:0,
  //   restaurantid:0,
  //   total:0,
  //   orderitem:[

  //   ]
  // }

  constructor(private service: UserService, private orderservice: OrderService, private addressservice: AddressService, private authservice: AuthService, private fb: FormBuilder) { }


  cartitems = JSON.parse(localStorage.getItem('cartitems') || '[{}]');

  cartempty() {
    if (!localStorage.getItem('cartitems') || this.cartitems.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit(): void {
    this.service.getUser().subscribe((p: any[]) => {
      this.users = p;
      console.log(this.users);
  this.user = this.users.find((i: any) => i.useremail == this.useremail);

    });
    console.log(this.cartitems);
    this.addressservice.getAddress().subscribe((p: any[]) => {
      this.address = p;
    });
    // this.orderservice.getOrder().subscribe((p: any[]) => {
    //   this.order = p;
    // });

  }

  get getSubtotal() {
    const initial = 0;

    const subtotal = this.cartitems.reduce((sum: any, current: any) => sum + current.price, initial) + 0;
    return subtotal;
  }
  get Total() {
    const initial = 0;
    return this.cartitems.reduce((sum: any, current: any) => sum + current.price, initial) + 50;
  }
  orderitems = this.cartitems.map((i: any) => {

    var obj = {
      fooditemid: i.fooditemid,
      restaurantid: i.restaurantid,
      quantity: i.quantity
    }
    return obj;

  })
  // role = localStorage.getItem('role');
  //   token = JSON.parse(localStorage.getItem('token') || '{}');
  //  jwtData = this.token.split('.')[1]
  //        decodedJwtJsonData = window.atob(this.jwtData)
  //        decodedJwtData = JSON.parse(this.decodedJwtJsonData)
  //       email = this.decodedJwtData.useremail;
  isLoggedIn() {
    return this.authservice.isLoggedIn();
  }
  formdertail = this.fb.group({
    addid: [0]
  })

  adddetails = this.fb.group({
    userid:[0],
    addresses:['']
  })
  pay() {

    var user = this.users.find((i: any) => i.useremail == this.useremail);

    var detail = {
      userid: user.userid,
      addid: this.formdertail.controls['addid'].value,
      total: this.Total,
      orderitems: this.orderitems
    }
    console.log(detail);
    this.orderservice.postOrder(detail).subscribe((arg: any) => {
      this.order = arg
      this.ngOnInit();
      console.log(detail);
    });
    alert("Your order has been placed successfully!");
    localStorage.removeItem('cartitems');
  }
  addchange(event: any) {
    console.log(event.target.value);
    console.log(this.formdertail.controls['addid'].value)
  }

  selectAddress() {
    var adduser = this.users.find((i: any) => i.useremail == this.useremail);
    var addd = this.address.filter((i: any) => i.userid == adduser.userid);
    this.useraddress = addd;
    this.flag = ! this.flag;
    // console.log(this.orderitems);
  }


  postAddress(){
    // this.adddetails.controls.userid.setValue(this.user.userid);
    this.adddetails.controls.userid.setValue(this.user.userid);
    this.add = this.adddetails.value;
    this.addressservice.postAddress(this.add).subscribe((arg:any)=>{
      this.add=arg
      this.ngOnInit();
  });
  }



}
  // placeorder(){
  // var  orderobject={
  //     addid:this.address.forEach((ele=>ele.addid==)),
  //     userid:0,
  //     restaurantid:0,
  //     total:0,

  //   }
  // }


