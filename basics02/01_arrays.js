const firstArry = [0,1,2,3,4,'samir','12'];
const cricketers = ["vk", "Dk", "MSD"];
const secndArry = new Array(1, 3, 34, 'Boom-Boom');


console.log(firstArry[3]);



//  Array methods

firstArry.push(6,9,14)
firstArry.pop()



firstArry.unshift(20)  /* unshift adds the element in starting of an array that is in 0 index value of array. */
firstArry.shift()     /* shift delets the first element in the array that is in the 0th index value element in the array. */ 
console.log(firstArry.includes(4));
console.log(firstArry.indexOf(4));  /* Indexof is used for finding the index of that element if the element is not in the array then it will show as -1 in output. */


const joinArry = firstArry.join()
console.log(firstArry);
console.log(joinArry);
console.log(typeof joinArry);



console.log("A", firstArry );

const sliceArry = firstArry.slice(0, 4)
console.log(sliceArry);
console.log("B", firstArry);
//  slice is used for create a copy of an array using index value. in this case the array is copied from o-4 index value.




//  The Splish method is used to add, remove, replace elements in an array at specific position.
const spliceAryremove = firstArry.splice(1, 3)
console.log(spliceAryremove);
console.log("C", firstArry);

let spliceAryadd = [1, 2, 4];
spliceAryadd.splice(2, 0, 3); // Adds 3 at index 2
console.log(spliceAryadd); // Output: [1, 2, 3, 4]

let splishAryreplace = [1, 2, 3];
splishAryreplace.splice(1, 1, 9); // Replaces element at index 1 with 9
console.log(splishAryreplace); // Output: [1, 9, 3]



secndArry.shift()
console.log(secndArry);

