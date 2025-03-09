class user{
    constructor(username){
        this.username = username
    }

    login(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){        //Static keyword is used to prevents the acess of the method in the entire file.
        return `123`
    }
}

const samir = new user('samir')
console.log(samir.createId());

class admin extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const jitu = new admin("jitu", "jitu@google.com")
jitu.login()
console.log(jitu.createId());