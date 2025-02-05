// Immediately Invoved Function Expression (IIFE)
// IIFE functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.


(function name (){
    //  Named IIFE
    console.log("My Name Is Samir");
})();


((galaxy) => {
    // Simple IIFE
    console.log(`Hello Duniya, This is our ${galaxy}.`);
})("Milky Way Galaxy");