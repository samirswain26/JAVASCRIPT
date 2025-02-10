//  for loop
// for loop: A loop that runs a set number of times with an initializer, condition, and increment/decrement in one line.

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is a number");
        
    }
    console.log(element);

}


for (let i = 1; i <= 10; i++) {
    console.log(`Table 0f ${i}`);

   
    for (let j = 1; j <= 10; j++) {
        console.log(`This is inner loop ${j} and this is outer loop ${i}`);

        console.log(i + '*' + j  + " = "  + i*j);
        
        
    }
    
}


let myarray = ["ironman" , "captain", "spider"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}







// Break and Continue

// break: Immediately exits the loop when encountered.
for (let index = 1; index <= 10; index++) {

    if(index == 7){
        console.log('Detected 7');
        break                   // Stops the loop when i is 7.
        
    }
    console.log(`The total number is ${index}`);
    
    
}



// continue: Skips the current iteration and moves to the next.
for (let index = 1; index <= 10; index++) {

    if(index == 7){
        console.log('Detected 7');
        continue             // Skips iteration when i is 7.
        
    }
    console.log(`The total number is ${index}`);
    
    
}