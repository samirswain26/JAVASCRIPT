//  for of loop

// ["", "", ""] 
// [{}, {},{}]

let array = [1, 2, 3, 4 ,5, 'Ironman']

for (const number of array) {
    // console.log(number);
}

let greeting = "Welcome to the universe"
for (const greet of greeting) {
    // console.log(`All are ${greet}`);
    
}



// Maps

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

let map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("UK", "United Kingdom")
map.set("In", "India")     // This will be executed because of the case-sensitive.
map.set("IN", "India")
// console.log(map);


for (const [key, value] of map) {
    console.log(key ,":-", value);
}


let aobject = {
    name : "Samir",
    age : 23
}
for (const [key, value ] of aobject) {
    console.log(aobject);   
}
// An object in JavaScript is not iterable by default because it does not have a built-in iterator like arrays, maps, or sets. Iteration requires the object to implement the "Symbol.iterator" method.