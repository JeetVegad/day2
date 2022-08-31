"use strict";
exports.__esModule = true;
exports.billlist = exports.newbill = void 0;
var newbill = /** @class */ (function () {
    function newbill() {
    }
    newbill.prototype.cratebill = function (input) {
        exports.billlist.push(input);
    };
    return newbill;
}());
exports.newbill = newbill;
exports.billlist = [{ costumername: 'Jeet Vegad', name: 'gh', mm: 3, yyyy: 2020, consumerID: 1, pincode: 364004 }];
