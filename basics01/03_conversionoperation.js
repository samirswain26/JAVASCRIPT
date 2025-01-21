let score = 22
console.log(typeof score);
let valueInString = String (score)
console.log(typeof valueInString);


let age = "32"
console.log(typeof age);
let valueInnumber = Number(age)
console.log(typeof valueInnumber);

let height = "33ac"
console.log(typeof height);
let heightInNumber = Number(height)
console.log(typeof heightInNumber);
console.log(heightInNumber);



let temp = undefined
console.log(typeof temp);
let tempInNumber = Number(temp)
console.log(typeof tempInNumber);
console.log(tempInNumber);



let weight = null
console.log(typeof weight);
let weightInNumber = Number(weight)
console.log(typeof weightInNumber);
console.log(weightInNumber);



let loggedIn = 10
let booleanIsloggedIn = Boolean(loggedIn)
console.log(booleanIsloggedIn);
// 1 and any number except 0 => true
// "" => false
// "samir" => true

let str1 = "Hello" 
let str2 = " world"
let str3 = str1 + str2 
console.log(str3);
console.log(typeof str3);


let a = 2
let b = 2
let c = a+ b
console.log(c);
console.log(typeof c);

console.log("1" + 5);
console.log(1 + "5");
console.log("1" + 5 + 5);
console.log(1 + 5 +"5");
console.log( (2 + 2) + "2" );


let points = 7
points++;
console.log(points);