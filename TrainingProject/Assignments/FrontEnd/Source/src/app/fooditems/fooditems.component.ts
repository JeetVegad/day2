import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { FoodItem } from '../Model/FoodItem';
import { Restaurant } from '../Model/Restaurant';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute,private service:RepositoryService, public cartservice:CartserviceService) {

   }

   Id: number = 0;
  filteredlist !:Restaurant;
  cartitems:any=[];
  foodlist:Array<FoodItem> =[];
  resta!: Restaurant;
  ngOnInit(): void {
    
    this.activeroute.params.subscribe((p) => {
      this.Id = p['id'];
    });
    this.service.get('restaurant/'+this.Id).subscribe((p: any) => {
      this.filteredlist = p;

      this.service.get('FoodItem/getfooditemmaster/'+this.Id).subscribe((p: Array<FoodItem>) => {
        this.foodlist = p;
        this.foodlist.forEach((a:any) => {
          Object.assign(a,{quantity:1});
        });
      });
    });
    this.cartitems = this.cartservice.getcartitems() 
  }
  addtocart(item:any){
    var obj ={
      fooditemid:item.fooditemid,
      foodname:item.foodname,
      price:item.price,
      restaurantid:item.restaurantid,
      restaurant:item.restaurant,
      quantity:item.quantity,
    }
    var found = this.cartitems.find((i:any)=>i.fooditemid==item.fooditemid);
    if(found==null)
    {
     this.cartitems.push(obj);
    }
     else
     {
      found.quantity++;
      found.price = item.price + found.price;
     }
    }

    

      // addButton(item:any){
      // this.cartitems.map((a:any, index:any)=>{
      //    if(a.fooditemid==item.fooditemid){
      //     //alert("item already available in Cart")
      //     item.quantity = item.quantity+1;
      //     item.price = item.price+item.price
      //    }
      //   });
      // }
    //  removeButton(item:any){
    //   this.cartitems.map((a:any, index:any)=>{  
    //     if(a.fooditemid==item.fooditemid && a.quantity >1){
    //      //alert("item already available in Cart")
    //      a.quantity = a.quantity-1;
    //     //  a.price = a.quantity/a.price;
        
    //     }
    //     else{
    //       this.cartservice.removefromcart(item);
    //     }
    //    });
    //  }
  
}
