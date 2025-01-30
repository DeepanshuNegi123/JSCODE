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
// console.log(myheros.includes(8)); 


// console.log(myheros.indexOf(8)); // -1


const newarr = myarr.join();
// console.log(newarr); 
// console.log(typeof(newarr)); // string


// SLICE AND SPLICE 

console.log("A " , myarr);
const myn1= myarr.slice(3,6);
const myn2= myarr.splice(3,6);
// console.log(myn1);
// console.log(myn2);
const hello = myarr.slice (1,3); // provides the value from two ends .
// console.log(hello);

const newa = [34,45,5,4,5,4];
const newb = ["hello" , "world " , "hi "];
const newc = newa.join();
// console.log(typeof(newc)); //  string type

const fun = ["hi " , "hllo", "buffalo ", "lelo "];
const funn = [2,3,4,55,566,5,6];
// console.log(fun.slice(1,3)); // print till 2nd index 
// console.log(fun);

// SPLICE  REMOVES THE INDEX PROVIDED IN THE ARRAY .
// console.log(fun.splice(1,2));  // here it will print till the range 2nd index also but splice 
// console.log(fun);






// DAY 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const champion =  ["thor" , "america" , "makdi man "];
const champion2 = ["aqua man " , "superman " , "batman"];
// console.log(champion.push(champion2)); // lenght of new arry.
// console.log(champion.length);
// console.log(champion[3][0]); 
console.log(champion.concat(champion2));    // this  combines two array without modifying the previous one .
console.log(champion);


/// SPREAD OPERATOR ...
console.log(... champion,  ... champion2); // can give one or more arrays .

// FLAT FUNCTION
const die = ['djfbd','dfdv','dscss'];

const die2 =  ['ddx3','dxcd' ,'343', 'cddcw'];

console.log(die.push(die2));
console.log(die);
const new3 = die.flat(Infinity);
console.log(new3); // remaoves the inside arrays .


console.log(Array.isArray("helloworld"));
console.log(Array.from ("jhatu"));


