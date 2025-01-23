let topic = "current eletricity"
let marks = 89

console.log(`My favorite subject is physics. And favourite chapter is ${topic}, I got ${marks} persentage in physics.`);

const gamename = new String('football')
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('b'));



const car = new String('mer-cedes')
const newcar =  car.substring(0, 5)
console.log(newcar);
const anothercar =  car.slice(-3, 10)
console.log(anothercar);

const bike = "    Ninja     "
console.log(bike);
console.log(bike.trim());


const url = "https://samir.com/samir%30kumar"
console.log(url.replace('%30','___'));
console.log(url.includes('kumar'));



const cricket = String("Virat-Kohli-MS-Dhoni")
console.log(cricket.split('-'))