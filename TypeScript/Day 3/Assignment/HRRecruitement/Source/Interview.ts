import { aplicantsList } from "./Applicant";

export interface Interview  {
    id: number,
    applicantId: number,
    type: string,
    time: string,
    result?: boolean,
}

export class Interviews {
    

    createInterview(input: Interview):void {
        var isExist = aplicantsList.filter((app, i, aplicantsList) => {return app.id == input.applicantId});
        if(isExist.length < 1){
            console.log();
            console.log('Invalid Interview Id');
            return;
        }
        interviewList.push(input);
    }

    updateInterviewResult(id: number,result: boolean){
        for(const key in interviewList){
            if(interviewList[key].id == id){
                interviewList[key].result = result;
                return;
            }
        }
    }

    viewAllInterviews() {
        console.log();
        console.log("Vacancies");
        interviewList.forEach(interview => {
            console.log(`ID: ${interview.id}, Applicant: ${interview.applicantId}, type: ${interview.type}, time: ${interview.time}, result: ${interview.result}`); 
        })
        console.log(); 
    }

    viewInterview(id:number){
        console.log(interviewList);
        for(const key in interviewList){
            if(interviewList[key].id == id){
                let interview = interviewList[key];
                console.log(`ID: ${interview.id}, Applicant: ${interview.applicantId}, type: ${interview.type}, time: ${interview.time}, result: ${interview.result}`);  
                console.log();
                return;
            }
        }
        console.log("Invalid vacancy id:" + id);
        console.log();
    }
    
}


export var interviewList:Interview[] = [{id: 1,applicantId: 3,type: 'mobile',time: '3.04pm',result: true}];