// Delcaring array 

var list : number[] = [1,2,3,4];
    // or
var list2 : Array<string> = ['hello','hii','hey'];

console.log(list);
console.log(list2);


// Multi Type Array

let val : (string | number)[] = [1,'hello',2,3,'hey',4,'hii'];
    // or
let val2: Array<string | number >= [1,'hello',2,3,'hey',4,'hii'];

console.log(val);
console.log(val2);

// Accessing Array Elements
for(var index in val){
        console.log(val[index]);
}


for(var index2 of val2){
        console.log(index2);
}
