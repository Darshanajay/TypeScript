console.log("first");

type abs = string;

let address1: abs = "MYname";
console.log(address1); // MYname
console.log(typeof(address1));

type alphaNum = (string | number);
let password1 : alphaNum;
password1 = 1234;
password1 = "abc";
console.log(password1); // Abc@1234
console.log(typeof(password1)); // string

type order={
    title : string,
    price : number,
    status:string
}

let order1: order 
order1 = {
    title: "apple",
    price: 10.99,
    status: "pending"
}

interface cube{
    height : number
    width : number
}
interface cube1 extends cube{
    color : string
}

const obj : cube1 = {
    height : 99,
    width : 99,
    color : "red"
}
console.log(obj);