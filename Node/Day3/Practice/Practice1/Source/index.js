var greet = require('./hello');
var rec = require('./Rectangle');
console.log(greet);
const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("Enter Hieght :",(hieght)=>{
    r1.question("Enter Width :",(width)=>{
        rec.area(hieght,width);
        rec.peri(hieght,width);
        r1.close();
    }
    )
})