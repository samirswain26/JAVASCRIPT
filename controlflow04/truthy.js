let userEmail = "samir@mail.in"

if (userEmail){
    console.log("It is LoggedIn");
}else{
    console.log("Logged Ouy");
}

// // Falsy Value
// false, 0, -0, BIGint 0n, "",null, undefined, NaN

// Truthy Values
// "0", 'false', " " - Any thing inside string is truthy, [], {}, function(){} - Empty fuction is truthy value.



let mail = []
if (mail.length === 1){
    console.log("array");   
}



const emptyobj = {}
if (Object.keys(emptyobj).length === 0 ) {
    console.log("Object is empty");
    
}



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 12
//  val1 = undefined ?? 20
//  val1 = undefined ?? 20 ?? 13
 val1 = undefined ?? true ?? false

console.log(val1);




// Terniary Operator
// condition ? true : false
// It checks wheather the condition if true then it prints the true value or vice-versa.
const carprice = 100
carprice <= 80 ? console.log("Less than 80") : console.log("More than 80");



