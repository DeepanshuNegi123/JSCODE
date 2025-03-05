// const clock = document.querySelector('#banner');
// // console.log(clock);
// // let date = new Date();
// // console.log(date.toLocaleTimeString()); // prints the curent date.

// // clock.innerHTML = date;
// function startclock(){
// setInterval((hehe) => {
//     let date = new Date(); // get current date and time 
//     console.log(date.toLocaleTimeString()); // print date in a human readable form
//     clock.innerHTML=date;
    
// }, 1000);
// }



const first = document.querySelector("#banner");
const second = document.querySelector("#start");
const third = document.querySelector("#stop");

let isrunning = false; // Boolean flag to track the clock state

function strtclk() {
    if (isrunning) return; // Prevent multiple intervals
    isrunning = true; // Set running state

    function updateClock() {
        if (!isrunning) return; // Stop execution when isrunning is false

        let date = new Date();
        first.innerHTML = date.toLocaleTimeString(); // Update UI

        setTimeout(updateClock, 1000); // Call itself recursively
    }

    updateClock(); // Start the recursive loop
}

function stopclk() {
    isrunning = false; // Stop the loop
}

// Event Listeners
second.addEventListener("click", strtclk);
third.addEventListener("click", stopclk);

