// function main() {
//     const sum = getSum(5, 6)
//     console.log(`The sum is ${sum}`)
//   }
  
//   function getSum(a, b) {
//     return a + b
//   }
  
//   main()


//   // q2
//   function getLabel(numStars) {
//     // ?
//   }
  
//   // don't touch below this line
  
//   function test(numStars) {
//     console.log(`Stars=${numStars}, The movie was ${getLabel(numStars)}`)
//   }
  
//   test(10)
//   test(9)
//   test(8)
//   test(7)
//   test(6)
//   test(5)
//   test(4)
//   test(3)
//   test(2)
//   test(1)
//   test(0)


//   /* FUNCTION  ORDERING */
//   console.log(getLabel(3))
// // prints 'awful'

// function getLabel(numStars) {
//   if (numStars > 7) {
//     return 'great'
//   } else if (numStars > 3) {
//     return 'okay'
//   } else {
//     return 'awful'
//   }
// }


// // Q4
// console.log(getLabel(3))
// // prints 'awful'

// function getLabel(numStars) {
//   if (numStars > 7) {
//     return 'great'
//   } else if (numStars > 3) {
//     return 'okay'
//   } else {
//     return 'awful'
//   }
// }

// // Q5
// function getUser() {
//     return 'name@domain.com', 21, 'active'
//     // DON'T DO THIS
//     // only returns 'active'
//   }


// // MULTIPLE RETURN VALUES .
//   function isClean(review) {
//     let clean = true
//     if (review.includes('dang')) {
//       clean = false
//     }
//     if (review.includes('shoot')) {
//       clean = false
//     }
//     if (review.includes('heck')) {
//       clean = false
//     }
//     return clean, review
//   }
  
  
//   // Don't edit below this line
  
//   function test(review) {
//     const clean = isClean(review)
//     console.log(`'${review}' is clean: ${clean}`)
//   }
  
//   test('avril lavigne has best dang tour')
//   test('what a bad film')
//   test('oh my heck I hated it')
//   test('ripoff')
//   test('That was a pleasure')
//   test('shoot! I cant say I liked it')



//   // FUNCTOION AS VALUES 
//   function sayHello() {
//     console.log('Hello there!')
//   }
  
//   function doTwice(f) {
//     f()
//     f()
//   }
  
//   doTwice(sayHello)
//   // Prints:
//   // Hello there!
//   // Hello there!


// // Q6

//   function onReview(reviewText, callbackFunction) {
//     console.log(`Review: ${reviewText}`)
//     // ?
//   }
  
//   function main() {
//     const ohBrotherWhereArtThouReview = 'Stellar movie!'
//     const twentyTwelveIceAgeReview = 'Not my favorite'
//     // ?
//   }
  
//   // Don't edit below this line
  
//   function saveToDatabase(reviewText) {
//     console.log(`Saving '${reviewText}' to database...`)
//   }
  
//   main()



//   // CALL BACK USAGE 

//  /* When callbacks are needed in application code, they are usually being passed to functions imported from a library or framework. Applications rarely define their own functions which accept callbacks, while libraries and frameworks commonly do because they need to stay application agnostic.

// For example, the requestAnimationFrame() is part of every web browser's JavaScript API. It needs to accept a callback because it needs to be able to run an arbitrary piece of code the next time the browser redraws the webpage. It can't hard-code the behavior because it needs to support every web application imaginable.

// However, when you are writing your very specific app, you can usually "hard code" what happens next - you don't need to write functions that callback to any other function... usually.*/

// //SSCOPES IN JS 

// /*Scope deals with where values and functions can be accessed in your code. For example, you'll likely write code at some point, or see code at some point where the bug is related to a variable being "out of scope".

// Some "scopes" include:

// Global scope - Values in the global scope are accessible everywhere
// File or module scope - Values can only be accessed from within the same code file
// Function scope - Values can only be accessed within the same function
// Block scope - Values can only be accessed within that { ... } codeblock
// */
// function getCar() {
//     const car = 'Volvo';
//     // code here can use 'car'
//   }
  
//   // code here can NOT use 'car'


//   const car = 'Volvo'
// // code here can use 'car'

// function getCar() {
//   console.log(car);
//   // code here CAN use 'car'
// }




// // SCOPE ON YOUR OWN 
// function isMovieValid(title) {
//     function movieLength(title) {
//       const len = title.length
//       return len
//     }
  
//     // don't touch above this line
  
//     movieLength(title)
//     return len > 2
//   }
  
//   // don't touch below this line
  
//   function test(title) {
//     const valid = isMovieValid(title)
//     console.log(`'${title}' is valid: ${valid}`)
//   }
  
//   test('The League of Extraordinary Gentlemen')
//   test('Hunt for Red October')
//   test('007')
//   test('')
//   test('12')

  

//   // SCOPE FINDING 
//   const truck = 'CyberTruck'

// function getCar() {
//   const car = 'Volvo';
// }

// function getScooter() {
//   const scooter = 'Razor';

//   function getBike() {
//     const bike = 'Huffy';
//   }
// }



// // Fat Arrow Functions

// /*Fat arrow functions, or "arrow functions" are another way to define functions in JavaScript. 
// Arrow functions are newer than the function keyword, however, unlike the let/var issue, 
// arrow functions are sometimes more appropriate, not always.*/

// const add1 = function(x, y) {
//     return x + y
//   }


//   // FAT ARROW
//   const add = (x, y) => {
//     return x + y
//   }


// // 
//   function isSuperReview(authorAccountAge, authorReputation) {
//     if (authorAccountAge > 2) {
//       return false
//     }
//     return authorReputation > 100
//   }
  
//   // don't touch below this line
  
//   function isFunctionType(f) {
//     // eslint-disable-next-line no-prototype-builtins
//     return f.hasOwnProperty('prototype')
//   }
  
//   if (isFunctionType(isSuperReview)) {
//     console.log('isSuperReview is a classic function')
//   } else {
//     console.log('isSuperReview is a fat arrow function')
//   }
  
//   const isSuper = isSuperReview(50, 200)
//   console.log(`The review is super: ${isSuper}`)
  
//   const isSuper2 = isSuperReview(1, 200)
//   console.log(`The review is super: ${isSuper2}`)


// DIFFERNECE IN FAT ARROW AND FUNCTIONS
  
/*
Fat arrow functions are always declared as variables - usually consts, while the function keyword may or may not be a variable.
Fat arrow functions handle object scoping in a more intuitive way (we'll talk about this in later chapters)
A few other minor differences
If you're interested in reading about the differences in more detail, you can do so here. 
The takeaway for now is that you should be familiar with both syntaxes, and use the one you prefer. 
We'll talk more about the biggest difference (object scoping) in the objects chapter.*/




// var foo = "🦁 hlo";

// function showname(){

//     foo = "😖";
//     return ;

//     function foo(){};

// }

// showname();
//console.log(foo);



// create a function which helps in  powering a integer .


function power(a , b){
var result = 1;
for (var i = 1; i<=b; i++)
{
   result *= a;

}
return result ;

}
// console.log(power(10,5));


// usage of spread operator as rest operator .

function operator (...input){ // rest operator help us in taking input as array without passing arguments.
  var sum = 0;
  for (var x =0; x<input.length; x++) // go through the array 
{
sum += input[x];
}
return sum;
}
//console.log(operator(34,23,67));  // gives us an array


// usage of operator spread.

function operator1(value,value1, ...num1){
return num1;
}

//console.log(operator1(45,34,55,44,77)); // gives us only the input  at last .



// ARROW FUNCTIONS 
const user = { // object 
  username : "myname ",
  price:"5500",
  message: function(){ // function 
//     console.log(`${this.username} ,  welcome to my website.`);
// console.log(this);

  }
}
// user.message();
// user.username="hunnysama";
// user.message();

// console.log(this); // empty object 


// user.message();


// function chai(){
//   const namee = "hurry";
// console.log(this.namee);  // undefined 
// }

// chai();



// ARROW FUNCTION 

// const chai = function hee(){
//   let username = "hloworld";
//   console.log(this.username);

// }
//chai();


// const chai = () => {
//   let username = "hello"
//   console.log(this.username);
// }

// chai();

// PURE ARROW FUNCTION //

// const hello =(inside is parameter)=>{ here fucntion }

const name  = (num1 , num2 )=>{
  return num1+num2; // we have to write return on including braces curly
}

let under = name;
// console.log(under(2,3));

const hum = (a , c)=> a+c;  // dont need to write return when nothing is included .
// console.log(hum(45,66));

const hume = ()=> ({
username:"helloworld"

}) 
hume();



// IMMEDIATELY INVOkeD FUNCTIONS EXPRESSIONS 

(function invoked(){  // named iife
  // console.log("this is invoked function .");
  })(); // this is iife
  
  (()=>{
    // console.log("hwllo workd ")
  })  // using arrow function .
  ();  // unnamed iife
  
  ((...myname)=>{
      // console.log(`hello myname is ${myname}`)
  })("cryptic");

  

  /// ARROW FUNCTIONS
const add = (a,b)=>{
  return a+b;
}
console.log(add(2,5));



// iife 
( () =>{
  console.log("hwllo");
}) ();   // iife 


// spread operator .
const hllo = (x,y,z)=>{
  console.log(x+y+z);
}
hllo(23,45,67);



//spread operator .

const heha = (...args)=>{


for (let a = 0 ; a<args.length; a++){
  console.log( args[a]);
}
}
heha(23,45,46,46,46,6,6,56);