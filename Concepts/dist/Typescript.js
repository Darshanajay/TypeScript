"use strict";
console.log("types");
let x = 33; // number type it holds float int value boths and all number type
let float = 33333.2211134555;
console.log(x);
console.log(x.valueOf());
console.log(x.toString());
console.log(typeof (x));
let userName = "Darshan";
console.log(userName);
let password = "abc@1234";
console.log(password);
let address;
address = "Karnataka Davanagere";
console.log(address);
console.log(address.length);
console.log(typeof (address));
let isActive;
isActive = true;
isActive = false;
console.log(isActive);
let userEmail = "abc@gmail.com";
console.log(`User is Programmer. email id is ${userEmail}. user name is ${userName}`);
let nae = null;
console.log(nae);
let upass;
console.log(upass);
if (nae) {
    console.log("True username");
}
else {
    console.log("False username");
} //null value always falsey value
if (upass) {
    console.log("True password");
}
else {
    console.log("False password");
} //undefined value always falsey value
let networkData = "this is data";
console.log(networkData);
networkData = 333;
console.log(networkData); //we can add any type of data
let netObj = {
    productName: "Samsung",
    price: 443333,
    discountedPrice: 333
};
console.log(netObj.productName);
console.log(netObj.isActive);
// let arr: type[];
let arr = [12, 434, 55, 6673, 53];
console.log(arr);
let arr1 = ["tata", "volo"];
console.log(arr1);
