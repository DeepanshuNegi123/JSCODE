/*  OBJECTS ARE DECLARED OUTSIDE THE CLASS , 
2. DEFAULT CONSTRUCTORS 
3. PARAMETRISED CONS
4.  STATIC AND DYNAMIC IMPLEMENTING 
5. 


// var namee = ["name" , "crystal" , "mario"];
// var array ={"a" : 4 , "b" : 2};
// console.log(namee );
// console.log(namee.length);
// console.log(namee.sort());
// console.log(array["a"]);



// var username ={ // wwe are encapsulating the differnt prooperties in the username //
//    email:"depanshu98788",
//    name:"cryptic",
//    class :"6th",
//    break: "hello",
//    login(){
//     console.log(username.email,'has logged in !'); //this refers to the object present here inside the var .
//    },
//    logout(){
//     console.log(username.email,'has logged out !');
//    }
// };


// console.log(username.login()) ;
// console.log(username.logout());
// // both can be used in morder js //
// // console.log(username["break"]);
// // console.log(username.break);
// // console.log(username);


// username.name = "javen ";
// console.log(username.name);
// console.log(username['name']);

// var prop = 'name';
// console.log(username[prop]);  // we can transfer the strings to the prop or any other variables//
// // dynamically finding  the value // 
// console.log(username.prop);
//  // undefined  why it didnt worked because js looks for a property in the username which is named as prop .


// // where as username[prop], in js eavaluates the variable prop to get value of name 
// // static property => compile time / dynamic property => run time .

// var username2 ={ // wwe are encapsulating the differnt prooperties in the username //
//     email:"ransh98788",
//     name:"cryptic",
//     class :"7th",
//     break: "helloeoo",
//     login(){
//      console.log(username.email,'has logged in !'); //this refers to the object present here inside the var .
//     },
//     logout(){
//      console.log(username.email,'has logged out !');
//     }
//  };


// var username3 ={ // wwe are encapsulating the differnt prooperties in the username //
//     email:"ransh98788",
//     name:"ransh",
//     class :"8th",
//     break: "heleo",
//     login(){
//      console.log(username.email,'has logged in !'); //this refers to the object present here inside the var .
//     },
//     logout(){
//      console.log(username.email,'has logged out !');
//     }
//  };



// const  person ={
//      name : ["bubu" , "subu"],
//      age: 23,
//      bio: function(){
//          console.log(`${name}`);
//      }
// };




/* class in javascript are like blue prints */


// "new " keyword creates a new empty object{}

/*
class user {  // class user 

    // constructor (){ // method in class that initializes object properties 
    // // when a new instance of class is created .

    //       this.email ="hello87878";
    //       this.name = "heee hee";
    // }
    email ="hello87878";
    name = "heee hee";
}
var userone = new user ();
var usertwo = new user();
console.log(userone);
usertwo.email = "cryptic94594";
usertwo.name = "deepanshu";
console.log(usertwo); 
*/
// above we declared two new object in userone and usertwo.
// without constructor i have to declare every time new properties of object.

// new user () is object here . having properties and properties has values inside :




// class gani{


//     constructor(){ // default constructor 
//         this.email="deepanshu9787",
//         this.name= "cryptic",
//         this.item= "song"
//     }

   

// }

// var first = new gani();
// var second = new gani();
// second.email = "jdjsc8y8"; // here we have to modify the object's properties  .
// second.name = "dfbsb";

// console.log(first);
// console.log(second);



// PARAMTRISED CONSTRUCTOR .


// class ganni {

//     constructor (email, name , item){ // parameterised constructor 
//             this.email = email; // assign the values passed on to the constructor .
//             this.name = name;
//             this.item = item;
//     }

    
//     // rembermber the objects are declared outside the class.
// }

// // var user = new ganni();
// var user2  = new ganni ("djfnsf", "jbchsch","bdhb");

// // console.log(user);
// console.log(user2);






/* METHOD CHAINING*/




/*Method chaining is a technique where multiple methods 
can be called on an object in a single line of code. 
Each method in the chain performs some operation and 
then returns the object itself (typically this), 
allowing the next method
 in the chain to execute on the same object.*/


/*Reduces the need to write repetitive variable references,
 making the code cleaner and more readable.*/


class chain {

    constructor(name , email , age ){
      
        this.name= name ;
        this.email = email;
        this.age= age ;
        this.score = 0;
        }
        login(){  // login function 
            console.log(this.email , "has loged in!");
            return this;
        }

        logout (){
            console.log(this.email,"has logged out !");
            return this;
        }

        updatescroll(){
          this.score +=1;
        //   console.log(this.score, " score has been incresed byone !");
            return this;

        }
}
var person2 = new chain("dkfnkd","kfnd44", "fknf");
var person = new chain("deepanshu ", "dfsdffs888","sjfbjs");


// console.log(person);
// console.log(person.login());
// person2.login();
// person.updatescroll();
// console.log(person.updatescroll());


// method chaining //
// person.login();
// person.updatescroll();
// person.logout();

/*instead of writing again and agin we can write at one time .*/

person.login().updatescroll().logout();
