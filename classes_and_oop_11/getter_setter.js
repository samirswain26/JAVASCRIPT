// Getters & Setters
// Getters (get) → Retrieve a property value with custom logic.
// Setters (set) → Modify a property with validation or transformation.



class User{
    constructor(username,email,phoneNumber){
        this.username = username
        this.email = email
        this.phoneNumber = phoneNumber
    }

    get phoneNumber(){
        return `${this._phoneNumber} Is my phone Number`
    }
    set phoneNumber(anyword){
        this._phoneNumber = anyword
    }

    get email (){
        return this.myemail.toUpperCase()
    }
    set email(value){
        this.myemail = value
    }


}

const samir = new User("Samir", "Samir@google.com", 1234567)
console.log(samir.phoneNumber);
console.log(samir.email);
