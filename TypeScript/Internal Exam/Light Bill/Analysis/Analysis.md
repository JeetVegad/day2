1. Create one interface consumer with consumerID , name , pincode.
2. Export this interface.
3. create charge.ts for computing the payeble amount.
4. create class amount1 and export it.
5. create one method and pass the parameter noofunits.
6. make diffrent if statements for defferebt amount of units consumed by a user.
7. for noofunit < 40;
-  if(noofUnit<40){
            chargeperUnit = 100;
            amount = chargeperUnit * noofUnit;
            console.log(amount);
            return amount;
        }

8. for noofunit 41 - 100 ;
-  if(noofUnit>40 && noofUnit <101){
            let i= 40;
            amount = i*100 + (noofUnit-i)*150;
            console.log(amount);
            return amount;
        }

9. for noofunit 101 - 200 ;
-  if(noofUnit>100 && noofUnit <201){
            let i= 11000;
            amount = i + (noofUnit-100)*170;
            console.log(amount);
            return amount;
        }  

10. for noofunit > 200 ;
- if(noofUnit>200){
            let i= 28000;
            amount = i + (noofUnit-200)*200;
            // console.log(amount);
            return amount;
        }

11. create bill.ts for user information.
12. import consumer interface.
13. create interface bill and extends the consumer.
14. add mm for month ,yyyy for year and costumername.
15. export interface bill.
16. create class newbill.
- export class newbill{
    cratebill(input:bill ):void {
        billlist.push(input);
    }
}

17. create one billlist of type bill for storing user details.
18. export this list.
- export var billlist:bill[] = [{costumername:'Jeet Vegad' , name:'gh', mm:3 , yyyy :2020 , consumerID:1,pincode:364004}];

19. create displaybills.ts for display bill.
20. import newbill,billlist,bill from bill.ts
- import { newbill, billlist, bill } from "./bill";

21. import amount1 from charge.ts
- import { amount1 } from "./charge";

22. create one new user of type bill.
23. push that new user int0 billist.
-   var bil = new newbill();
    var newuser:bill={
        costumername:'Akash Gupta' , name:'gh', mm:3 , yyyy :2020 , consumerID:1,pincode:364004
    }
    bil.cratebill(newuser);

24. create one object of class amount1()
25. create a function display.
 - let per1 = new amount1();
 function display(noofUnit:number){
    
for(const key in billlist){
    let values = billlist[key];
    billid2 = `BillID is :${values.mm}/${values.yyyy}/${values.consumerID}/${values.pincode}`
    billid = `Here is the bill of ${values.costumername} , cusumerId is ${values.consumerID} , month is ${values.mm} , year is ${values.yyyy} and NoofConsumed unit is ${noofUnit}`;
}
     
console.log(billid);
console.log(billid2);
console.log(`Your Payeble Amount is : ${per1.amount1(noofUnit)}`)

 }
 26. Display the billid,user detail and payeble amount .