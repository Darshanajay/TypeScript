"use strict";
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//enum example
console.log("Enums");
//syntax
var DAYS;
(function (DAYS) {
    DAYS[DAYS["Monday"] = 0] = "Monday";
    DAYS[DAYS["Tuesday"] = 1] = "Tuesday";
    DAYS[DAYS["Wednesday"] = 2] = "Wednesday";
    DAYS[DAYS["Thursday"] = 3] = "Thursday";
    DAYS[DAYS["Friday"] = 4] = "Friday";
    DAYS[DAYS["Saturday"] = 5] = "Saturday";
    DAYS[DAYS["Sunday"] = 6] = "Sunday";
})(DAYS || (DAYS = {}));
let dd = DAYS.Friday;
console.log(dd);
var Months;
(function (Months) {
    Months[Months["Jan"] = 0] = "Jan";
    Months[Months["Feb"] = 1] = "Feb";
    Months[Months["Mar"] = 2] = "Mar";
    Months[Months["Apr"] = 3] = "Apr";
    Months[Months["May"] = 4] = "May";
    Months[Months["Jun"] = 5] = "Jun";
    Months[Months["Jul"] = 6] = "Jul";
    Months[Months["Aug"] = 7] = "Aug";
    Months[Months["Sep"] = 8] = "Sep";
    Months[Months["Oct"] = 9] = "Oct";
    Months[Months["Nov"] = 10] = "Nov";
    Months[Months["Dec"] = 11] = "Dec";
})(Months || (Months = {}));
console.log(Months.Jun);
console.log("hello");
// realtime example 
function myFunc22(value) {
    if (value == Months.Jan) {
        console.log("this is first month of year");
    }
    else if (value == Months.Feb) {
        console.log("this is second month of year");
    }
    else {
        console.log("Not a valid month");
    }
}
myFunc22(Months.Jan); // this is first month of year
myFunc22(Months.May);
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["pending"] = 0] = "pending";
    OrderStatus[OrderStatus["shipped"] = 1] = "shipped";
    OrderStatus[OrderStatus["delivered"] = 2] = "delivered";
    OrderStatus[OrderStatus["cancelled"] = 3] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
let order;
order = {
    title: "my order",
    price: 100,
    status: OrderStatus.delivered,
    date: new Date()
};
order.status = OrderStatus.cancelled;
console.log(order);
console.log(OrderStatus);
console.log(OrderStatus.cancelled.toString());
