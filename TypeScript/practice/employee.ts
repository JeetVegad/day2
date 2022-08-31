
var id: number = 0;

export enum gender {
    Male,
    Female
}

export interface Employee {
    empId: number,
    firstName: string,
    lastName: string,
    address: string,
    doj: Date,
    email: string,
    gender: gender
}

export class Employees {

    createEmployee(input: Employee):void {
        id += 1;
        input.empId = id;
        empData.push(input);
    }
   
    EmployeecodeFormate(){
        empData.forEach(emp => {
            let year = emp.doj.getFullYear();
            let lname = emp.lastName.split('');
            let name = lname[0];
            let full  = emp.empId + ' ' + year + ' ' + emp.firstName + ' ' + name;
            console.log(full); 
        })

    }
    

    filterEmployeeNameAndDoj() {
        var isExist = empData.filter((emp, i, empData) => {return emp.firstName.length >= 3 && emp.lastName.length >=3 && emp.doj.getFullYear() >= 2005});
        console.log(isExist);
    }


    filterEmployeeMonth() {
        var isExist = empData.filter((emp, i, empData) => {return emp.doj.getMonth() == 4});
        console.log(isExist);
    }


    viewAllEmployee() {
        console.log();
        console.log("Employee Data");
        empData.forEach(emp => {
            console.log(`ID: ${emp.empId}, firstName: ${emp.firstName}, lastName: ${emp.lastName}, address: ${emp.address}, doj: ${emp.doj},email: ${emp.email},gender: ${emp.gender}`); 
        })
        console.log(); 
    }

}




export var empData: Employee[] = [{empId: 0,firstName: 'Himanshu',lastName: 'Jogani',address: 'jesingpara',doj: new Date('2005-03-04'),email: 'hemu@gmail.com',gender: gender.Male}];

var data = new Employees()
data.createEmployee({empId: 0,firstName: 'Nidhi',lastName: 'Gokhani',address: 'jesingpara',doj: new Date('2006-06-03'),email: 'hemu@gmail.com',gender: gender.Female});
data.viewAllEmployee();
data.filterEmployeeNameAndDoj();
data.EmployeecodeFormate();