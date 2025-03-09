// below method is not considered
//  suitable as it only defines
//  onclick functionality
//  on the eleemnt but denys 
// other propogation methods.


// document.getElementById('prayer4').onclick = ()=>{
//     alert('this is last image');
// }

document.getElementById('prayer0').addEventListener('click',(e)=>{
    alert('image is clicked ');
    console.log(e.timeStamp); // gives  us timestamp of the clicked images .
    

})