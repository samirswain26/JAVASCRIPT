// primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const marks = 100
const Avgmarks = 88.7

const isloggedIn = false
const outsideTemp = null
let Email;

const customerid = Symbol('12')
const studentid = Symbol('12')
console.log(typeof studentid);
console.log(customerid === studentid);


const bigNumber = 122354223434232344233n
console.log(typeof bigNumber);


// Reference (Non primitive)
// Array, Object, functions

const subjects = ["Math", "Science", "Geography", "History"];
console.log(typeof subjects);
console.log( subjects);

let mymarks = {
    subjectname: "Maths",
    score: 80,
    outOf: 100,
}
console.log(mymarks);


const apple = function(){
    console.log("Hello World");
}
console.log(apple);
console.log(typeof apple);
apple();

//Note=> The return type of non premitive data type is object.





// Stack memory stores primitive data types. When variables are declared in stack memory, a copy of the value is created.

// Heap memory stores non-primitive data types. When variables reference data in heap memory, they point to the original value (reference).


let myname = "samir kumar"

let anothername = myname 
anothername = "sameeeer kuamr"

console.log(myname);
console.log(anothername);



let usr1 =
{
    name: "samir",
    age: 22,
}

let usr2=usr1
usr2.name= "jitu"
usr2.age= 35
console.log(usr1.name);
console.log(usr2.name);
console.log(usr1.age);
console.log(usr2.age);