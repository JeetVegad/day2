import { Vacancy,Vacancies} from "./Vacancy";
import { Apply } from "./Applicant";
import { Interviews} from "./interview";
import { HiredPersons } from "./HiredPerson";
var vac = new Vacancies();
vac.viewAllVacancies();
vac.viewVacancy(1);

var newVac: Vacancy = {
    id:2,
    departmentName:"NodeJs",
    designation:"Flutter Developer",
    vacancyNo: 2
}

vac.createVacancy(newVac);
vac.viewAllVacancies();


// Applicants

var app = new Apply();
app.viewAllAplicants();
app.viewAplicants(1);

app.createAplicants({
    id: 2,
    name: 'Akash Gupta',
    email: 'akash@gmail.com',
    appliedDate: '2022-02-01',
    vacancyId: 3,
})
app.viewAllAplicants();

//Interview
var interview = new Interviews();
interview.viewAllInterviews();
interview.viewInterview(1);

interview.createInterview({
    id: 2,
    applicantId: 1,
    type: 'web',
    time: '03.07pm',
    result: true,
})
interview.viewAllInterviews();
interview.updateInterviewResult(1,false);
interview.viewAllInterviews();

// Hired person
var Hired = new HiredPersons();
Hired.viewAllHiredPerson();
Hired.viewHiredPerson();

Hired.createHiredPerson({
    id: 2,
    applicantId: 1,
    type: 'web',
    time: '03.07pm',
    result: true,
})
Hired.viewAllHiredPerson();
Hired.viewHiredPerson();