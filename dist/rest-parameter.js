"use strict";
function displayColors() {
    var restParameter = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        restParameter[_i] = arguments[_i];
    }
    for (var i_1 in restParameter) {
        console.log(restParameter[i_1]);
    }
}
displayColors("Immediately");
displayColors("Immediately", "Invoke");
displayColors("Imvoke", "establish", "hoisting");
