// **Promise**: A Promise in JavaScript represents a value that may be available now, later, or never.  
// It is used for handling asynchronous operations and can be in one of three states:  
// 1. Pending – The initial state, waiting for resolution or rejection.  
// 2. Fulfilled – The operation completed successfully (resolved).  
// 3. Rejected – The operation failed (rejected). 

let promiseone = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Asyn task one.');
        resolve()
    },1000)
})
promiseone.then(function(){
    console.log('Asyn one resolved.');
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2.');
        resolve()
    },1000)
}).then(function(){
    console.log('Async task 2 completed.');
    
})


let promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "samir", email: 'samir@email.com' }) 
    })
})
promiseThree.then(function(a){
    console.log(a);
    
})


let promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve([username = "samir", email= 'samir@email.com' ]) 
    })
})
promisefour.then(function(a){
    console.log(a);
    
})


let promisefive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({'ID' : 1 , password: 'mypassword'})
        }else{
            reject('ERROR : Something went wrong!')
        }
        
    },2000)
})
promisefive.then((pass)=>{
    console.log(pass);
    return pass.ID
}).then((a)=>{console.log(a);
}).catch((err)=> {console.log(err);
}).finally(()=>{console.log('The promise is either resolved or rejected.');
})


let promisesix = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({ID : 'js' , password: 'mypassword'})
        }else{
            reject('ERROR : js went wrong!')
        }
        
    },2000)
})
async function consumepromisesix() {
    try {
        let response = await promisesix
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumepromisesix()




// **async/await**: async is a keyword that makes a function return a Promise.
// await pauses execution inside an async function until the Promise is resolved or rejected.

async function mydata() {
   try {
    let response = await fetch('https://api.github.com/users/samirswain26')
    let data = await response.json()
    console.log(data);
   } catch (error) {
    console.log(error);
   } 
}
mydata()






// **fetch**: The fetch() API is used to make network requests (like getting data from a server).
// It returns a Promise that resolves to the Response object, which can be processed further.

fetch('https:api.github.com/users/samirswain26')
.then((mydata)=>{
    return mydata.json()
})
.then((data)=>{console.log(data);
})
.catch((error) => console.log(error))