// if

const isloggedIn = true

if (true){
    console.log("It is true");

}

// < , > , <=, >=, 
// ==(the value is equal), 
// != (not equal),
//  === (Strict equality operator that check both the value and type without type conversion), 
// ==  "The == operator is the loose equality operator. It checks if two values are equal after type conversion. If they match, it returns true; otherwise, it returns false."


if (3 != 3){
    console.log(" true");
}else{
    console.log("It is not true");
}

if (2 === "2"){
    console.log("Executed");

}



// JavaScript compares strings character by character (like a dictionary).
let fruits = "pineapple"
if (fruits > "quana"){
    console.log("This are fruits.");
} else {
    console.log("Not a Fruit.")
}

let temperature = 40
if (temperature > "34"){
    console.log("High Temperature");
} else {
    console.log("Low temperature")
}


let marks = 100
if(marks > 80){
    let samir = "with 8.9 percent"
    console.log(`He is a good student because he clear all his pappers ${samir}`);   
}
// console.log(`He is a good student because he clear all his pappers ${samir}`);    This will not be executed due to the the block scope and global scope.



let balance = 5000
if (balance < 500){
    console.log("Less than 500.");
}else if (balance < 3000){
    console.log("Less than 3000.");
}else if(balance < 4500) {
    console.log("Less than 4500.");
}else {
    console.log("Less than 9000.");
}




const userLaggedIn = true
const debitCard = true
const loggedInFromgoogle = false
const loggedInFromEmail = true

if (userLaggedIn && debitCard && 2===2) {  // The && operator is the logical AND operator. It checks if both conditions are true. If they are, the if statement runs. If either condition is false, the if statement won’t execute.
    console.log("Allow to buy.");
}

if (loggedInFromEmail || loggedInFromgoogle){    // The || operator is the logical OR operator. It checks if at least one condition is true. If either condition is true, the if statement runs. If both conditions are false, the if statement won’t execute. 
    console.log("User is logged In.");
    
}

