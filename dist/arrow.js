"use strict";
var current = function () {
    return 100;
};
var arrowFunction = function (hoisting, establish) { return 2 * hoisting * establish; };
console.log(arrowFunction(100, 20));
