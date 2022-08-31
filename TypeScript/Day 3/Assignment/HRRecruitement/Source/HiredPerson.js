"use strict";
exports.__esModule = true;
exports.HiredPersonList = exports.HiredPersons = void 0;
var interview_1 = require("./interview");
var HiredPersons = /** @class */ (function () {
    function HiredPersons() {
    }
    HiredPersons.prototype.createHiredPerson = function (input) {
        exports.HiredPersonList.push(input);
    };
    HiredPersons.prototype.viewAllHiredPerson = function () {
        console.log();
        console.log("InterView");
        exports.HiredPersonList.forEach(function (vacancy) {
            console.log("ID: ".concat(vacancy.id, ", applicationId: ").concat(vacancy.applicantId, ", type: ").concat(vacancy.type, ", time: ").concat(vacancy.time));
        });
        console.log();
    };
    HiredPersons.prototype.viewHiredPerson = function () {
        console.log(exports.HiredPersonList);
        for (var key in interview_1.interviewList) {
            if (interview_1.interviewList[key].result == true) {
                var vacancy = interview_1.interviewList[key];
                console.log(vacancy);
                console.log("ID: ".concat(vacancy.id, ", applicationId: ").concat(vacancy.applicantId, ", type: ").concat(vacancy.type, ", time: ").concat(vacancy.time));
                exports.HiredPersonList.push(interview_1.interviewList[key]);
                console.log();
            }
        }
        console.log();
    };
    return HiredPersons;
}());
exports.HiredPersons = HiredPersons;
exports.HiredPersonList = [{ id: 12, applicantId: 2, type: 'ff', time: '12' }];
