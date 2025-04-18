// fetch 

//restful api - https://jsonplaceholder.typicode.com/

// docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch



// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'post',
//     body : JSON.stringify({
//         posted:2,
//         name:'hello',
//         email:"cryptic@gmail.com",
//         body:'this is awesom!'
//     })
// })
// .then(response => response.json()).then(find => console.log(find.text()))
// .then(data => console.log(data)). catch(error => console.log("error fouund"));



fetch('https://jsonplaceholder.typicode.com/comments/1', {
     
    method:'GET',  // need not to be specified default get is method .


}).then(response => console.log(response.text())) 
.then(data => console.log(data));



fetch('https://jsonplaceholder.typicode.com/comments',{

    method:'POST',
    headers:
    {
      'Content-Type':'application/json'

    },

    body: JSON.stringify( {body :"hello guys how are you all"})
})
.then(response => response.json())
.then(data => console.log(data));