// reduce(): The reduce() function in JavaScript applies a callback function to each element of an array, accumulating a single result. The callback function takes an accumulator (which stores the accumulated result) and a current value (the current element being processed).


let mynums = [1, 2, 3]

let total = mynums.reduce(  function (accumulator, currentval) {
    console.log(`Accumulator vale: ${accumulator}, Current val: ${currentval}`);
    
    return accumulator + currentval
}, 5 )
console.log(total);


let mytotal = mynums.reduce(  (accum, curval) => (accum + curval), 0 )
console.log(mytotal);



let mycart = [
    {
        coarse: "js",
        price: 3999
    },
    {
        coarse: "python",
        price: 999
    },
    {
        coarse: "C++",
        price: 499
    },
]

let pricetopay = mycart.reduce(  (accum, item)=> (accum + item.price), 0  )
let namesofcoarse = mycart.reduce(  (accum, item)=> (accum + item.coarse), 0  )
console.log(pricetopay);
console.log(namesofcoarse);
