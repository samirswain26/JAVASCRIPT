function User(username, email, contactNumber){
    this._username = username;
    this._email = email;
    this._contactNumber = contactNumber; 


    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, "contactNumber", {
        get: function(){
            return `${this._contactNumber} my number`
        },
        set: function(value){
            this._contactNumber = value
        }
    })


}

const samir = new User("Samir", "s@gmail.com", "12345")
console.log(samir.email);
console.log(samir.contactNumber);






// function User(username, email, contactNumber) {
//     Object.defineProperty(this, "username", {
//         get: function () {
//             return this._username.toUpperCase();
//         },
//         set: function (anyword) {
//             this._username = anyword;
//         }
//     });

//     this.username = username; // Now it correctly calls the setter
//     this.email = email;
//     this.contactNumber = contactNumber;
// }

// let samir = new User("Samir", "s@gmail.com", 12345);
// console.log(samir.username); // Output: "SAMIR"
