"use strict";
exports.__esModule = true;
exports.aplicantsList = exports.Apply = void 0;
var Vacancy_1 = require("./Vacancy");
var Apply = /** @class */ (function () {
    function Apply() {
    }
    Apply.prototype.createAplicants = function (input) {
        var isExist = Vacancy_1.vacancyList.filter(function (vacancy, i, vacancyList) { return vacancy.id == input.vacancyId; });
        if (isExist.length < 1) {
            exports.aplicantsList.push(input);
        }
        console.log();
        console.log('Invalid vacancy Id');
        return;
    };
    Apply.prototype.viewAllAplicants = function () {
        console.log();
        console.log("Vacancies");
        exports.aplicantsList.forEach(function (vacancy) {
            console.log("ID: ".concat(vacancy.id, ", name: ").concat(vacancy.name, ", email: ").concat(vacancy.email, ", appliedDate: ").concat(vacancy.appliedDate, ", vacancyId: ").concat(vacancy.vacancyId));
        });
        console.log();
    };
    Apply.prototype.viewAplicants = function (id) {
        console.log(exports.aplicantsList);
        for (var key in exports.aplicantsList) {
            if (exports.aplicantsList[key].id == id) {
                var vacancy = exports.aplicantsList[key];
                console.log("ID: ".concat(vacancy.id, ", name: ").concat(vacancy.name, ", email: ").concat(vacancy.email, ", appliedDate: ").concat(vacancy.appliedDate, ", vacancyId: ").concat(vacancy.vacancyId));
                console.log();
                return;
            }
        }
        console.log("Invalid vacancy id:" + id);
        console.log();
    };
    return Apply;
}());
exports.Apply = Apply;
exports.aplicantsList = [{ id: 1, name: 'Himanshu Jogani', email: 'hemu@gmail.com', appliedDate: '2012-04-02', vacancyId: 2 }];
