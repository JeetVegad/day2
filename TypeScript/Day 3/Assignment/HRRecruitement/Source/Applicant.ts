
import { Person } from "./Person";
import {vacancyList} from "./Vacancy";

export interface Applicant extends Person{
    appliedDate: string;
    vacancyId: number;
}

export class Apply { 
    

    createAplicants(input: Applicant):void {
        var isExist = vacancyList.filter((vacancy, i, vacancyList) => {return vacancy.id == input.vacancyId});
        if(isExist.length < 1){

            aplicantsList.push(input);
           
        }
        console.log();
        console.log('Invalid vacancy Id');
        return;
        
    }

    viewAllAplicants() {
        console.log();
        console.log("Vacancies");
        aplicantsList.forEach(vacancy => {
            console.log(`ID: ${vacancy.id}, name: ${vacancy.name}, email: ${vacancy.email}, appliedDate: ${vacancy.appliedDate}, vacancyId: ${vacancy.vacancyId}`); 
        })
        console.log(); 
    }

    viewAplicants(id:number){
        console.log(aplicantsList);
        for(const key in aplicantsList){
            if(aplicantsList[key].id == id){
                let vacancy = aplicantsList[key];
                console.log(`ID: ${vacancy.id}, name: ${vacancy.name}, email: ${vacancy.email}, appliedDate: ${vacancy.appliedDate}, vacancyId: ${vacancy.vacancyId}`); 
                console.log();
                return;
            }
        }
        console.log("Invalid vacancy id:" + id);
        console.log();
    }
    

}


export var aplicantsList:Applicant[] = [{id: 1,name: 'Himanshu Jogani',email: 'hemu@gmail.com',appliedDate: '2012-04-02',vacancyId: 2}];

