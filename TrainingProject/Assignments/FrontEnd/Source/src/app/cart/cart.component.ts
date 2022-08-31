import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { FoodItem } from '../Model/FoodItem';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private activeroute:ActivatedRoute,private service:RepositoryService, public cartservice:CartserviceService,private router:Router) { }
  Id: number = 0;
  @Input() cartitems:any=[];
  @Input() foodlist:any=[];

  ngOnInit(): void {
    
  }

  oncheck(){
    localStorage.setItem('cartitems', JSON.stringify(this.cartitems));
    this.router.navigate(['/checkout'])
  }
   addButton(item:any){
    // this.cartitems.map((a:any, index:any)=>{
        var found = this.cartitems.find((i:any)=>i.fooditemid==item.fooditemid);
        var found2 = this.foodlist.find((i:any)=>i.fooditemid==found.fooditemid);
        
          found.quantity = found.quantity+1;
          found.price = found.price+found2.price;
        
    //   if(a.fooditemid===item.fooditemid){
        // this.food = this.foodlist.find((i:any)=>i.fooditemid==item.fooditemid);
        //alert("item already available in Cart")
        
        // a.price =a.price+ a.price;
    //   }
    // });
    }
    get getSubtotal() {
      return  this.cartitems.reduce((sum:any,current:any)=> sum + current.price,0);
    }
    removeButton(item:any){
      var found = this.cartitems.find((i:any)=>i.fooditemid==item.fooditemid);
      var found2 = this.foodlist.find((i:any)=>i.fooditemid==found.fooditemid);
      if(found.quantity >1){
        found.quantity = found.quantity-1;
        found.price = found.price-found2.price;
      }else{
        this.cartservice.removefromcart(item);
      }
     
        } 
      }
