import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from '../city.service';
import { CrudService } from '../crud.service';
import { FooditemService } from '../fooditem.service';
import { city } from '../Model/City';
import { FoodItem } from '../Model/FoodItem';
import { FoodMaster } from '../Model/FoodMaster';
import { Restaurant } from '../Model/Restaurant';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
   restaurant!: any;
   city!:any;
  restaurants: Array<any> = [];
  resta!:Restaurant;
  fooditem!:any;
  foodmaster!:any;
  constructor(private crudservice:CrudService, private service:RepositoryService,private fb:FormBuilder,private cityservice:CityService,private fooditemservice:FooditemService ) {
    
   }
   restaurantdetail = this.fb.group({
    restaurantid:[0],
    restaurantname:[''],
    restauranttype:[''],
    price:[0],
    addresss:[''],
    rating:[0],
    times:[0],
    coupen:[''],
    cityid:[1],
    images:[''],
    city:[],
    carts:[],
    orders:[],
    restaurantfooditems:[]
  });

  // fooditemdetails = this.fb.group({
  //   fooditemid:[0],
  //   foodid:[0],
  //   foodname:[''],
  //   restaurant:[],
  //   price:[0],
  //   restaurantid:[0],
  //   foodImage:[''],
  //   quantity:[0],
  //   description:['']
  // })

  citydetail = this.fb.group({
    cityname:['']
  })
  ngOnInit(): void {
    this.service.get('Restaurant').subscribe((p: Array<Restaurant>) => {
      this.restaurants = p;
    });
    this.service.get('City').subscribe((p:Array<city>)=>{
      this.city = p;
    })

    // this.service.get('fooditem').subscribe((p:Array<FoodItem>)=>{
    //   this.fooditem = p;
    // })

    this.fooditemservice.getfoodtems().subscribe((p:Array<FoodItem>)=>{
      this.fooditem = p;
    })

    this.service.get('foodmaster').subscribe((p:Array<FoodMaster>)=>{
      this.foodmaster = p;
    })

  }
  // post(){
  //  this.restaurant= this.restaurantdetail.value;
  //   this.service.post('Restaurant',this.restaurant).subscribe((arg:Restaurant)=>{
  //     this.restaurant =arg
  //     this.ngOnInit();
  //   })
  // }
  post(){
    this.restaurantdetail.controls.cityid.setValue(parseInt(this.restaurantdetail.controls.cityid.value!.toString()));
    this.restaurant = this.restaurantdetail.value;
    this.crudservice.postrestaureant(this.restaurant).subscribe((arg:any)=>{
      this.restaurant=arg
      this.ngOnInit();
      console.log(this.restaurant);
  })
}



postCity(){
  this.city = this.citydetail.value;
  this.cityservice.postCity(this.city).subscribe((arg:any)=>{
    this.city=arg
    this.ngOnInit();
})
}

edit(restaurant:any){
  this.restaurantdetail.setValue(restaurant)

  }
  update(){
    this.restaurantdetail.controls.cityid.setValue(parseInt(this.restaurantdetail.controls.cityid.value!.toString()));
    this.restaurant = this.restaurantdetail.value;
    this.crudservice.putrestaurant(this.restaurant,this.restaurant.restaurantid).subscribe((arg:any)=>{
      this.restaurant =arg
      this.ngOnInit();
    })
  }
  delete(restaurantid:number){
  this.restaurant = this.restaurantdetail.value;
    this.crudservice.deleterestaurant(restaurantid).subscribe((arg:any)=>{
      this.restaurant=arg
      this.ngOnInit();

    })
  }


  // postFooditem(){
  //   // this.fooditemdetails.controls.foodid.setValue(parseInt(this.fooditemdetails.controls.foodid.value!.toString()));
  //   // this.fooditemdetails.controls.restaurantid.setValue(parseInt(this.fooditemdetails.controls.restaurantid.value!.toString()));
  
  //   this.fooditemservice.postfooditem(this.fooditem).subscribe((arg:any)=>{
  //     this.fooditem=arg
  //     this.ngOnInit();
  //     console.log(this.fooditem);
  // })
  // }
}
