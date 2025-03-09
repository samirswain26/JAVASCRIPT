class user{
    constructor(username){
        this.username = username
    }

    login(){
        console.log(`I am ${this.username}`);
        return `${this.username.toUpperCase()}`
    }
    toUpperCase(){
        return `${this.username.toUpperCase()}`
    }

}
class admin extends user {
    constructor(username, Ids , passwords){
        super(username)
        this.Ids = Ids
        this.passwords = passwords
    }

    addfeatures(){
        console.log(`${this.username} added some new features into it `);
    }
}

const samir = new admin("samir", "1", "123")
samir.addfeatures()
console.log(samir.login());


const jitu = new user("jitu")
jitu.login()
console.log(jitu.toUpperCase());
// jitu.addfeatures()    // It has not the access of admin.


console.log(jitu instanceof user);
