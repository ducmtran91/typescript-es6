var separate = ["conversely", "take in", "take out", "capability", "spread"];

let [conversely, takeIn, takeOut, capability, spread] = separate;
let [...separate1] = separate;
let [conversely1, ...separate2] = separate;
console.log(conversely);
console.log(takeIn);
console.log(takeOut);
console.log(spread);
console.log(capability);

console.log(separate1);
console.log(conversely1);
console.log(separate2);