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
//console.log(user["check n"]); // through brackets .

const mysymbol = Symbol();

/// symbol is  a  unique immutable primitive datatype .
//console.log(mysymbol);

/// Symbol has s capital.

/*const cume = {

    name : "alice",
    [Symbol("id")] : 23 // symbol as a key 
};

console.log(cume);
console.log();  // how to retrive 


*/


user.email = "dkfd"; // we can change the users properties.
//console.log(user.email);




// object freeze in js 

/* we can freeze the user properties in js */

//Object.freeze(user); // freeze method 
user.name = "luffy kun";
//console.log(user.name ); // it didn't change
//console.log(user.age);



/*  --------------------------------------------------------------   FUNCTIONS IN JAVA SCRIPT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

 
// this will help us to access the properties in the user .
user.greeting = function(){
    //console.log(`hello ${this.name} how are you i think you are fine `);
}

// console.log(user.greeting); // function anonyms .
// console.log(user.greeting());

 const insta =  {

 };
// const insta = new object();

// console.log(insta);
insta.name = "sammwer"; // 
// console.log(insta);


// objects inside the obbjects 


const regular = {
  email : "luffy344",
  name:"luffy",
  id:"1232242",
  subjects:{
    1:"ai",
    2:"maths",
    3:"front end",
    4:"backend "
  }
};


// console.log(regular.subjects[3]);



const obj1 = {1:"a" , 2:"b",3:"c"};
const obj2 = {4:"d" ,5:"e" , 6:"f"};

const obj3 = Object.assign({},obj1,obj2); // merging two arrays .

// console.log(obj3);
// spread operstor is used using a separate variable.
const up = {...obj1};
 // console.log(up);




// OBJECTS INSIDE ARRAY //
const users =[

    {
        id : 1,
        email:"h@gmail.com",
        rollno:23
    }
    ,

    {
          nmae : "hello world ",
          class : 34,
          section: "a"
    }
]

 // console.log(users);
 // console.log(users[0].email);



 // console.log(Object.keys(regular));  // CAPITAL O data type is array.

 // console.log(Object.keys(users[1])); // by using object method we can manipulate the arrays easily.

// Object.keys helps us in finding keys 

// Object.values helps  in finding values inside the objects .

// console.log(Object.values(users));

console.log(Object.entries(regular));

