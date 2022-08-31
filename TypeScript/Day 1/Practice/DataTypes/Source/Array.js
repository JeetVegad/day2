// Delcaring array 
var list = [1, 2, 3, 4];
// or
var list2 = ['hello', 'hii', 'hey'];
console.log(list);
console.log(list2);
// Multi Type Array
var val = [1, 'hello', 2, 3, 'hey', 4, 'hii'];
// or
var val2 = [1, 'hello', 2, 3, 'hey', 4, 'hii'];
console.log(val);
console.log(val2);
// Accessing Array Elements
for (var index in val) {
    console.log(val[index]);
}
for (var _i = 0, val2_1 = val2; _i < val2_1.length; _i++) {
    var index2 = val2_1[_i];
    console.log(index2);
}
