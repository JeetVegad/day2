    var chargeperUnit:number;
    var amount:number; 
    export class amount1{
        amount1(noofUnit:number):number{
            if(noofUnit<40){
                chargeperUnit = 100;
                amount = chargeperUnit * noofUnit;
                console.log(amount);
                return amount;
            }
            if(noofUnit>40 && noofUnit <101){
                let i= 40;
                amount = i*100 + (noofUnit-i)*150;
                console.log(amount);
                return amount;
            }
            if(noofUnit>100 && noofUnit <201){
                let i= 11000;
                amount = i + (noofUnit-100)*170;
                console.log(amount);
                return amount;
            }
            if(noofUnit>200){
                let i= 28000;
                amount = i + (noofUnit-200)*200;
                // console.log(amount);
                return amount;
            }
        }
        
        // amount2(noofUnit):number{
        //     if(noofUnit>40 && noofUnit <101){
        //         let i= 40;
        //         amount = i*100 + (noofUnit-i)*150;
        //         console.log(amount);
        //         return amount;
        //     }
        // }
    }

        // let per1 = new amount1();
        // console.log(per1.amount1(30))
        // console.log(per1.amount1(45))
        // console.log(per1.amount1(200))
        // console.log(per1.amount1(201))