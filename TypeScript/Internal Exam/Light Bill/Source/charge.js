"use strict";
exports.__esModule = true;
exports.amount1 = void 0;
var chargeperUnit;
var amount;
var amount1 = /** @class */ (function () {
    function amount1() {
    }
    amount1.prototype.amount1 = function (noofUnit) {
        if (noofUnit < 40) {
            chargeperUnit = 100;
            amount = chargeperUnit * noofUnit;
            console.log(amount);
            return amount;
        }
        if (noofUnit > 40 && noofUnit < 101) {
            var i = 40;
            amount = i * 100 + (noofUnit - i) * 150;
            console.log(amount);
            return amount;
        }
        if (noofUnit > 100 && noofUnit < 201) {
            var i = 11000;
            amount = i + (noofUnit - 100) * 170;
            console.log(amount);
            return amount;
        }
        if (noofUnit > 200) {
            var i = 28000;
            amount = i + (noofUnit - 200) * 200;
            // console.log(amount);
            return amount;
        }
    };
    return amount1;
}());
exports.amount1 = amount1;
// let per1 = new amount1();
// console.log(per1.amount1(30))
// console.log(per1.amount1(45))
// console.log(per1.amount1(200))
// console.log(per1.amount1(201))
