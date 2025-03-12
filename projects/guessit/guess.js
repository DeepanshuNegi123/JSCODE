const select = document.querySelector('#sub');
// console.log(select);


const randomnumber =  parseInt(Math.random() * 100 +1);
const userinput = document.querySelector('#number0');
const guesss = document.querySelector('.previous');
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
    document.querySelector('.warn').innerHTML = ("please enter a valid number inside the rannge");

   }
   else  if ( guess <1){

    document.querySelector('.warn').innerHTML = ("please enter a valid number inside the rannge");

   }
   else if (guess >100){

    document.querySelector('.warn').innerHTML = ("please enter a valid number inside the rannge");

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
    else if   (guess > randomnumber){
        display(`number is greater`);
    }




}


function displayguess(guess){
    userinput.value = '' ;
    guesss.innerHTML += `  ${ guess} ,`;
    numguess++;
    remain.innerHTML = `${11-numguess}`;
    
}


function display(message){
 // 
}



function newgame (){
    //
    const newGame = document.querySelector('#')
}


function endgame(){
    //
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h3  id = " newgame"> start new game</h2>`
    document.querySelector('.warn').appendChild(p);
    newgame();
}


