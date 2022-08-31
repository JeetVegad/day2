export class Emp{
    empcode:number;
    empname:string;

    constructor(code:number,name:string){
        this.empcode = code;
        this.empname = name;
    }
    getsal():number{
        return 10000;
    }
}

// let employee1 = new Emp(12,"Jeet vegad");
// console.log(employee1);
// console.log(employee1.getsal())