const number = 600; // 600
const balance = new Number (700); // new object defined .
console.log(balance); // [number : 700];
console.log(balance.toFixed(4));  // decimal value to be printed.
const other = 123.3434;
console.log(other.toPrecision(2));


const hundred  = 10000;
// for converting numbers to more understandable form .

console.log(hundred.toLocaleString('en-IN')); // under this we have indian standard  wrtten .

/*+++++++++++++++++++++++++   MATHS LIBRARY ++++++++++++++ */

console.log(Math); // math is an object .
console.log(Math.abs(-5)); // absolute converts negatives to positives .
console.log(Math.round(4.5)); // roundoff the nearest greatest .
console.log(Math.ceil(4.2)); // roundoff to the greater .
console.log(Math.floor(5.8));  //always provide lower value.
console.log(Math.pow(3,3)); // pow(x,y) x raises to power y .
console.log(Math.max(43,43,353,53,3,55,3,5,5,35)); //provide the largest among.
let a = Math.floor(Math.random()*10)+1; // RANDOM HAS VALUE ALWAYS BETWEEN 0 - 1 .


console.log(a);
console.log(Math.ceil(a));
const max = 23;
const min =  10;

console.log(Math.floor(Math.random() * (max - min +1)) + min);

