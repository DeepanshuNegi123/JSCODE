// memory allocation in js 

// AS a programmer we have  to  allocate and de-allocate the memory 
// inside the program but in today's world 
// we have languages that dont give compllete 
// freedom of garbage collection and garbage elimination .


// MEMORY MANAGEMENT IN JS 

// primitive and non primitive type of data in js 



//STACK MEMORY(PRIMITIVE ) , HEAP MEMORY(NON-PRIMITIVE)

// whenever a meory in stack is accesed we get its copy .
// whenever  a  var or obbject is accesed from heap we get refernece.

let memory = "hello world";
let another= memory;
console.log (another); // here hello wolrd will me prited as stack is implemented .
another = "bodi bada ";
console.log(another); // here it cahnged to bodi bade 
// hence inside the another we had a copy of hello world  and memory not its address or original value;


// under this is heap data ;
 let user = {
    email:"@gmail.com",
    phone :97868,
    upi : "this that"
}


// below example will help us understand the heap and reference working .
let user2 = user ;   //  user2 equals the user  
user2.phone = 84939; // we updates the user2 phone -> new number 

console.log(user); // also in user we have same thing updated 
user.email="underpi"; // update in user 
console.log(user2); // updated in the user2 
// hence from above example we come to know about the usage of reference and memory management int he 
// 


/* SUMMARY -  IN JS  PRIMITIVES DATATYPES ARE STORES INSIDE THE STACK 
AND NON - PRIMITIVES ARE STORED INSIDE THE HEAP DATA STRUCTURES AND 
THIS HELP US TO MANAGE MEMORY EFFECIENTLY AS SHOWN ABOVE .


IN JS GARBAGE COLLECTION IS USED FOR MEMORY MANAGEMENT */

