
function add (a:number, b:number):number{
    console.log("hello");
    return a+b
}

let r = add(2,3)
console.log(r)

const std = (rn: number,name:string):number => { //formal parameter
    console.log("hello good morning");
    console.log(name);
    console.log(rn);
    return rn;
 }

 std(3,"aggo"); //Actual parameter