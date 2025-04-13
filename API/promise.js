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


// const promiseone= new Promise (function (resolve, reject){

//     setTimeout(function (){
//         console.log('Async task is complete');
//         resolve();
//     },3000)
// })

// promiseone.then(function (){
//     console.log("promise consumed");
// }); // resolve is   connected to  .then



// here i have provided two parameters to the promise and it takes two of them
// igotit = resolve 
// idont = reject
// resolve is default connected to the .then 
// resolve means fullfilled the work or successfull.
// reject means not done incomplete .
// reject -->  .catch or .then(null, errorhandler);


 
// new Promise ((igotit,idont)=>{   // CREATION OF A EXECUTOTR HAVING PARAMETERS
// setTimeout(()=>{
//     console.log("async2");  // AFTER TWȮ SECONDS IT WILL PRINT THIS 

//    igotit();  // IF WE GET DESIRED  OUT PUT THEN .then is called.
// },2000)


// }).then(()=>{
//     console.log("async 2 resolved");
// })

// // data inside the promise

// const  promise3 = new Promise((get,not)=>{
//     setTimeout(()=>{
//         get({username:"cryptic", email:"heha@gmail.com"});
//     })
// })

// promise3.then((output)=>{
//         console.log(output);
// })

// 

// const letsee = new Promise(function (resolve , reject){
// setTimeout(()=>{
// let error = true;
// if (!error){
//     resolve({user:"name", pass:"345"});
// }

// else {
//     reject("Error something went wrong");
// }

// },2000)


// })

// letsee.then((us)=>{

//     console.log(us.user)
//     return us.user;
// }).catch(function name(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("finally the proimse is accepted or reejcted.")
// })
    


// const five = new Promise(function(resolve , reject){
//     setTimeout(()=>{
//         let error =  true;
//         if (!error){
//             resolve({username :"js" , password:"rematch"});
//         }

//         else {
//             reject ('error : in js something went wrong;')
//         }
//     },3000);
// });



// async function namee(){
//    try
//    {
//     const response = await five;
// console.log(response);
//    }
//    catch(error){
// console.log(error)
//    }
// }

// namee();



async function choosen(){
try {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = response.json();
    // console.log(data);
    console.log(response);
    // console.log(response.date);

}

catch(error){
    console.log("Error : ");

}

}
choosen();