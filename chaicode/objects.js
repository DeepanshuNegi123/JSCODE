// SINGLETON 

// object literalls
// object.create this is the constructor method .

const user  = {
       name : "haremit",
       age : "34",
       email: "deep3434@gmail.com",
       honest: true,
       hobbies : ['playing' , 'swimming' , 'anime ', 'sleeping']
       ,
       "check n":"point"
}

//let b = user.hobbies; // searches for the hobbies in the user 
//console.log(...b); // spread operator .
//console.log(user.b); // undefined .
//console.log(user['email']);  

//console.log(user.checkn); // a string cannot be accessed through dot operator .
console.log(user["check n"]); // through brackets .

const mysymbol = Symbol();

/// symbol is  a  unique immutable primitive datatype .
console.log(mysymbol);

/// Symbol has s capital.

/*const cume = {

    name : "alice",
    [Symbol("id")] : 23 // symbol as a key 
};

console.log(cume);
console.log();  // how to retrive 


*/


user.email = "dkfd"; // we can change the users properties.
console.log(user.email);




// object freeze in js 

/* we can freeze the user properties in js */

//Object.freeze(user); // freeze method 
user.name = "luffy kun";
console.log(user.name ); // it didn't change
console.log(user.age);



/*  --------------------------------------------------------------   FUNCTIONS IN JAVA SCRIPT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

 // this will help us to access the properties in the user .
user.greeting = function(){
    console.log(`hello ${this.name} how are you i think you are fine `);
}

console.log(user.greeting); // function anonyms .
console.log(user.greeting());