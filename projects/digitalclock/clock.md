``` html 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital-clock</title>
</head>
<body style="background-color: rgb(64, 57, 66);">
    <nav>
        <a href="/" aria-current="page">home</a>

    </nav>

    <div class="center">
        <div id ="banner" style="display: flex; justify-self: center; padding: 30px; flex-direction: column; align-items: center; margin-top: 35%; border: solid 1px black;
        border-radius: 8px;  background-color:rgba(165, 126, 42, 0.991) ; font-size: 35px; color: azure;
"><span>
            your local time
        </span></div>
        <div class="ss" style="display: grid; grid-template-columns: 1fr 1fr ; justify-items: center; margin-top: 4%;">

        <!-- <button  type ="submit"  class="start" style="border: 1px solid black; padding: 20px; background-color: grey;"> start</button>
        <button  type = "submit" class="stop" style="border: 1px solid black; padding: 20px; background-color: grey;">stop</button> -->

<div class="start">
        <input type="button" name = "start" id = "start"style="border: 1px solid black; padding: 20px; background-color: grey;" value="start"> 
</div>
<div class="stop">
        <input type="button"  name = "stop"  id = "stop" style="border: 1px solid black; padding: 20px; background-color: grey;" value="stop"> 
</div>
        </div>
    </div>
    <script src="clock.js"></script>
</body>
</html>

```


``` javascript

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

        let date = new Date(); // provides a date inbuilt function Uses the system clock to get the current time. not an api feature of ecmascript .
        first.innerHTML = date.toLocaleTimeString(); // Update UI

        setTimeout(updateClock, 1000); // Call itself recursively
    }

    updateClock(); // Start the recursive loop
}

function stopclk() {
    isrunning = false; // Stop the loop
}

// Event Listeners
second.addEventListener("click", strtclk); // after click a function will be called strtclk 
third.addEventListener("click", stopclk);


```

