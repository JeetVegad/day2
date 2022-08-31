"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var salary_1 = require("./salary");
var EmployessDetail = /** @class */ (function () {
    function EmployessDetail() {
    }
    EmployessDetail.prototype.viewFullDetail = function () {
        for (var i = 0; i < employee_1.empData.length; i++) {
            if (employee_1.empData[i].empId == salary_1.empSalary[i].employeeid) {
                if (employee_1.empData[i].gender == employee_1.gender.Male) {
                    console.log("ID: ".concat(employee_1.empData[i].empId, ", fullName: Mr ").concat(employee_1.empData[i].firstName, " ").concat(employee_1.empData[i].lastName, ", address: ").concat(employee_1.empData[i].address, ", doj: ").concat(employee_1.empData[i].doj, ",email: ").concat(employee_1.empData[i].email, ",gender:  ").concat(employee_1.empData[i].gender, ",salary: ").concat(salary_1.empSalary[i].salary, ",fieldMonth: ").concat(salary_1.empSalary[i].fieldMonth));
                }
                else {
                    console.log("ID: ".concat(employee_1.empData[i].empId, ", firstName: Ms ").concat(employee_1.empData[i].firstName, " ").concat(employee_1.empData[i].lastName, ", address: ").concat(employee_1.empData[i].address, ", doj: ").concat(employee_1.empData[i].doj, ",email: ").concat(employee_1.empData[i].email, ",gender:  ").concat(employee_1.empData[i].gender, ",salary: ").concat(salary_1.empSalary[i].salary, ",fieldMonth: ").concat(salary_1.empSalary[i].fieldMonth));
                }
            }
        }
    };
    //Average Salary
    EmployessDetail.prototype.averageOfSalary = function () {
        var sum = 0;
        for (var i = 0; i < salary_1.empSalary.length; i++) {
            sum += salary_1.empSalary[i].salary;
        }
        var avg = sum / (salary_1.empSalary.length + 1);
        console.log(avg);
    };
    return EmployessDetail;
}());
var detail = new EmployessDetail();
detail.viewFullDetail();
detail.averageOfSalary();
