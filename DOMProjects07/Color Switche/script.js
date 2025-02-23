console.log("samir")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'apple') {
      body.style.backgroundColor = 'red';
    }
    
  });
});






// let buttons = document.querySelectorAll('.button');
// let body = document.querySelector('body');
// buttons.forEach((button) => {
//   // console.log(button);
//   button.addEventListener('click', (a) => {
//     console.log(a);
//     console.log(a.target);
//     body.style.backgroundColor = a.target.id; //assumes that the button's id is a valid CSS color. So i had taken an id as apple to check how it works.
//     if (a.target.id === 'apple') {
//         body.style.backgroundColor = 'red';  // Otherwise, use button's ID as color
//     }else{
//         body.style.backgroundColor = a.target.id;  // Otherwise, use button's ID as color

//     }
    
//   });
// });







// let buttoms = document.querySelectorAll('.button');
// let body = document.querySelector("body");
// buttoms.forEach( (button) => {
//     button.addEventListener('click', (a) => {
//         switch (a.target.id) {
//             case "grey":
//                 body.style.backgroundColor = 'grey';
//                 break;

//             case "white":
//                 body.style.backgroundColor = 'white';
//                 break;

//             case "blue":
//                 body.style.backgroundColor = 'blue';
//                 break;

//             case "yellow":
//                 body.style.backgroundColor = 'yellow';
//                 break;

//             case "pink":
//                 body.style.backgroundColor = 'pink';
//                 break;

//             case "apple":
//                 body.style.backgroundColor = 'red';
//                 break;
        
//             default:
//                 body.style.backgroundColor = "orange";
//                 break;
//         }
//     })
// } )