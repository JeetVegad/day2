var employe: [number, string, string, string, number][];

employe = [[1, 'Jeet', 'Vegad', '92 Bhavnagar gujarat', 20000],
[2, 'himanshu', 'jogani', '25 amreli gujarat', 20000],
[3, 'akash', 'gupta', '27 Ahmedabad gujarat', 20000],
[4, 'Hiren', 'Kuriya', '27 vadodara gujarat', 20000],
[55, 'Jeet', 'Raythatha', '28 Rajkot gujarat', 20000],
];

console.log(employe);

var index:number =1;

for (let i = 0; i < employe.length; i++) {

if (index == employe[i][0]) {
    // console.log(employe[i]);
}
}

employe.push([30, 'pushedElement', 'pushedElement', 'pushedElement', 20000]);
// console.log(employe);


employe.pop();
// console.log(employe);

var emp: [number, string, string, string, number][];
emp = [[20, 'suchit', 'sheth', '55 ahmedabad gjarat', 20000],
[21, 'John', 'doe', '66 bhavnagar gujarat', 20000],
[22, 'Virat', 'Kohli', '77 jamnagar gujarat', 20000],
[23, 'Jason', 'Roy', '88 gandhinagar gujarat', 20000],
[24, 'Hardik', 'Pandya', '89 ahmedbad gujarat', 20000],
];

var newdata = employe.concat(emp);
// console.log(newdata);


for (let i = 0; i < employe.length; i++) {
    console.log("emp id:", employe[i][0]);
    console.log("full name: ", employe[i][1] + ' ' + employe[i][2]);
    let address = employe[i][3].split(' ');
    console.log("Flat number:", address[0]);
    console.log("City :", address[1]);
    console.log("State:", address[2]);
    console.log('salary :', employe[i][4] - (0.12 * employe[i][4]));}