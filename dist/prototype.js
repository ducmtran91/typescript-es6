"use strict";
// relate to OOP
/** Object Literal */
var personLiteral = {
    name: 'Davis',
    showName: function () {
        console.log(this.name);
    }
};
/** Object Constructor */
var personConstructor = new Object();
personConstructor.name = 'Davis';
personConstructor.showName = function () { };
/** Object Constructor Pattern */
function personConstructorPattern() {
    this.name = 'D';
    this.showName = function () { };
}
PersonPrototype.prototype.name = 'a';
PersonPrototype.prototype.showName = function () { };
/** Access one property or method */
// dot notation
console.log(PersonPrototype.name);
// bracket notation
console.log(PersonPrototype['showName']);
// Prototype la khuon hay cha cua 1 object
// ngoai type underfine thi cac loai type khac deu la object
// trong js viec ke thua thuc hien thong qua prototype
var str = 'abc';
String.prototype.duplicate = function () { return this + this; };
var person = {
    firstName: 'Hoang',
    lastName: 'Pham',
    showName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}; // object này có prototype là Object.prototype
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.showName = function () {
        console.log(this.firstName + ' ' + this.lastName);
    };
}
var otherPerson = new Person('Hoang', 'Pham'); // object này có prototype là Person.prototype
// Prototype mới: Person.prototype được tạo ra
// Person.prototype kế thừa Object.prototype
function Person() {
    this.firstName = 'Per';
    this.lastName = 'son';
    this.sayName = function () { return this.firstName + ' ' + this.lastName; };
}
// Viết một Constructor Function khác
function SuperMan(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// Ta muốn SuperMan sẽ kế thừa các thuộc tính của Person
// Sử dụng prototype để kế thừa
SuperMan.prototype = new Person();
// Tạo một object mới bằng Constructor Function 
var sm = new SuperMan('Hoang', 'Pham');
sm.sayName(); // Hoang Pham. Hàm này kế thừa từ prototype của Person
// Prototype dùng để làm gì?
// đó là do sự sida của JavaScript 
// Trong JavaScript không có khái niệm class, do vậy, để kế thừa các trường/hàm của một object, ta phải sử dụng prototype.
// prototype có phần giống class, được sử dụng để hiện thực việc kế thừa (interitance) trong JavaScript
