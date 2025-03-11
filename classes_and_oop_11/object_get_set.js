let user = {
    _email : 'Sam@google.com',
    _username: "samir",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const samir = Object.create(user)
console.log(user.email);
