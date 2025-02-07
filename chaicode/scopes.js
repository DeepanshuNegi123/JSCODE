// let a = 10;
// const b = 29;
// var c = 30;
// console.log(a , b ,c);

// {} curly braces are called scopes .

// outside is called global scope .
var c = 300;

let a = 500;

if (true){ // code inside the block or function is called block scope.
let a = 3300;
const b = 29;
var c = 30;
// console.log(a);
}
// console.log(a);

// console.log(a);
// console.log(c);
// console.log(c);




// PARENT CHILD FUNCTION RELATION 
// CHILD FUNCTION CAN INHERIT THE PARENT FUNCTION PROPERTIES .



function one(){

const username = "myname";
// return username;
console.log(username);
    function two(){
        const website = "youtube";
        // return website;
        console.log(username);
        // console.log(one());  
    }
    // console.log(website);  // will give error as we are accesing objects inside the scope .


two();
}

one ();

