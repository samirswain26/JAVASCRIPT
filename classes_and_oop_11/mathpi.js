const pi = Object.getOwnPropertyDescriptor(Math, "PI")     //GetPropertyDescriptor gives you the descriptor proprty of that partcular object.
console.log(pi);

let college = {
    collegeName: 'IIT',
    rank: 1,
    seatsAvailable: false,

    Selection: function(){
        console.log("By JEE");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(college, "rank"));

Object.defineProperty(college, 'rank', {
    // writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(college, "rank"));


for (const [key, values] of Object.entries(college)) {

    if (typeof values !== "function") {
        console.log(`${key} : ${values}`);
    }
    
}