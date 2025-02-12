// For Each
// The forEach loop in JavaScript is a method used to iterate over arrays. It executes a provided function once for each array element.


let coding = ["js", "py", "c++", "c"]

coding.forEach( function (anything)  {console.log(anything);}  )


coding.forEach(  (items) => {console.log(items);
}  )


function printing (item) {
    console.log(item);
    
}
coding.forEach(printing)

coding.forEach(  (value, str, arr) => {
    console.log(value, str, arr);
} )

let mycoding = [
    {
        mobile : "iphone",
        price : "30,000"
    },
    {
        mobile : "samsung",
        price : "20,000"
    },
    {
        mobile : "Blackberry",
        price : "28,000"
    }
]

mycoding.forEach(  (item) => {
    console.log(item.mobile);
    console.log(item.price);
    
}  )