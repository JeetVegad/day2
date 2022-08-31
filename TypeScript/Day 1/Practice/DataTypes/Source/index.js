// NUMBERS
var first = 42;
var second = 0X37CF;
var third = 255;
var fourth = 15;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(second + third);
// STRING
var fname = "Jeet";
var lname = "vegad";
// Template String 
var fullname = "My name is ".concat(fname, " ").concat(lname);
console.log(fullname);
// Concat
var str1 = new String('Hello here is ');
var str2 = new String('Jeet ');
var str3 = new String('Vegad');
var str = str2.concat(str3.toString());
str = str1.concat(str.toString());
console.log("Concatenated String : " + str);
// ANY
var i = 'Hello';
var v = 57;
var j = true;
console.log(i);
console.log(v);
console.log(j);
function dt(x, y) {
    return x + y;
}
var result1 = dt('hello', 'world');
var result2 = dt(4, 5);
console.log(result1);
console.log(result2);
var employee;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employee);
