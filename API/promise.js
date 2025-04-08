// the promise object represents  us 
// the eventual completion of 
// the asynchronous operation and its value.


// WORKING OF API AND 

// APIs often return Promises in JavaScript 
// because API calls are asynchronous 
// (they take time to respond).
// Promises help manage APIs (and other async tasks).

// states of promise 
// pending 
// fulfilled 
// rejected 


const promiseone= new Promise (function (resolve, reject){

    setTimeout(function (){
        console.log('Async task is complete');
        resolve();
    },3000)
})

promiseone.then(function (){
    console.log("promise consumed");
}); // resolve is   connected to  .then