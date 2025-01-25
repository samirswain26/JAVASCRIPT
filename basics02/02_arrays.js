const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Batman","Superman","flash"]


marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][0]);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);
// concat prototype is used to add two or more different arrays. This returns without modifying any existing arrays.


const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
// spread operator is used to spread two or more different arrays usng (...) triple dot in it.

const numbers_array = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13,[14,15]]]]
const real_numbers_array = numbers_array.flat(Infinity)
console.log(real_numbers_array);


console.log(Array.isArray("samir"))
console.log(Array.from("samir"));
console.log(Array.from([{name: 'jitu'}])) 


let score1 = 100
let score2 = 300
let score3 = 700
console.log(Array.of(score1, score2, score3));   //Returns a new array from a set of elements

