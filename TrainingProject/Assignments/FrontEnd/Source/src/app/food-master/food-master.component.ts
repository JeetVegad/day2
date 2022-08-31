import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FoodmasterService } from '../foodmaster.service';
import { FoodMaster } from '../Model/FoodMaster';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-food-master',
  templateUrl: './food-master.component.html',
  styleUrls: ['./food-master.component.css']
})
export class FoodMasterComponent implements OnInit {

  
  constructor(private service:RepositoryService,private foodmasterservice:FoodmasterService,private fb:FormBuilder) { }
  ngOnInit(): void {
    this.service.get('foodmaster').subscribe((p:Array<FoodMaster>)=>{
      this.foodmaster = p;
    })
  }
  foodmaster:any;
  fooddetail = this.fb.group({
    foodname:[''],
    foodid:[0],
    cartitems:[],
    orderitems:[],
    restaurantfooditems:[],
  })


  postFoodMaster(){
    this.foodmaster = this.fooddetail.value;
    this.foodmasterservice.postFoodMaster(this.foodmaster).subscribe((arg:any)=>{
      this.foodmaster=arg
      this.ngOnInit();
  })
  }

  deleteFoodmater(id:any){
    this.foodmaster = this.fooddetail.value;
    this.foodmasterservice.deleteFoodMaster(id).subscribe((arg:any)=>{
      this.foodmaster=arg
      this.ngOnInit();
  })
}
editFoodMaster(foodmaster:any){
  this.fooddetail.setValue(foodmaster);
}

updateFoodMaster(){
  this.foodmaster = this.fooddetail.value;
  this.foodmasterservice.putFoodMaster(this.foodmaster,this.foodmaster.foodid).subscribe((arg:any)=>{
    this.foodmaster =arg
    this.ngOnInit();
  })
}

}
