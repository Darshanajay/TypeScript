//An enum is a special "class" that represents a group of constants (unchangeable variables).
//enum example

console.log("Enums");

//syntax
enum DAYS {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
let dd = DAYS.Friday;
console.log(dd)

enum Months { // now we can use it by as a types
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}
console.log(Months.Jun);
console.log("hello")

// realtime example 

function myFunc22(value:Months){
    if (value == Months.Jan){
        console.log("this is first month of year");
    }
    else if (value == Months.Feb){
        console.log("this is second month of year");
    }else{
        console.log("Not a valid month");
    }
}

myFunc22(Months.Jan); // this is first month of year
myFunc22(Months.May); 

enum OrderStatus {
    pending,
    shipped,
    delivered,
    cancelled,
}

let order: {title:string , price:number , status:OrderStatus, date: Date};

order = {
    title: "my order",
    price: 100,
    status: OrderStatus.delivered,
    date: new Date()
}
order.status = OrderStatus.cancelled;
console.log(order)

console.log(OrderStatus);
console.log(OrderStatus.cancelled.toString())