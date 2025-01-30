// A function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

function myname(){
    console.log("s");
    console.log("a");
    console.log("m");
    console.log("i");
    console.log("r");
}

myname()

function addthreenums(num1, num2){
    console.log(num1 + num2);
}
addthreenums(12, 34)





function addtwonumbers(number1, number2){
    let outcome = number1 + number2
    console.log('samir');
    return outcome
    
}   
// The return statement sends the function's output back to the part of the program where it was called. 
// In a function, any code written after a return statement will not be executed.
let outcome = addtwonumbers(11, 9);
console.log("Result", outcome);


function numbers(number1, number2){
    return number1 + number2
} 

let result2 = numbers(2, 3)
console.log("Result: ", result2);





function loginusermessage(username = "jitu" ){
    if(username === undefined){
        console.log("please enter a user name.");
        return
    }
    return `${username} is logged in`
}
loginusermessage()
console.log(loginusermessage("samir"));





function calculateprice(value1, value2, ...num){
    return num
}
console.log(calculateprice(200, 329, 600, 6000, 3004, 3000, 320));






// Pasisng Object as function
let customer = {
    customerName : 'Samir',
    id : 2,
}

function handleobjectinit(anyobject){
    console.log(`Customer name is ${anyobject.customerName} and ID is ${anyobject.id}`);
    
}
handleobjectinit(customer)

handleobjectinit({
    customerName: "rahul",
    id : 1,
})





// Passing Array as function
let myarray = [100, 200, 300, 400, 500, 600]

function returnarrayvalue(getanyarray){
    return getanyarray[2]
}
console.log(returnarrayvalue(myarray));
console.log(returnarrayvalue([500, 600, 700, 800, 900]));


// Using console.log Inside the Function for an array
let myarray2 = [100, 1000, 11, 101, 1001]
function returnarrayvalue2(getanyarray2) {
    console.log(getanyarray2[2]); // Directly logs the value
}

returnarrayvalue2(myarray2);