import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FooditemService } from '../fooditem.service';
import { FoodItem } from '../Model/FoodItem';
import { FoodMaster } from '../Model/FoodMaster';
import { Restaurant } from '../Model/Restaurant';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-fooditemadmin',
  templateUrl: './fooditemadmin.component.html',
  styleUrls: ['./fooditemadmin.component.css']
})
export class FooditemadminComponent implements OnInit {
  fooditems!:any;
  fooditem!:any;
  restaurants: Array<any> = [];
  foodmaster!:any;
  constructor( private service:RepositoryService,private fb:FormBuilder,private fooditemservice:FooditemService) { }

  fooditemdetails = this.fb.group({
    fooditemid:[0],
    foodid:[0],
    foodname:[''],
    restaurant:[],
    price:[0],
    restaurantid:[0],
    // foodImage:[''],
    // quantity:[0],
    description:[''],
    images:['https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'],
    food:[],
    customizations:[],
  })

  ngOnInit(): void {
    this.service.get('Restaurant').subscribe((p: Array<Restaurant>) => {
      this.restaurants = p;
    });
    this.service.get('foodmaster').subscribe((p:Array<FoodMaster>)=>{
      this.foodmaster = p;});

    this.fooditemservice.getfoodtems().subscribe((p:Array<FoodItem>)=>{
      this.fooditems = p;
    })

  }
  postFooditem(){
     this.fooditemdetails.controls.foodid.setValue(parseInt(this.fooditemdetails.controls.foodid.value!.toString()));
     this.fooditemdetails.controls.restaurantid.setValue(parseInt(this.fooditemdetails.controls.restaurantid.value!.toString()));
    this.fooditem = this.fooditemdetails.value;
    this.fooditemservice.postfooditem(this.fooditem).subscribe((arg:any)=>{
      this.fooditem=arg
      this.ngOnInit();
      console.log(this.fooditem);
  })
  }

  editFooditem(fooditem:any){
    this.fooditemdetails.setValue(fooditem);
  }

  updateFooditem(){
    this.fooditemdetails.controls.foodid.setValue(parseInt(this.fooditemdetails.controls.foodid.value!.toString()));
    this.fooditemdetails.controls.restaurantid.setValue(parseInt(this.fooditemdetails.controls.restaurantid.value!.toString()));
    this.fooditem = this.fooditemdetails.value;
    this.fooditemservice.putfooditem(this.fooditem,this.fooditem.fooditemid).subscribe((arg:any)=>{
      this.fooditem =arg
      this.ngOnInit();
    })
  }
  deleteFooditem(fooditemid:number){
    this.fooditem = this.fooditemdetails.value;
    this.fooditemservice.deletefooditem(fooditemid).subscribe((arg:any)=>{
      this.fooditem =arg
      this.ngOnInit();
    })
  }
}
