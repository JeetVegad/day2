"use strict";
// Generic Function
exports.__esModule = true;
exports.display = void 0;
function display(arg) {
    return arg;
}
exports.display = display;
var res1 = display("Heyyy!!");
var res2 = display(100);
console.log(res1);
console.log(res2);
// Generic Class
var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.setvalue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    student.prototype.display = function () {
        console.log("Id = ".concat(this.Id, " , Name = ").concat(this.Name));
    };
    return student;
}());
var st = new student();
st.setvalue(1, 'Jeet');
st.display();
var st2 = new student();
st2.setvalue('Jeet', 'Vegad');
st2.display();
;
function stddata(key, val) {
    console.log('ID = ' + key + ', \nName = ' + val);
}
var std3 = stddata;
std3(25, "Ishan Kishan");
