

let buttons=document.querySelectorAll('button');
let input=document.querySelector('input');


for(let button of buttons){
    button.addEventListener('click',function(e){
        let btntext = e.target.innerText;
        if(btntext==="AC"){
            input.value="";
        }
        else if(btntext==='='){
            try{
             let ans = eval(input.value);
           input.value=ans;}
           catch(e){
            input.value="Gaddari Korbe"  //invalid
           }
           setTimeout(function(){
            input.value="";
           },5000)
        }
        
        else{
            input.value += btntext;
        }
    })
}