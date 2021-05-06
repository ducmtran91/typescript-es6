"use strict";
function greetPerson(name) {
    var greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("Chandler");
var a = 1;
var b = 2;
if (b > a) {
    var b_1 = 20;
    var a = 10;
}
var b = 3; // đã khai báo rồi lên bị lỗi
console.log(a);
console.log("-------------");
console.log(b);
