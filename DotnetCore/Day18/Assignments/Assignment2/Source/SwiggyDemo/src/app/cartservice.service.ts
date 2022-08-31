import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }

  cartitemlist:any=[];

  getcartitems():Observable<any>{
    return this.cartitemlist;
  }

  removefromcart(item:any){
    this.cartitemlist.splice(this.cartitemlist.indexOf(item),1);
  }
}
