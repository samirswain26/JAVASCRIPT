//  Generate a random color

let randomcolor = function (){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);   
    let b = Math.floor(Math.random() * 256);
    
    return`rgb(${r}, ${g}, ${b})` ;
}

// console.log(randomcolor());

let cr;

document.querySelector('#start').addEventListener(('click'), () => {
    if(!cr){
        // The setInterval() method calls a function at specified intervals (in milliseconds).
        // setInterval(function(){}, 1000);
        cr = setInterval(()=> {
            document.body.style.backgroundColor = randomcolor()
        }, 1000)
    }
    
})

document.querySelector('#stop').addEventListener(('click'), ()=>{
    clearInterval(cr);
    cr = null;
} )
