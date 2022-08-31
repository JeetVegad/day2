"use strict";
exports.__esModule = true;
exports.vacancyList = exports.Vacancies = void 0;
var Vacancies = /** @class */ (function () {
    function Vacancies() {
    }
    Vacancies.prototype.createVacancy = function (input) {
        exports.vacancyList.push(input);
    };
    Vacancies.prototype.decreaseVacancyNo = function (id) {
        for (var key in exports.vacancyList) {
            if (exports.vacancyList[key].id == id) {
                exports.vacancyList[key].vacancyNo -= 1;
                return exports.vacancyList[key];
            }
        }
        return;
    };
    Vacancies.prototype.viewAllVacancies = function () {
        console.log();
        console.log("Vacancies");
        exports.vacancyList.forEach(function (vacancy) {
            console.log("ID: ".concat(vacancy.id, ", Department: ").concat(vacancy.departmentName, ", Designation: ").concat(vacancy.designation, ", No. of vacancy: ").concat(vacancy.vacancyNo));
        });
        console.log();
    };
    Vacancies.prototype.viewVacancy = function (id) {
        console.log(exports.vacancyList);
        for (var key in exports.vacancyList) {
            if (exports.vacancyList[key].id == id) {
                var vacancy = exports.vacancyList[key];
                console.log("ID: ".concat(vacancy.id, ", Department: ").concat(vacancy.departmentName, ", Designation: ").concat(vacancy.designation, ", No. of vacancy: ").concat(vacancy.vacancyNo));
                return;
            }
        }
        console.log("Invalid vacancy id:" + id);
        console.log();
    };
    return Vacancies;
}());
exports.Vacancies = Vacancies;
exports.vacancyList = [{ id: 1, departmentName: 'iT', designation: 'IOS dEVELOPER', vacancyNo: 3 }];
