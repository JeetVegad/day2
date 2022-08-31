export interface Salary {
    fieldMonth: string,
    salary: number,
    employeeid: number
}

class Salarys {

    addEmployeeSalary(input: Salary):void {
        empSalary.push(input); 
    }


    viewAllSalary() {
        console.log();
        console.log("Employee Data");
        empSalary.forEach(emp => {
            console.log(`employeeid: ${emp.employeeid}, fieldMonth: ${emp.fieldMonth}, salary: ${emp.salary}`); 
        })
        console.log(); 
    }
}

export var empSalary: Salary[] = [{fieldMonth: 'June',salary: 2020,employeeid: 0}];

var sal = new Salarys();
sal.addEmployeeSalary({fieldMonth: 'June',salary: 2020,employeeid: 1});
sal.viewAllSalary();