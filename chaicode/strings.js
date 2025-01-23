const name = "hello ";
const repocount = 45;
console.log (name+repocount); // here  if we write name it is (depracated) it means particular function library is not recommended to use .
console.log (name , repocount); 


/* below is the example of string interpolation and string is quoted inside the (BACKTICKS ) not  commas .*/
console.log(`hello my name is ${name} and my age is ${repocount}`);
// string interpolation 
/*
const name2= "my name ";
const gname = new String('hello guys');
console.log(gname[5]);
console.log(name2[2]);
console.log(name2.length);
console.log(gname.__proto__);
console.log(gname.length);
console.log(gname.toLocaleUpperCase()); // it will not change our original string to the upper case .
console.log(gname.charAt(5)); // helps in finding out the  character at perticular string.
console.log(gname.indexOf("h")); //  gives index of the character .


*/
const gname = "hellooo";
 const newstring = gname.substring(0,4);
//  console.log(newstring);
const namee = "HelloWorld";
const string = namee.slice(-4, 0); // Returns ""
console.log(string); // Output: ""
/* removing unexpected spaces */
const newstringone = "    name     .";
console.log(newstringone);
console.log(newstringone.trim()); // trim will remove the unexpected spaces .
const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=12";
url.replace('youtube','underpo');

console.log(url.replace('youtube','underpo')); //* replace will help to replace a  text in the string .*/
console.log(url.includes("com")) ;// returns boolean value  if the character is present or not .
