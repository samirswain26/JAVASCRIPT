// Block Scope Variables declared with let and const inside a block {} are only accessible within that block.
// Global Scope Variables declared outside any function or block are accessible throughout the script.

let a = 300
if (true) {
    let a = 32
    const b = 41
    var c = 15
    console.log("Inner Element: ",a);
}

// console.log(a);
// console.log(c);



function one(){
    const myname = "samir"

    function two(){
        let username = "samir_12"
        console.log(myname);
    }
    console.log(username);

    two()
    
}


// one()


if(true) {
    let firstname = "samir"
    if (firstname === "samir"){
        let lastname = ' swain'
        console.log(firstname + lastname);
    
    }
}










console.log(addonenumber(6))
function addonenumber(num){
    return num + 1
}



//  We can not access the function before initialization while that function is stored in a variable. This is due to Hoisting.  
let addtwonumber = function(number){
    return number + 2
}
console.log(addtwonumber(5))
