// import { bill } from "./bill";
import { newbill, billlist, bill } from "./bill";
import { amount1 } from "./charge";
import { consumer } from "./consumer";
var bil = new newbill();
var newuser:bill={
    costumername:'Akash Gupta' , name:'gh', mm:3 , yyyy :2020 , consumerID:1,pincode:364004
}
bil.cratebill(newuser);
var billid:string;
var billid2:string;

 let per1 = new amount1();
 function display(noofUnit:number){
    
for(const key in billlist){
    let values = billlist[key];
    // console.log(`${id.pincode}`)
    billid2 = `BillID is :${values.mm}/${values.yyyy}/${values.consumerID}/${values.pincode}`
    billid = `Here is the bill of ${values.costumername} , cusumerId is ${values.consumerID} , month is ${values.mm} , year is ${values.yyyy} and NoofConsumed unit is ${noofUnit}`;
}

console.log(billid);
console.log(billid2);
console.log(`Your Payeble Amount is : ${per1.amount1(noofUnit)}`)

 }
 display(30);
//  display(50);
//  display(150);
//  display(250);