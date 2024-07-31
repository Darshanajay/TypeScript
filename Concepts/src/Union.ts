console.log("first")

//Union Type
let userId: (string | number | boolean) = "abcddkjsdkf";
userId = 333;

const displayUseerID = (userId: string | number):string | number  => { 
    console.log("user id is "+ userId);
    if (typeof userId === 'string') {
        console.log(userId.toUpperCase());
    }
    return userId;
 }

displayUseerID(userId);

let myarr: (string | number) [] = [
    "one",1,"two",2
]
console.log(myarr);