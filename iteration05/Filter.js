// Filter
// filter(): Creates a new array with elements that pass a test (provided as a callback function).


let coding = ["js", "py", "c++", "c"]

let Encoding =  coding.forEach(  (items) => {
    console.log(items);
    return items;
}  )

console.log(Encoding);



let mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newnums = mynums.filter(  (items) => (items > 4))
console.log(newnums);


let newnumarray = []
mynums.forEach(  (items) => {
    if(items > 5){
        newnumarray.push(items)
    }
}  )

console.log(newnumarray);




let Books = [
    {title: 'Book one', type: 'Science' , year: 1990},
    {title: 'Book two', type: 'History' , year: 1983},
    {title: 'Book three', type: 'Math' , year: 1999},
    {title: 'Book four', type: 'Science' , year: 2000},
    {title: 'Book five', type: 'Science' , year: 2004},
    {title: 'Book six', type: 'History' , year: 1990},
    {title: 'Book seven', type: 'Math' , year: 2007}
]

let liberary = Books.filter(  (items) => (items.type === "Science")  )
liberary = Books.filter(  (items) => (
    items.year >= 1990 && items.type === "Science"
)  )
console.log(liberary);
