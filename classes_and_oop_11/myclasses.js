class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    hashvalue(){
        return `${this.password}wasd`
    }

    uppercase(){
        return `${this.username.toUpperCase()}`
    }
}

const samir = new user ("samir", "samir@gmail.com", "12345")
console.log(samir.hashvalue());
console.log(samir.uppercase());



// Behind the scene or Using Function

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.hashpassword = function(){
    return `${this.password}asdf`
}
User.prototype.capitalletter = function (){
    return `${this.username.toUpperCase()}`
}

const jitu = new User ("Jitu", "jitu@gmail.com", "12344231`")
console.log(jitu.hashpassword());
console.log(jitu.capitalletter());

