function Setusername(username){
    this.username = username
}

function createuser(username,email,password){
    Setusername.call(this, username)     // Call Setusername  constructor

    this.email = email
    this.password = password
}

const samir = new createuser("samir", "samir@google.com", "samir000")
console.log(samir);
