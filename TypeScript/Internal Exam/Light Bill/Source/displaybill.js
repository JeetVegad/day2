"use strict";
exports.__esModule = true;
// import { bill } from "./bill";
var bill_1 = require("./bill");
var charge_1 = require("./charge");
var bil = new bill_1.newbill();
var newuser = {
    costumername: 'Akash Gupta', name: 'gh', mm: 3, yyyy: 2020, consumerID: 1, pincode: 364004
};
bil.cratebill(newuser);
var billid;
var billid2;
var per1 = new charge_1.amount1();
function display(noofUnit) {
    for (var key in bill_1.billlist) {
        var values = bill_1.billlist[key];
        // console.log(`${id.pincode}`)
        billid2 = "BillID is :".concat(values.mm, "/").concat(values.yyyy, "/").concat(values.consumerID, "/").concat(values.pincode);
        billid = "Here is the bill of ".concat(values.costumername, " , cusumerId is ").concat(values.consumerID, " , month is ").concat(values.mm, " , year is ").concat(values.yyyy, " and NoofConsumed unit is ").concat(noofUnit);
    }
    console.log(billid);
    console.log(billid2);
    console.log("Your Payeble Amount is : ".concat(per1.amount1(noofUnit)));
}
display(30);
//  display(50);
//  display(150);
//  display(250);
