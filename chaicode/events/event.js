// below method is not considered
//  suitable as it only defines
//  onclick functionality
//  on the eleemnt but denys 
// other propogation methods.


// document.getElementById('prayer4').onclick = ()=>{
//     alert('this is last image');
// }




 // ++++++++++++++++++++++++++++  EVENT PROPOGATION  +++++++++++++++++++++++++++++++++++++++//
 // HERE IN EVENT PROPOGATION WE GET TO KNOW ABOUT WAYS 
 // OF ACCESSING THE EVENT EITHER DIRECT TARGET OR FROM ROOT .
 // PARAMETER  THIRD OF EVENTLISTNER HELPS IN FINDING OUT  PROPOGATION .


 /*


document.getElementById('images').addEventListener('click',(e)=>{
    alert('images ul  is clicked ');
    console.log("images ul  is clicked");   

},true);  // HERE WE WILL GET FIRST IMAGES TAG OR THIS ONE 

document.getElementById('prayer1').addEventListener('click' , (event)=>{
console.log("clicked inside the ul");
alert('clicked inside the ul');
},true);   // ONCLICKING PRAYER1 ALSO WE WILL GET ALERT OF IMAGES .


document.getElementById('images').addEventListener('click',(e)=>{
    alert('images ul  is clicked ');
    console.log("images ul  is clicked");   

});

document.getElementById('prayer1').addEventListener('click' , (event)=>{
console.log("clicked inside the ul");
alert('clicked inside the ul'); // THIS WILL SHOW FIRST ON FIRST CLICKING THIS THEN SECONDLY IMAGES WILL BE SHOWED.
event.stopPropagation(); // this will end the bubbling at target only no going back to root .

});

document.getElementById('google').addEventListener('click',(e)=>{
e.preventDefault(); // link will not open on clicking 
e.stopImmediatePropagation();
},false ) ;

*/

document.querySelector('#images').addEventListener('click',(event)=>{
//    console.log(event.target);
   console.log(event.target.parentNode); // li 
  let remove = event.target.parentNode;
  if (event.target.tagName === 'IMG'){
    console.log(event.target.id);
    let remove = event.target.parentNode;
    remove.remove();

  }
  console.log(event.target.tagName); // like img 
 
//   remove.remove(); // helps in removing the whole parent node .

},false)