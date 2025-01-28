/* DATES IN JAVA SCRIPT
*/
// DATE IS OBJECT IN JAVASCRIPT .
// let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toUTCString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.getHours());
// console.log(typeof mydate);


let mytame= new Date("2025-01-15"); // day month date year hour minutes seconds 
console.log(mytame.toString());
let mytime = new  Date(2024, 1, 23); // IN JAVASCRIPT MONTHS STARTS WITH 0 INDEX .
console.log(mytime.toString());


// let mypresent = Date.now();
// console.log(mypresent);
console.log(Date.now()); // gives date in milliseconds 
console.log(Math.floor(Date.now()/1000));
let newpro = new Date();
console.log(newpro.getDay());
console.log(newpro.getFullYear());
console.log(newpro.getHours());
console.log(newpro.getMinutes());
console.log(newpro.getMonth()+1);
console.log(newpro.toDateString());
console.log(newpro.toTimeString());