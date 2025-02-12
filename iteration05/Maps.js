// Maps
// // map(): Creates a new array by applying a function to each element of the original array.


let mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newnums = mynums.map(  (items) => (items + 10)   )
console.log(newnums);

let anothernum = mynums
                .map( (items) => (items*10) )
                .map(  (items) => (items+10)  )
                .filter(  (items) => (items >= 50)  )

console.log(anothernum);
