"use strict";
exports.__esModule = true;
exports.Emp = void 0;
var Emp = /** @class */ (function () {
    function Emp(code, name) {
        this.empcode = code;
        this.empname = name;
    }
    Emp.prototype.getsal = function () {
        return 10000;
    };
    return Emp;
}());
exports.Emp = Emp;
// let employee1 = new Emp(12,"Jeet vegad");
// console.log(employee1);
// console.log(employee1.getsal())
