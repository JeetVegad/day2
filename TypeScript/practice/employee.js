"use strict";
exports.__esModule = true;
exports.empData = exports.Employees = exports.gender = void 0;
var id = 0;
var gender;
(function (gender) {
    gender[gender["Male"] = 0] = "Male";
    gender[gender["Female"] = 1] = "Female";
})(gender = exports.gender || (exports.gender = {}));
var Employees = /** @class */ (function () {
    function Employees() {
    }
    Employees.prototype.createEmployee = function (input) {
        id += 1;
        input.empId = id;
        exports.empData.push(input);
    };
    Employees.prototype.EmployeecodeFormate = function () {
        exports.empData.forEach(function (emp) {
            var year = emp.doj.getFullYear();
            var lname = emp.lastName.split('');
            var name = lname[0];
            var full = emp.empId + ' ' + year + ' ' + emp.firstName + ' ' + name;
            console.log(full);
        });
    };
    Employees.prototype.filterEmployeeNameAndDoj = function () {
        var isExist = exports.empData.filter(function (emp, i, empData) { return emp.firstName.length >= 3 && emp.lastName.length >= 3 && emp.doj.getFullYear() >= 2005; });
        console.log(isExist);
    };
    Employees.prototype.filterEmployeeMonth = function () {
        var isExist = exports.empData.filter(function (emp, i, empData) { return emp.doj.getMonth() == 4; });
        console.log(isExist);
    };
    Employees.prototype.viewAllEmployee = function () {
        console.log();
        console.log("Employee Data");
        exports.empData.forEach(function (emp) {
            console.log("ID: ".concat(emp.empId, ", firstName: ").concat(emp.firstName, ", lastName: ").concat(emp.lastName, ", address: ").concat(emp.address, ", doj: ").concat(emp.doj, ",email: ").concat(emp.email, ",gender: ").concat(emp.gender));
        });
        console.log();
    };
    return Employees;
}());
exports.Employees = Employees;
exports.empData = [{ empId: 0, firstName: 'Himanshu', lastName: 'Jogani', address: 'jesingpara', doj: new Date('2005-03-04'), email: 'hemu@gmail.com', gender: gender.Male }];
var data = new Employees();
data.createEmployee({ empId: 0, firstName: 'Nidhi', lastName: 'Gokhani', address: 'jesingpara', doj: new Date('2006-06-03'), email: 'hemu@gmail.com', gender: gender.Female });
data.viewAllEmployee();
data.filterEmployeeNameAndDoj();
data.EmployeecodeFormate();
