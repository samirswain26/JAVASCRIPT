let user = {
    username: 'samir',
    loginId: 2,
    isloggedIn: true,

    getuserdetail: function(){
        console.log('Got the user details.');
        console.log(`Username: ${this.username}`);
        console.log(this);
        // this refers to the object that is currently executing the code. Its value depends on how and where it is used.
        // If 'this' used inside an object method, this refers to the object itself. And "this" is undefined inside an object.
    }

}

console.log(user.loginId);
console.log(user.getuserdetail());
console.log(this);   // In the global scope 'this' refers to the "module.exports" object, and gives an empty object.







// Constructor Function
// A constructor function is used gives new instace everythime, it create multiple objects with the same properties and methods. It helps in object creation and code reusability.
// When called with "new", the constructor function creates a new object, sets this to that object, and returns it.

function person(username, isloggedIn, Logincount ){
    this.username=username,
    this.isloggedIn = isloggedIn,
    this.Logincount = Logincount

    return this
}

let person1 =  new person("samir", true, 12)
// let person2 =  person("jitu", false, 10)  // By using this format it will overwrite the data upon person1 and will show the value of this. So this is the wrong form. And this case will not arise by using "new" keyword.
let person2 = new person('jitu', false, 10)
console.log(person1);
console.log(person2);


// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value
console.log(person1 instanceof person);
