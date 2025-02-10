// While Loop
// while loop: Checks the condition first, then executes the code.

let index = 0
while (index <= 10) {
    console.log(`The value is ${index}`);
    index = index+5;
}


let cricketers = ["MSD", "VK", "RS", "ABD"]
let arr = 0
while (arr < cricketers.length){
    console.log(`the cricketers are ${cricketers[arr]}`);
    arr = arr + 1;
}




// Do while Loop
// do-while loop: Executes the code first, then checks the condition.

let score = 0

do {
    console.log(`The final score is ${score}`);
    score++;
} while (score <= 10);

let run = 101
do {
    console.log(`My hightest run is ${run}`);
    run
} while (run <= 100);