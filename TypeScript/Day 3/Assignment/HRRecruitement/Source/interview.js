"use strict";
exports.__esModule = true;
exports.interviewList = exports.Interviews = void 0;
var Applicant_1 = require("./Applicant");
var Interviews = /** @class */ (function () {
    function Interviews() {
    }
    Interviews.prototype.createInterview = function (input) {
        var isExist = Applicant_1.aplicantsList.filter(function (app, i, aplicantsList) { return app.id == input.applicantId; });
        if (isExist.length < 1) {
            console.log();
            console.log('Invalid Interview Id');
            return;
        }
        exports.interviewList.push(input);
    };
    Interviews.prototype.updateInterviewResult = function (id, result) {
        for (var key in exports.interviewList) {
            if (exports.interviewList[key].id == id) {
                exports.interviewList[key].result = result;
                return;
            }
        }
    };
    Interviews.prototype.viewAllInterviews = function () {
        console.log();
        console.log("Vacancies");
        exports.interviewList.forEach(function (interview) {
            console.log("ID: ".concat(interview.id, ", Applicant: ").concat(interview.applicantId, ", type: ").concat(interview.type, ", time: ").concat(interview.time, ", result: ").concat(interview.result));
        });
        console.log();
    };
    Interviews.prototype.viewInterview = function (id) {
        console.log(exports.interviewList);
        for (var key in exports.interviewList) {
            if (exports.interviewList[key].id == id) {
                var interview = exports.interviewList[key];
                console.log("ID: ".concat(interview.id, ", Applicant: ").concat(interview.applicantId, ", type: ").concat(interview.type, ", time: ").concat(interview.time, ", result: ").concat(interview.result));
                console.log();
                return;
            }
        }
        console.log("Invalid vacancy id:" + id);
        console.log();
    };
    return Interviews;
}());
exports.Interviews = Interviews;
exports.interviewList = [{ id: 1, applicantId: 3, type: 'mobile', time: '3.04pm', result: true }];
