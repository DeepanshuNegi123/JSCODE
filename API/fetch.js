// fetch 

//restful api - https://jsonplaceholder.typicode.com/

// docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch('https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch')
.then(response => response.json())
.then(data => console.log(data))