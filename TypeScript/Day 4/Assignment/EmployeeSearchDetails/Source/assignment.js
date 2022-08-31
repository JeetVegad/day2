var emp;
var dt1 = new Date("2016-01-01");
var dt2 = new Date("2017-01-01");
var dt3 = new Date("2020-01-01");
var dt4 = new Date("2021-01-01");
var dt5 = new Date("2022-01-01");
emp = [[20, 'Jason Roy', 'Bhavnagar', dt1],
    [21, 'John Doe', 'Rajkot', dt2],
    [22, 'Virat Kohli', 'Mumbai', dt3],
    [23, 'Rohit Sharma', 'Mumbai', dt4],
    [24, 'Ben Stokes', 'Ahmedabad', dt5]
];
for (var i = 0; i < emp.length; i++) {
    if (emp[i][0] == 21) {
        console.log(emp[i]);
    }
}
for (var i = 0; i < emp.length; i++) {
    var yr = emp[i][3].getFullYear();
    if (yr > 2020) {
        console.log("Employees who join After 2020 :", emp[i]);
    }
}
for (var i = 0; i < emp.length; i++) {
    var yr = emp[i][3].getFullYear();
    if (yr > 2020 && emp[i][2] == "Mumbai") {
        console.log("Employees who join After 2020 and live in mumbai:", emp[i]);
    }
}
