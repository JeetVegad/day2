var calculate = require('./mobike');

const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("Enter Customer Name :",(name)=>{
    r1.question("Enter bike Number :",(bike)=>{
        r1.question("Enter Phone no :",(ph)=>{
            r1.question("Enter Days :",(day)=>{
                console.log("Customer Name is :"+name);
                console.log("Bike number is :"+bike);
                console.log("Phone number is :"+ph);
                calculate.compute.cal(day);
                r1.close(); 
            })
        })

    })
}
)