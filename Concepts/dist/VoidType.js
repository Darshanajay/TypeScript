"use strict";
console.log("first");
let y;
y = undefined;
// strictNullCheck is set to false in tsconfig.json: then void mein assign null;
y = null;
//void simple no Data
function myFunc(a, b) {
    console.log("sum is", a + b);
}
// implicit infer
function myFunc2() {
}
// void null or undefined
//never
// function myFunc3(): never{
//     throw new Error("This is my error");
// }
// myFunc3();
//unknown
function myFun4() {
    return (console.log("This is value"));
}
// let value: unknown = myFun4();
// let value1: any = myFun4();
// console.log(value1.toUpperCase());
// console.log(value.toUpperCase()); // any yavaga use madthivi namgee type checking madlla yav type idru nadiyutte 
// unknown yavag use madt 
