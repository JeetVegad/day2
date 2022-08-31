import { Interview,interviewList,Interviews } from "./interview";


export interface HiredPerson extends Interview{
   
}

export class HiredPersons {
    createHiredPerson(input: HiredPerson):void {
        HiredPersonList.push(input);
    }

    viewAllHiredPerson() {
        console.log();
        console.log("InterView");
        HiredPersonList.forEach(vacancy => {
            console.log(`ID: ${vacancy.id}, applicationId: ${vacancy.applicantId}, type: ${vacancy.type}, time: ${vacancy.time}`); 
        })
        console.log(); 
    }

    viewHiredPerson(){
        console.log(HiredPersonList);
        for(const key in interviewList){
            if(interviewList[key].result == true){
                let vacancy = interviewList[key];
                console.log(vacancy);
                console.log(`ID: ${vacancy.id}, applicationId: ${vacancy.applicantId}, type: ${vacancy.type}, time: ${vacancy.time}`);
                HiredPersonList.push(interviewList[key]);
                console.log();
            }
        }
        console.log();
    }
}

export var HiredPersonList:HiredPerson[] = [];

