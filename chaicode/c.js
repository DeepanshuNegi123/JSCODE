

// STRINGS ARE IMMUTABLE IN JAVASCRIPT

// // // data typees 
// // /*
// // console.log(45);
// // //alert(3+3); //  this will show error as we are running code in nodejs not browser it does not contain engine support 
// // //The error occurs because document.write() is part of the browser environment's DOM (Document Object Model) and is not available in Node.js.
// // //  Node.js is a server-side JavaScript runtime that does not include a browser environment or the document object.
// // // document.write (45); 

// // let name = "hello";
// // let age = 24;
// // let isloggedin = false ;

// //  // data types in  the javascript 
// // // number =>2 to power 53
// // //bigint
// // //string => " "
// // //boolean=> false or true
// // //null => stand alone value 
// // // undefined => not assigned 
// // // symbol => unique 



// // // object  

// // console.log(typeof"helo");
// // console.log(typeof null); // here the type of null is object 
// // console.log (typeof undefined); // type if undifined 
// // */

// // // 
// // console.log("a" + 1);
// // console.log("A"-1);  // NAN NOT A NUMBER 
// // console.log("NAME" + '200');
// // console.log(typeof('2'+2+'2')); //string
// // console.log(('2'+2-'2'));
// // console.log(typeof('2'+2-'2'));

// // const a = {};
// // const b = {

// // name:'hello'


// // }

// // const c = {

// //     name:'wolrd'
// // }

// // a[b]= {
// //     name:'human'
// // }

// // a[c] ={

// //     name:'singh'
// // }
// // console.log(a[b]);
// // console.log(a[c]);

// const y = 0;
// const z = false;
// console.log(y==z); // true; cause here we compares the value of the input;
// console.log(y===z);// false ;  here we compare the type and value both.
// console.log(true - false ); // 1;
// console.log(false-true); // -1
// console.log(true-"df"); // NAN
// console.log(true+"heh");// trueheh

// // WHY NAN != NAN " because nan defines a indetermined value hence it cannot be considered equal to itself."
// console.log(NaN==NaN); // fasle
// console.log(NaN===NaN);//false

// // map works on the array 
// const arr= [1,234,35,35,3,55,5];
// arr.map((e)=>{     // map here manipulates and brings new array.
//     console.log(e*2);
// })


// let namee = 'js';
// namee[1]= 'q';
// console.log(namee[1]);  // no change 
// console.log(namee); 


let a = 10;
let b = a++;
console.log(b); // 10

console.log(a+b);//21

let num = 1;
// const sum = ++num + num++;
console.log(++num + num++);
// console.log(sum);  //4


