const customerId = 123456
let Email = "samir@outlook.com"
var phoneNumber ="1234"
city = "kolkata"
let pincode;

// customerId = 5 // not allowed because that particular constant is already given.

Email = "sam@cm.com"
phoneNumber = "212121212"
city = "jaipur"

console.log(customerId);

/*
Prefer not to use var because of issue in block scope and functional scope
In Javascript we use cont(for constant) and let(for varialbes).
*/


console.table([customerId, Email, phoneNumber, city, pincode])
