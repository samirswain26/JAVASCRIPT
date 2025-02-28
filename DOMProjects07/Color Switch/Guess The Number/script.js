let randomnumber = parseInt((Math.random() *100) + 1)
console.log(randomnumber);


let submit = document.querySelector('#subt')
let userInput = document.querySelector('#guessField')
let showguess = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let startover = document.querySelector('.resultParas')

let p = document.createElement('p')

let prevGuess = []
let numguess = 1

let playgame = true

if (playgame) {
    submit.addEventListener('click', (a) => {
        a.preventDefault()
        let guess = parseInt(userInput.value)
        console.log(guess);
        validateguess(guess)
    })
}

function validateguess(guess){
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }else if (guess < 1) {
        alert('please enter a number more than 1.')
    }else if (guess > 100) {
        alert('please enter a number less than 100.')
    }else{
        prevGuess.push(guess)
        if(numguess === 11) {
            checktheguesses(guess)
            displaymessage(`Game over. Random Number Was ${randomnumber} `)
            endgame()
        }else{
            displayguess(guess)
            checktheguesses(guess)
        }
    }
}

function checktheguesses (guess) {
    if(guess === randomnumber) {
        displaymessage(`Guess Is right.`)
        endgame()
    }else if (guess > randomnumber) {
        displaymessage(`Number is High`)
    }else if (guess < randomnumber) {
        displaymessage(`Number is Low`)
    }
}

function displayguess (guess){
    userInput.value = '';
    showguess.innerHTML += `${guess}  ,` ;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`
}

function displaymessage (message){
    lowOrHi.innerHTML =  `<h2>${message}</h2>`;
}

function endgame (){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newgame"> Start New Game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
}

function newgame (){
   let newgamebutton = document.querySelector('#newgame')
   newgamebutton.addEventListener('click', (b) => {
    randomnumber = parseInt((Math.random() *100) + 1)
    console.log(randomnumber);
    
    prevGuess = [];
    numguess = 1;
    showguess.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);

    playgame = true;
   } );
}