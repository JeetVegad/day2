interface Iemp{
    empcode:number;
    name:string;
    getsal:(number)=>number;
}

class emp1 implements Iemp{
    empcode: number;
    name: string;

    constructor(code:number,name:string){
        this.empcode = code;
        this.name = name;
    }
    getsal(empcode: number) : number{
        return 20000;
    }
}
let employe = new emp1(1,"steeve");
console.log(employe);
console.log(employe.getsal(2));

// As a Type

interface keypair{
    key:number;
    val:string;
}

let kv : keypair = {key:1,val:"hello"};
console.log(kv);
// Type of Function
interface processor{
    (key1:number ,val1:string ):void;
};

function addpair(key1:number ,val1:string ):void{
    console.log(`addkeyvalue : key - ${key1} , value - ${val1}`);
}
   let kvp : processor = addpair;
   kvp(2,"john");

   // Extending the interface
   interface iperson{
       ne:string;
       gender:string;
   }

   interface iemployee extends iperson{
       empnumber:number;
   }

   let obj:iemployee = {
       empnumber:2,
       ne:"john",
       gender:"male"
   }

   console.log(obj);