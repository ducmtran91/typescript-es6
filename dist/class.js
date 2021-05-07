"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = 'Davis';
        console.log(this.name + 'Person');
    }
    Person.run = function () {
        console.log("Person running");
    };
    return Person;
}());
var p = new Person(name);
Person.run();
var InheritAbstruct = /** @class */ (function (_super) {
    __extends(InheritAbstruct, _super);
    function InheritAbstruct(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + ' InheritAbstruct');
        return _this;
    }
    InheritAbstruct.run = function () {
        return _super.run.call(this);
    };
    return InheritAbstruct;
}(Person));
var abc = new InheritAbstruct("Davis");
