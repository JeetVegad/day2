var compute = {
    cal:function(NoOfDays){
        if(NoOfDays<=5){
            charge = NoOfDays*500;
        }
        else if(NoOfDays>10){
            charge = 4500 + (NoOfDays-10)*200;
        }else if(5<NoOfDays<=10){
            charge = 2500 + (NoOfDays-5)*400;
        }
        console.log(`Charge for ${NoOfDays} Days is : ${charge}`);
    }
}
module.exports.compute = compute;