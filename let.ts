function greetPerson(name) {
    let greet;
    if(name==="Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there";
    }
    console.log(greet);
}

greetPerson("Chandler");

var a = 1;
let b = 2;
if(b > a) {
    let b = 20;
    var a = 10;
}
let b = 3; // đã khai báo rồi lên bị lỗi
console.log(a);
console.log("-------------");
console.log(b);