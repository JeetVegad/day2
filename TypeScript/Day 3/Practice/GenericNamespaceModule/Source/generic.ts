// Generic Function

function display<T>(arg : T):T{
    return arg;
}

let res1 = display<string>("Heyyy!!")
let res2 = display<number>(100);
console.log(res1);
console.log(res2);

// Generic Class

class student<T , U>{
    private Id : T;
    private Name : U;
    setvalue(id:T , name:U):void{
        this.Id = id;
        this.Name = name;
    }
    display():void{
        console.log(`Id = ${this.Id} , Name = ${this.Name}`)
    }
}

let st = new student<number , string>();
st.setvalue(1 , 'Jeet');
st.display();
let st2 = new student<string , string>();
st2.setvalue('Jeet' , 'Vegad');
st2.display();

// Generic Interface as Function Type

interface std <I ,J>{
    (key : I , val : J):void;
};

function stddata(key:number , val:string):void{
    console.log('ID = '+ key + ', \nName = ' + val)
}

let std3:std<number,string>=stddata;
std3(25,"Ishan Kishan");