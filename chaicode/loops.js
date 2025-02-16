


// for (let index = 0; index<12; index++){
//     const element = index;
//     console.log(element);
// }


// for (let i = 0 ;  i <=10; i++){
//     // console.log(`outer loop value: ${i}`);

// for (let  j =0; j<=11; j++){
//     // console.log(`inner loop ${j}`);
// }
// }
// //break and continue 

// for (let a = 2; a<=20; a++){
//     console.log("value of a is " , a);
//     if (a == 7){
      
//         continue;
//     }
// }


// do while and while 

let index = 0;

while (index<=22){
// console.log("yes");
// console.log(`this  is ${index}`);
index++;
}


let array = ['hello' , 'world' , 'iam ' , 'cryptic'];

let arr = 0;
while(arr<array.length){
 //console.log(array[arr]);
arr++;

}



let i =0;
do {


// console.log("underworld");
i++;

}

while(i<20);





// for of loop .
// no need for index management in loop 

const emmy  = [1,2,4,3,4,6];

for (const val of  emmy ){
    // console.log(val);
}

const greeting = "hello world ";
for (const greet of greeting){
    // console.log(greet);
}


// maps in javascript 
const map = new Map();
map.set('uk' ,"heha");
map.set('usa' , "united states of america ");

// console.log(map);

const myobj = {

    'game' :'heha',
    'game2' : "hoho",
    'game3' :"hehhe"
}

for (const key in  myobj){
    // console.log(myobj[key]); // for accessing values .
}


// const coding = ['js' , 'for' ,'heha','under'];

// const values = coding.forEach((item)=>
//     {console.log(item)});


let  nums = [1,2,3,4,5,6,7];
nums = nums.filter( (num)=> {return num>4})
// console.log(nums);
const arrays = [];
const under = [3,4,6,7,8,89];

under.forEach((a) => {
       if (a>6){
        arrays.push(a);
       }
});
// console.log(arrays);



const books = [

    { name: "The Great Gatsby", publishYear: 1925, author: "F. Scott Fitzgerald", rating: 4.4 },
    { name: "To Kill a Mockingbird", publishYear: 1960, author: "Harper Lee", rating: 4.8 },
    { name: "1984", publishYear: 1949, author: "George Orwell", rating: 4.7 },
    { name: "Moby-Dick", publishYear: 1851, author: "Herman Melville", rating: 4.2 },
    { name: "Pride and Prejudice", publishYear: 1813, author: "Jane Austen", rating: 4.6 },
    { name: "The Catcher in the Rye", publishYear: 1951, author: "J.D. Salinger", rating: 4.3 },
    { name: "The Hobbit", publishYear: 1937, author: "J.R.R. Tolkien", rating: 4.8 },
    { name: "Fahrenheit 451", publishYear: 1953, author: "Ray Bradbury", rating: 4.5 },
    { name: "Brave New World", publishYear: 1932, author: "Aldous Huxley", rating: 4.6 },
    { name: "The Alchemist", publishYear: 1988, author: "Paulo Coelho", rating: 4.7 }

];

const userbooks = books.filter((bk) => bk.rating>4.7);
const username = books.map((bl) => bl.name);
// const loop = books.forEach((bm) => console.log(books.author));
// console.log(username);
// console.log(userbooks);
// console.log(loop);


const namee = [ 1,4,5,6,7,7,68,7,8];
const  hello = namee.map((num)=> num + 10); // helps in applying calculations to the elements in the array.
// console.log(hello);


// CHAINING IN JS 
// combining the functions .
const number = namee
.map((numee)=>numee *10)
.map((numee) => numee+10)
.filter((numee) => numee>=70 );
// console.log(number)



// reduce in js 

// reduce is also a callback fucntion .

// const mynumber = [1,2,3];
// const total = mynumber.reduce(function (acc , value){console.log(`acc - ${acc} and value: ${value}`)
//     return acc + value ;
// } , 0)
// console.log(total);


//  const mytotal  = mynumber.reduce((acc, value)=>{return acc+value},0);
//  console.log(mytotal);



const cart = [

{
    name : "heha",
    id: "123",
    arrival:"arriving in 34 days",
    price:34
    
},
{
    name : "hehaa",
    id: "1236",
    arrival:"arriving in 340 days",
    price:330
    
},
{
    name : "hehaaa",
    id: "123456",
    arrival:"arriving in 304 days",
    price:880
}

];

const variable = cart.reduce((accu, number)=>{ return accu+number.price},0);
console.log(variable);