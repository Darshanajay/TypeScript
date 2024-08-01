"use strict";
console.log("first");
// Type of Function
//(Parameters) => return type
//(a: number , b: number) => number
let xx = function myFun(a, b) {
    return a + b;
};
console.log(xx(5, 7)); // Output: 12
let person;
person = {
    FirstName: "John",
    LastName: "Doe",
    getFullName() {
        return this.FirstName + " " + this.LastName;
    }
};
console.log(person.getFullName());
// Optional Parameters
// Required Parameters- must
// Optional Parameters- optionsl
// Function myFun(a: string , b: string, c? string) {}
function myFun47(a, b, c) {
    console.log(a, b, c);
}
let addd = function myadd(a, b, c) {
    console.log(a + b + c);
};
// addd(1,2,3);
addd(1, 2); // order first optional and then default
// myFun47("d","a","e");
myFun47("d", "a");
// Default parameters
let subb = function mysub(a = 8, b = 7) {
    console.log(a - b);
};
subb(); // 3
// Rest parameters : we can assign multipule parameters
function sumAtLeastTwo(a, b, ...rest) {
    let sum = a + b;
    rest.forEach((n) => {
        sum += n;
    });
    console.log(sum);
}
sumAtLeastTwo(3, 45, 4, 4, 4);
