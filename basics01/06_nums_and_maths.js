const marks = 500
console.log(marks);



const rupees = new Number(1000) /*In this case we use 'new' object as number.*/
console.log(rupees);
console.log(rupees.toString());
console.log(rupees.toFixed(2));
console.log(typeof rupees);


const othermarks = 165.7898
console.log(othermarks.toPrecision(3));


const zeros = 10000000
console.log(zeros.toLocaleString('en-IN'));







// -------------------Maths----------------


console.log(Math);
console.log(Math.abs(-4)); /* using abs it only reverse the sign of negative to positive only.*/
console.log(Math.round(9.9));
console.log(Math.ceil(8.9));  /* Using ceil prototype it will take the upper value */
console.log(Math.floor(7.9));  /* Using floor prototype it will take the lower value */
console.log(Math.min(6, 4, 7, 45, 1, -1));
console.log(Math.max(68, 76, 89.8));

console.log(Math.random()); /* Using random prototype the value will always with in zero(0) and one(1) */
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 20
const max = 30

console.log(Math.floor(Math.random() *(max - min + 1)) +min);



