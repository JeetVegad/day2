import { consumer } from "./consumer";
export interface bill extends consumer{
    mm:number;
    yyyy:number;
    costumername:string;
    
}
export class newbill{
    cratebill(input:bill ):void {
        billlist.push(input);
    }
}


export var billlist:bill[] = [{costumername:'Jeet Vegad' , name:'gh', mm:3 , yyyy :2020 , consumerID:1,pincode:364004}];