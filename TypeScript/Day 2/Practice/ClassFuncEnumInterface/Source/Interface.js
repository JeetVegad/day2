var emp1 = /** @class */ (function () {
    function emp1(code, name) {
        this.empcode = code;
        this.name = name;
    }
    emp1.prototype.getsal = function (empcode) {
        return 20000;
    };
    return emp1;
}());
var employe = new emp1(1, "steeve");
console.log(employe);
console.log(employe.getsal(2));
var kv = { key: 1, val: "hello" };
console.log(kv);
;
function addpair(key1, val1) {
    console.log("addkeyvalue : key - ".concat(key1, " , value - ").concat(val1));
}
var kvp = addpair;
kvp(2, "john");
var obj = {
    empnumber: 2,
    ne: "john",
    gender: "male"
};
console.log(obj);
