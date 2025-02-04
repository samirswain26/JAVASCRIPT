let employee = {
    employeename: "Samir",
    id: 12,

    loginMessage:function() {
        console.log(`${this.employeename} , Welcome to this page`); // "this" key word refers to the object to which it belongs.
        console.log(this);
        // function inside a object is called a method and "this" refers to the object itself.
    }
}

employee.loginMessage()
employee.employeename = "jitu"
employee.loginMessage()

console.log(this);


function apple(){
    let username = "sam"
    console.log(this.username);  // "this.username" will not be used in functions. It only uses in objects.
}
apple()



const batsman = function () {
    let firstbatsman = "Virat"
    console.log(this.firstbatsman);
    console.log(this);

}
batsman()



// Arrow function 
//  In arrow function the output of "this" is an empty object but "this.variablename" is undefined because "this.variablename" is used in objects.
const bowler = () => {
    let firstbowler = "Jassi"
    console.log(this);
    
}
bowler()





// Explicit Return 
const addtwo = (num1, num2) => {
    return num1 + num2
}

console.log(addtwo(2,6));

// Implicit Return
const addthree = (num1, num2, num3 ) =>  (num1 + num2 + num3 )

console.log(addthree(2,6,4));


const objectreturn = () => ({Name: "samir"})
console.log(objectreturn())