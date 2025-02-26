let clock = document.getElementById('clock')
// let clock = document.querySelector('#clock')

setInterval(() => {
    let date = new Date()
    console.log( date.toLocaleTimeString());
    // console.log( date);
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);