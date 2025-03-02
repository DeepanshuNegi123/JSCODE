
``` HTML
 HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>color</title>
   
    <link rel="stylesheet" href="color.css">
</head>
<body>
  <header>
    <h2 style="border: solid black 2px; padding: 8px;">Home</h2>
    <h2 style="border:solid black 2px; padding: 8px;"> Youtube channel</h2>
  </header>

  <div class="this">
    
  
    <input type="button" name="button"id="grey" class="button">
    <input type="button" name= "button1"  id = "white" class="button">
    <input type="button" name="button2" id = "yellow" class="button" >
    <input type="button" name= "button3" id="blue" class="button">
    <input type="button" name= "button4" id="purple" class="button">

    

  </div>
  <script src="color.js"></script>
</body>
</html>
```



``` javascript
JAVASCRIPT

const heha =  document.querySelectorAll('.button');
console.log(heha);


heha.forEach((hehe) => 

    {
        // console.log(hehe);
        //  element . addEventListner("event" ,function , useCapture);

        hehe.addEventListener('click',function(hello){ // capturing the event click on hehe  storing that in a function .
         
            // console.log(hello);
            alert(`button clicked  is ${hello.target.id}`); // provides us the target id 
            console.log(hello.target); // helps us in getting the 
            console.log(hello);
            const color= hello.target.id; 
            document.body.style.backgroundColor=color;  //change the backgroundcolor as per the clicked id .
            
        });

    });
```

``` CSS
CSS

body{
    color: black;
    background-color: rgba(245, 245, 245, 0.71);
}
header{
    display: flex;
    justify-items: center;
    justify-content: center;
    gap: 44px;
    background-color:white;
}

.this{
justify-self: center;
       padding: 150px;
       display: flex;
       flex-direction: row;
     column-gap: 2cap;
       
     

}

.button{
    height: 150px;
    width: 150px;
   
}


#grey{
    background-color: grey;
}
#white{
    background-color: white;
}
#yellow{
    background-color: yellow;
}
#blue{
    background-color: blue;
}
#purple{
    background-color: purple;
}
```