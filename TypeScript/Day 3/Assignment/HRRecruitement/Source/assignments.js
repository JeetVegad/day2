"use strict";
exports.__esModule = true;
var Vacancy_1 = require("./Vacancy");
var Applicant_1 = require("./Applicant");
var interview_1 = require("./interview");
var HiredPerson_1 = require("./HiredPerson");
var vac = new Vacancy_1.Vacancies();
vac.viewAllVacancies();
vac.viewVacancy(1);
var newVac = {
    id: 2,
    departmentName: "NodeJs",
    designation: "Flutter Developer",
    vacancyNo: 2
};
vac.createVacancy(newVac);
vac.viewAllVacancies();
// Applicants
var app = new Applicant_1.Apply();
app.viewAllAplicants();
app.viewAplicants(1);
app.createAplicants({
    id: 2,
    name: 'Akash Gupta',
    email: 'akash@gmail.com',
    appliedDate: '2022-02-01',
    vacancyId: 3
});
app.viewAllAplicants();
//Interview
var interview = new interview_1.Interviews();
interview.viewAllInterviews();
interview.viewInterview(1);
interview.createInterview({
    id: 2,
    applicantId: 1,
    type: 'web',
    time: '03.07pm',
    result: true
});
interview.viewAllInterviews();
interview.updateInterviewResult(1, false);
interview.viewAllInterviews();
// Hired person
var Hired = new HiredPerson_1.HiredPersons();
Hired.viewAllHiredPerson();
Hired.viewHiredPerson();
Hired.createHiredPerson({
    id: 2,
    applicantId: 1,
    type: 'web',
    time: '03.07pm',
    result: true
});
Hired.viewAllHiredPerson();
Hired.viewHiredPerson();
