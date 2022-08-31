const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var fs = require('fs');
fs.writeFile('Calc.txt', 'Calc Data:', function (err) {
    if (err) throw err;
})
r1.question('Please enter the first number :', (num1) => {
    r1.question('Please enter the second number :', (num2) => {
        r1.question('PLease Enter Operator :', (opr) => {
            // console.log(num1,num2,opr);
            switch (opr) {
                case '+':
                    res = (+num1) + (+num2);
                    fs.writeFile('Calc.txt', `Result is ${res}`, function (err) {
                        if (err) throw err;
                    })
                    fs.readFile('Calc.txt', function (err, data) {
                        console.log(data.toString());
                    })
                    break;

                case '-':
                    res = (+num1) - (+num2);
                    fs.writeFile('Calc.txt', `Result is ${res}`, function (err) {
                        if (err) throw err;
                    })
                    fs.readFile('Calc.txt', function (err, data) {
                        console.log(data.toString());
                    })
                    break;

                case '*':
                    res = (+num1) * (+num2);
                    fs.writeFile('Calc.txt', `Result is ${res}`, function (err) {
                        if (err) throw err;
                    })
                    fs.readFile('Calc.txt', function (err, data) {
                        console.log(data.toString());
                    })
                    break;

                case '/':
                    res = (+num1) / (+num2);
                    fs.writeFile('Calc.txt', `Result is ${res}`, function (err) {
                        if (err) throw err;
                    })
                    fs.readFile('Calc.txt', function (err, data) {
                        console.log(data.toString());
                    })
                    break;

                default:
                    fs.writeFile('Calc.txt', `Invalid Operator`, function (err) {
                        if (err) throw err;
                    })
                    fs.readFile('Calc.txt', function (err, data) {
                        console.log(data.toString());
                    })
                    break;

            }
            r1.close();
        })
    });
});