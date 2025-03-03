
``` javascript

 const form = document.querySelector('form');
 console.log(form);

 
 form.addEventListener('submit',function(hehe){
    hehe.preventDefault();
    // const hello = hehe.target.id;
    // console.log(hello);
    //  const height = document.getElementById('input0').value;
    //  console.log(height);

    const height =parseInt(document.querySelector('#input0').value); // selecting  id inputs's value 
    const weight =parseInt(document.querySelector('#input1').value); 
    const results = (document.querySelector('.results'));
    // const spans = results.querySelector('.span');
    const ans = document.querySelector('.bmi');
    if (height===''|| height <0 || isNaN(height) || weight<0 || weight ==='' || isNaN(weight)){
        results.innerHTML= `PROVIDE VALID INPUT  ${height}cm  ${weight}cm `; // checking  the validation  of height and weight .
    }
    
    // else if(weight<=0 || weight ==='' || isNaN(weight) ){
    //     results.innerHTML = `provide valid weight ${weight}`;
    // }

    else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML = `height : ${height} <br>  weight : ${weight}`;
        // spans.innerText= `bmi is ${bmi}`;
        ans.innerHTML=(`bmi is: ${bmi}`); // inside an empty element , class = bmi we add  the calculated bmi inside the  bmi and then display it on the screen .
    }
    
 });

 ```


 ``` html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Body Mass Index</title>
   <link rel="stylesheet" href="bmi.css">
</head>
<body>
    <div class="container">

        <h3>BMI CALACULATOR</h3> 
        <div class="form" >
            <form action="bmi.js">
            <label for= "input0">enter your height</label>
            <br>
            <input type="integer" name="number" id="input0" placeholder="height in cm">
            <br><br>


            <label for="input1" >enter your weight</label>
            <br>
            <input type="integer" name="number" id="input1" placeholder="weight in kg ">

<br> <br>

            <button type="submit">submit</button>

            <div class="guide">
            <h3>Under Weight = less than 18.6</h3>
            
            <h3>Normal Weight = 18.6 and 24.9</h3>
            
            <h3>Overweight = Greater than 24.9</h3>
            </div>
            <div class="results">
                <span class="span">

                </span>
            </div>
            <div class="bmi">
                
            </div>
            
            </form>
          


        </div>
    </div>

    

    <script src="bmi.js"></script>
</body>
</html>
 ```

 ``` css

.form
{
    padding: 50px;
    border: 1px solid black;
    width: 50%;
    display: flex;
    flex-direction: column;
 
    



}

button{
    width: 50%;
    padding: auto;
}
.container{
    justify-items: center;
    align-items: center;
}

input{
 
    width: 50%;
    text-align: center;

}
 ```