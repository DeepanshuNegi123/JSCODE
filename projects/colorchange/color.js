// const hello = document.querySelector('.this input');
// console.log(hello);

const heha =  document.querySelectorAll('.button');
console.log(heha);


heha.forEach((hehe) => 

    {
        // console.log(hehe);
        //  element . addEventListner("event" ,function , useCapture);

        hehe.addEventListener('click',function(hello){
         
            // console.log(hello);
            alert(`button clicked  is ${hello.target.id}`);
            console.log(hello.target); // helps us in getting the 
            console.log(hello);
            const color= hello.target.id;
            document.body.style.backgroundColor=color;
            
        });

    });



