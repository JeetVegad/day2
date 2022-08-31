// NUMBERS
let first:number = 42;
let second:number = 0X37CF;
let third:number = 0o377;  
let fourth:number = 0b01111;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

console.log(second + third);

// STRING

let fname:string = "Jeet";
let lname : string= "vegad";

// Template String 

let fullname:string = `My name is ${fname} ${lname}`
console.log(fullname);

// Concat
var str1 = new String('Hello here is '); 
var str2 = new String('Jeet '); 
var str3 = new String('Vegad'); 

var str = str2.concat(str3.toString())
str = str1.concat(str.toString())
console.log("Concatenated String : " + str);


// ANY

let i:any = 'Hello';
let v:any = 57;
let j:any = true;

console.log(i);
console.log(v);
console.log(j);

function dt(x:any,y:any){
    return x + y;
}

let result1 = dt('hello','world');
let result2 = dt(4,5);

console.log(result1);
console.log(result2);
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);