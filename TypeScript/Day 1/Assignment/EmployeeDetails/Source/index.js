var employee;
employee = [[1, 'akash', 'gupta', '21 kalol gujarat', 20000],
    [2, 'himanshu', 'jogani', '25 amreli gujarat', 20000],
    [3, 'nidhi', 'gokani', '26 jamnagar gujarat', 20000],
    [4, 'arpit', 'agarval', '27 vadodara gujarat', 20000],
    [55, 'padmanvan', 'patel', '28 ahmedbad gujarat', 20000],
];
console.log(employee);
var index = 1;
for (var i = 0; i < employee.length; i++) {
    if (index == employee[i][0]) {
        // console.log(employee[i]);
    }
}
employee.push([30, 'pushedElement', 'pushedElement', 'pushedElement', 20000]);
// console.log(employee);
employee.pop();
// console.log(employee);
var emp;
emp = [[20, 'roahn', 'patel', '55 ahmedabad gjarat', 20000],
    [21, 'jeet', 'vegad', '66 bhavnagar gujarat', 20000],
    [22, 'raj', 'patel', '77 jamnagar gujarat', 20000],
    [23, 'roy', 'agarval', '88 gandhinagar gujarat', 20000],
    [24, 'dhruv', 'patel', '89 ahmedbad gujarat', 20000],
];
var newdata = employee.concat(emp);
// console.log(newdata);
for (var i = 0; i < employee.length; i++) {
    console.log("emp id:", employee[i][0]);
    console.log("full name: ", employee[i][1] + ' ' + employee[i][2]);
    var address = employee[i][3].split(' ');
    console.log("Flat number:", address[0]);
    console.log("City :", address[1]);
    console.log("State:", address[2]);
    console.log('salary :', employee[i][4] - (0.12 * employee[i][4]));
}
