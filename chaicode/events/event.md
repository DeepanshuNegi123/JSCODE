``` javascript and events

// document.getElementById('prayer4').onclick = ()=>{
//     alert('this is last image');
// }


document.getElementById('id').addEventListner('eventtype',function(e){

} , false or  true ); 
// here we have a format of eventlistner  and has a third parameter also .
// here e is event object .
// console log (e)
 // e is a pointer event 

 // what to learn  ?
 // type of events , timestamp , defaultprevented  , target , toElement , srcElement , currentTarget 

 // clientX , clienty ,screenX , Screeny
 // altkey , ctrlkey , shiftkey , keycode
```



``` JAVASCRIPT

 # Event propogation ?



 // ++++++++++++++++++++++++++++  EVENT PROPOGATION  ++++++++++++++++++++++++++++++++++++++//


 // HERE IN EVENT PROPOGATION WE GET TO KNOW ABOUT WAYS 
 // OF ACCESSING THE EVENT EITHER DIRECT TARGET OR FROM ROOT .
 // PARAMETER  THIRD OF EVENTLISTNER HELPS IN FINDING OUT  PROPOGATION .



Event propagation is the process by which an event (like a click or a keypress) travels through the DOM (Document Object Model) tree when it is triggered.

There are two main phases of event propagation:

1. Bubbling Phase:
In the bubbling phase, the event starts at the target element (the element that was clicked or interacted with) and then bubbles up to its parent elements all the way up to the root element (like <body> or <html>).

For example, if you click on a button inside a div, the event will first trigger the button's click event, then the div's, and so on, moving upwards through the parent elements.


2. Capturing Phase (Trickling Phase):
In the capturing phase, the event starts from the root element (like <html>) and trickles down to the target element. This phase is less commonly used, but it can be activated by setting the true argument in addEventListener().


In the capturing phase, the event reaches the root first, and then it travels down to the target element.




// CAPTURING 
document.getElementById('images').addEventListener('click',(e)=>{
    alert('images ul  is clicked ');
    console.log("images ul  is clicked");   

},true); 

document.getElementById('prayer1').addEventListener('click' , (event)=>{
console.log("clicked inside the ul");
alert('clicked inside the ul');
},true);   // ONCLICKING THIS ID INSTEAD OF GETTING 'CLICKED INSIDE URL ' WE WILL GET 'IMAGES UL IS CLICKED ' ALERT OF UPPER ONE . DUE TO CAPTURING .



// BUBBLING OF EVENT .

document.getElementById('images').addEventListener('click',(e)=>{
    alert('images ul  is clicked ');
    console.log("images ul  is clicked");   

});



document.getElementById('prayer1').addEventListener('click' , (event)=>{
console.log("clicked inside the ul");
alert('clicked inside the ul');
event.stopPropogation();
event.target.tagName(); // tagname will provide us 
}) // ON CLICKING THIS  ID WE WILL GET ALERT ('CLICKED INSIDE THE UL ') THEN NEXT ALERT OF 'IMAGES UL IS CLICKED '.

// TagName()

In JavaScript, tagName is a property of an
 HTML element that returns the tag name of the 
 element as a string. It provides the name of 
 the element, which corresponds to the type of
 
 HTML tag used to create that element (like div, p, span, a, etc.).
```
