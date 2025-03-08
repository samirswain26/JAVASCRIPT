let myname = "Samir    "
let anothername = "Jitu   "
console.log(myname.trim().length);
console.log(myname.trueLemgth);  

let heros = ["Thor", "Spiderman"]
let studios = ["marvel", "dc", "fox"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "sling",

    getThorPower: function(){
        console.log(`Thor power is ${this.Thor}`);
        
    }
}

Object.prototype.samir = function(){
    console.log(`Samir is now presnt in all objects (arrays,string,functions....  because all are objects.) .`);
}
Array.prototype.jitu = function(){
    console.log(`Jitu is present only in arrays.`);
    
}

heroPower.samir()
heros.samir()
myname.samir()
studios.jitu()
// heroPower.jitu()   //It does not the power of .jitu because it is an object. And this power is for Arrays only.





//Inheritance

let user = {
    name: 'samir',
    email: 'samir@google.com'
}

let student = {
    isStudying: true
}

let school = {
    inschool: true
}

let tasks = {
    assignments: true,
    learningrecords: true,
    __proto__: school
}
student.__proto__ = user
console.log(student.email);
// console.log(tasks.email);     // This will gives undefined because tasks doesn't inherit the character of user.
console.log(tasks.inschool);


// Modern syntax
Object.setPrototypeOf(school, student)


String.prototype.trueLength = function (){
    console.log(`${this}`);
    // console.log(this);
    console.log(`True Length is ${this.trim().length}`);
    
}

anothername.trueLength()
"tea".trueLength()
"coffee".trueLength()