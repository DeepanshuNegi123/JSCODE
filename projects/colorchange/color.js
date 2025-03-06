// const hello = document.querySelector('.this input');
// console.log(hello);

const heha =  document.querySelectorAll('.this'); // selecting .this class and storing in heha heha is a nodelist having similar functions as an array.
console.log(heha);


heha.forEach((hehe) =>  // applying foreach to the heha for accesing the values in it .

    {
        // console.log(hehe);
        //  element . addEventListner("event" ,function , useCapture);

        hehe.addEventListener('click',function(hello){
         
            // console.log(hello);
            alert(`button clicked  is ${hello.target.id}`); // when button clicked we will get alert on screen displaying id of the targeted element .
            console.log(hello.target); // helps us in getting the 
            console.log(hello);
            const color= hello.target.id;
            document.body.style.backgroundColor=color; // changing  the background color as per the selected button clicked .
            
        });

    });



