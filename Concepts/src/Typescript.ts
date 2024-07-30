console.log("types");


let x: number = 33; // number type it holds float int value boths and all number type
let float: number =33333.2211134555;
console.log(x)
console.log(x.valueOf());
console.log(x.toString());
console.log(typeof(x));

let userName: string = "Darshan";
console.log(userName);

let password: string = "abc@1234";
console.log(password);

let address: string
address = "Karnataka Davanagere";
console.log(address);
console.log(address.length);
console.log(typeof(address));

let isActive: boolean;
isActive = true;
isActive = false;
console.log(isActive);

let userEmail = "abc@gmail.com";
console.log(`User is Programmer. email id is ${userEmail}. user name is ${userName}`);

let nae:null = null;
console.log(nae);

let upass:undefined;
console.log(upass);

if(nae){
    console.log("True username");
}else{
    console.log("False username");
}//null value always falsey value

if(upass){
    console.log("True password");
}else{
    console.log("False password");
}//undefined value always falsey value

let networkData: any = "this is data";
console.log(networkData);
networkData = 333;
console.log(networkData); //we can add any type of data

let netObj: any = {
    productName: "Samsung",
    price: 443333,
    discountedPrice: 333
};

console.log(netObj.productName);
console.log(netObj.isActive);

// let arr: type[];
let arr: number[] = [12,434,55,6673,53];
console.log(arr);
let arr1: string[] = ["tata","volo"];
console.log(arr1);