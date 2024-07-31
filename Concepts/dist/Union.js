"use strict";
console.log("first");
//Union Type
let userId = "abcddkjsdkf";
userId = 333;
const displayUseerID = (userId) => {
    console.log("user id is " + userId);
    if (typeof userId === 'string') {
        console.log(userId.toUpperCase());
    }
    return userId;
};
displayUseerID(userId);
let myarr = [
    "one", 1, "two", 2
];
console.log(myarr);
