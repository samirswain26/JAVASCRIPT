function multiplyby3 (num){
    return num*3
}

multiplyby3.power = 2

console.log(multiplyby3(3));
console.log(multiplyby3.power);
console.log(multiplyby3.prototype);

function createUsers (username, price){
    this.username = username
    this.price = price
}


createUsers.prototype.increment = function (){
    this.price++
    console.log(`Increased Priced is: ${this.price}`);  
}
createUsers.prototype.printMe = function (){
    console.log(`Price is: ${this.price} `);
}


let coffee = new createUsers('coffee', 10)
let tea = new createUsers('tea', 5)

tea.increment()
tea.printMe()