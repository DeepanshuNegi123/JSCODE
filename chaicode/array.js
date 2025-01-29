/* ARRAYS IN JAVASCRIPT */
/* ARRAY IS A DATA STRUCTURE IN JAVASCRIPT */
/* ARRAYS ARE DIFFERNT FROM OBJECTS OBJECTS ARE DECLARED IN CURLY BRACES 
AND CONSIST KEY VALUE PAIR*/


/* In JavaScript, a primitive 
(primitive value, primitive data type) is data that is not an object and
 has no methods or properties. There are 7 primitive data types:

string
number
bigint
boolean
undefined
symbol
null

*/


/*
JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/

// arrays are stored inside the square brackets//
const myarr = [0,"hekk" , 24,3533,4,34,true];
console.log(myarr[3]);

// arrays in js create shallow copies .
myheros=myarr;
// console.log(typeof(myheros)); // object

// console.log(myheros[2]);

// myheros.push("45"); // adding inside the
// console.log(myheros);

// console.log(typeof(myheros)); // object

// console.log(myheros.pop()); // removes the last element of the array.
// console.log(myheros);

// myheros.unshift(78); // the unshift operator helps to add value to first position .
// console.log(myheros);

console.log(myheros.shift()); // removes and gives first element .
 

// includes will help to check if the provided number is present in the array or not .
console.log(myheros.includes(8)); 


console.log(myheros.indexOf(8)); // -1


const newarr = myarr.join();
console.log(newarr); 
console.log(typeof(newarr)); // string


// SLICE AND SPLICE 

console.log("A " , myarr);

const hello = myarr.slice (1,3); // provides the value from two ends .
console.log(hello);