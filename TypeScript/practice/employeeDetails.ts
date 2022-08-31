import { empData, Employee, gender } from "./employee";
import { empSalary, Salary } from "./salary";


class EmployessDetail {
    viewFullDetail(){
       for(let i=0;i<empData.length;i++){
            if(empData[i].empId == empSalary[i].employeeid){
                   if(empData[i].gender == gender.Male){
                    console.log(`ID: ${empData[i].empId}, fullName: Mr ${empData[i].firstName} ${empData[i].lastName}, address: ${empData[i].address}, doj: ${empData[i].doj},email: ${empData[i].email},gender:  ${empData[i].gender},salary: ${empSalary[i].salary},fieldMonth: ${empSalary[i].fieldMonth}`); 
                   } else {
                    console.log(`ID: ${empData[i].empId}, firstName: Ms ${empData[i].firstName} ${empData[i].lastName}, address: ${empData[i].address}, doj: ${empData[i].doj},email: ${empData[i].email},gender:  ${empData[i].gender},salary: ${empSalary[i].salary},fieldMonth: ${empSalary[i].fieldMonth}`); 
                   }
            }
       }
    }

    //Average Salary
    averageOfSalary(){
        let sum = 0;
        for(let i=0;i<empSalary.length;i++){
            sum += empSalary[i].salary;

        }
        let avg = sum / (empSalary.length + 1); 
        console.log(avg);
        
    }
}



var detail = new EmployessDetail();
detail.viewFullDetail();
detail.averageOfSalary();