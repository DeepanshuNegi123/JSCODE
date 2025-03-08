const select = document.querySelector('#sub');
// console.log(select);

// let a = Math.random()*100;
// let compare = Math.floor(a+1);
// console.log(Math.floor(a+1));

// select.addEventListener('click',(hehe)=>{
    
//     let b = document.querySelector('#number0').value;
//     if (b < 1 ||  b>100){
//         document.querySelector('.warn').innerText = "enter a valid input inside  a range .";
//     }
//     for (let i = 1; i <=10 ; i++){
//      if (b === compare){
//         document.querySelector('.warn').innerText = "congratulations you have guessed the correct number.";
//      }
    
//     }
   
// })
const randomnumber =  parseInt(Math.random() * 100 +1);
const userinput = document.querySelector('#number0');
const guess = document.querySelector('.previous');
const remain = document.querySelector('.guessremain');

const p = document.createElement('p');
let previous = [];

let numguess = 1;
let playgamae = true;

if (playgamae){
   select.addEventListener('click' , (he)=>{
    he.preventDefault();
    const input = parseInt(userinput.value);
    console.log(input);
    validate(input);
   })
}


function  validate (guess){
   // to find if the number is valid or  not .
   if (isNaN(guess)) {
    document.querySelector('.warn').innerHtml = ("please enter a valid number inside the rannge");

   }
   else  if ( guess <1){

    document.querySelector('.warn').innerHtml = ("please enter a valid number inside the rannge");

   }
   else if (guess >100){

    document.querySelector('.warn').innerHtml = ("please enter a valid number inside the rannge");

   }
   else {

    previous.push(guess);
    if (numguess===11){
   displayguess(guess);
   display(`game is over you have reached limits the number  was  ${randomnumber}`);
   endgame();
    }

    else {

        displayguess(guess);
            check(guess);

        
    }

   }

}


function check(guess){
    // 
    if (guess === randomnumber){
     display(`you guessed it right ${randomnumber} `);
     endgame();
    }
    else if (guess < randomnumber){
        display(`number is low`);
    }
    else if (guess > randomnumber){
        display(`number is greater`);
    }

    else {

    }



}


function displayguess(guess){
    userinput.value = '';
    guess.innerHtml += `$`
    
}


function display(message){
 // 
}



function newgame (){
    //
}


function endgame(){
    //

}

