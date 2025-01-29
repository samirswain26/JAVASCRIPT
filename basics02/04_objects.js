// const instagram = new Object() //It is a singleton object.Singleton object is create only once and reused whenever needed.
const instagramUsr = {} // It is a non-singleton object.
instagramUsr.id = "123asd"
instagramUsr.name = "samir"
instagramUsr.isloggedIn = true

console.log(instagramUsr);


// When an object contains another object is known as Object Nesting as an property.
const activeUsr = {
    fullname : {
        username1 : {
            email: "jitu@gmail.com",
            firstname: "jitu",
            lastname : "kumar",
        },
        username2 : {
            email: "samir@gmail.in",
            firstname : "samir",
            lastname : "swain",
        }
    }
};
console.log(activeUsr.fullname.username2);  //using dot notation we can access the nested object and ths key pairs also.


let obj1 = {1:'a', 2:'b', 3:'c'}
let obj2 = {4:'d', 5:'e', 6:'f'}
let obj3 = {name:"samir", age:23, height:"6ft", anothername: "jitu"}
let obj4 = Object.assign( {}, obj1, obj2, obj3)   // object.assign({},) is used to add to or more objects into a single object.
console.log(obj4);

let obj5 = {...obj1, ...obj3}  // "..." is known as spread operator and is also used to add two or more objects into a single objects.
console.log(obj5);

console.log(instagramUsr);
// console.log(Object.keys(instagramUsr));  // Object.keys() method is used to know the key of that particular object but it return the vaues as array.
console.log(Object.values(instagramUsr));
console.log(Object.entries(instagramUsr)); //When object.entries method is used it gives an array and each key-value as an array itself. 
console.log(instagramUsr.hasOwnProperty('isloggedIn'));  // '.hasOwnProperty' is used to find that the particular object is having that property or not.





// Destructuring allows you to extract values from an object or an array and assign them to variables.
const btech = {
    stream : 'CSE',
    dean : 'sujata',
    founder : 'mukti',
    headofthedepartment : 'Rajkumar'
}

const {stream: department, headofthedepartment: HOD } = btech
console.log(HOD);
console.log(department);

