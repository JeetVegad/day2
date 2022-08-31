"use strict";
exports.__esModule = true;
exports.empSalary = void 0;
var Salarys = /** @class */ (function () {
    function Salarys() {
    }
    Salarys.prototype.addEmployeeSalary = function (input) {
        exports.empSalary.push(input);
    };
    Salarys.prototype.viewAllSalary = function () {
        console.log();
        console.log("Employee Data");
        exports.empSalary.forEach(function (emp) {
            console.log("employeeid: ".concat(emp.employeeid, ", fieldMonth: ").concat(emp.fieldMonth, ", salary: ").concat(emp.salary));
        });
        console.log();
    };
    return Salarys;
}());
exports.empSalary = [{ fieldMonth: 'June', salary: 2020, employeeid: 0 }];
var sal = new Salarys();
sal.addEmployeeSalary({ fieldMonth: 'June', salary: 2020, employeeid: 1 });
sal.viewAllSalary();
