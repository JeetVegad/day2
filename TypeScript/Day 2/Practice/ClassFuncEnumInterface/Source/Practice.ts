var emp : [ number,string][];
emp=[[1,"steeve"] ,[2,"jolly"],[3,"jeff"]];
console.log(emp[1]);

let empid : (string | number);
empid= 123456; //ok
empid = "hello";//ok
// empid = false;//Compiler Eror


function dis(val : number|string){
    if(typeof(val) == "number"){
        console.log("It's Number")
    }else if(typeof(val) == "string"){
        console.log("It's String")
    }
}

dis(123);
dis("jeet");