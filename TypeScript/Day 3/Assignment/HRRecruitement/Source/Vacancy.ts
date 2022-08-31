export interface Vacancy{
    id: number;
    departmentName: string;
    designation: string;
    vacancyNo: number;
}

export class Vacancies {
    

    createVacancy(input: Vacancy):void {
        vacancyList.push(input);
    }

    decreaseVacancyNo(id: number): Vacancy {
        for(const key in vacancyList){
            if(vacancyList[key].id == id){
                  vacancyList[key].vacancyNo -= 1;
                  return vacancyList[key];
            }
        }
        return;
    }

    viewAllVacancies() {
        console.log();
        console.log("Vacancies");
        vacancyList.forEach(vacancy => {
            console.log(`ID: ${vacancy.id}, Department: ${vacancy.departmentName}, Designation: ${vacancy.designation}, No. of vacancy: ${vacancy.vacancyNo}`); 
        })
        console.log();
    }

    viewVacancy(id:number){
        console.log(vacancyList);
        for(const key in vacancyList){
            if(vacancyList[key].id == id){
                let vacancy = vacancyList[key];
                console.log(`ID: ${vacancy.id}, Department: ${vacancy.departmentName}, Designation: ${vacancy.designation}, No. of vacancy: ${vacancy.vacancyNo}`);
              
                return;
            }
        }
        console.log("Invalid vacancy id:" + id);
        console.log();
    }
    

}


export var vacancyList:Vacancy[] = [{id: 1,departmentName: 'iT',designation: 'IOS dEVELOPER',vacancyNo: 3}];