 const form = document.querySelector('form');
 console.log(form);

 
 form.addEventListener('submit',function(hehe){
    hehe.preventDefault();
    // const hello = hehe.target.id;
    // console.log(hello);
    //  const height = document.getElementById('input0').value;
    //  console.log(height);

    const height =parseInt(document.querySelector('#input0').value);
    const weight =parseInt(document.querySelector('#input1').value);
    const results = (document.querySelector('.results'));
    // const spans = results.querySelector('.span');
    const ans = document.querySelector('.bmi');
    if (height===''|| height <0 || isNaN(height) || weight<0 || weight ==='' || isNaN(weight)){
        results.innerHTML= `PROVIDE VALID INPUT  ${height}cm  ${weight}cm `;
    }
    
    // else if(weight<=0 || weight ==='' || isNaN(weight) ){
    //     results.innerHTML = `provide valid weight ${weight}`;
    // }

    else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML = `height : ${height} <br>  weight : ${weight}`;
        // spans.innerText= `bmi is ${bmi}`;
        ans.innerHTML=(`bmi is: ${bmi}`);
    }
    
 });
  // wrong using this outisde the submit event listner will only provide us the 
    // empty value as while submit 


