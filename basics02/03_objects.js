// Object Literal

const mysymbol = Symbol("This is a symbol")

const myobj1 = {
    myname : "Samir",
    "full name" : "Samir Kumar Swain",
    age : 22,
    country : "India",
    region : "south-East",
    [mysymbol] : "This is a symbol", // the symbol is used in object as a key pair and with " square bracket-[] ". 
    email : "samir@google.com"
}
// Object is block scope but it is a part of global scope so we can access it by global scope. however object is a global environment so it can access by globally.

console.log(myobj1.age);
console.log(myobj1.email);
console.log(myobj1["full name"]);
console.log(typeof myobj1["full name"]);
console.log(typeof "full name");
console.log(typeof mysymbol);
console.log( myobj1[mysymbol]);
console.log(typeof myobj1[mysymbol]);


myobj1.email = "samir@outlook.com";
// Object.freeze(myobj1);  // freeze function is used to freeze an object making it immutable(any modificationor change of its property)
myobj1.myname = "jitu";

console.log(myobj1);



myobj1.hello = function(){
    console.log("Hello World");
}

console.log(myobj1.hello());

myobj1.data = function(){
    console.log(`my nick name is ${this.myname} and my complete name is ${this["full name"]}`);
    
}
console.log(myobj1.data())