let a=document.querySelector('input');
let b1=document.querySelectorAll('button');
let num1="";
let num2=0;
let num3=0;
let num11="";
let fun="";
b1.forEach(b => {
    b.addEventListener('click',()=>{
    if(b.innerText!='+' && b.innerText!='-' && b.innerText!='*' && b.innerText!='%' && b.innerText!='C' &&  b.innerText!='/' && b.innerText!='=' ){
        num1+=b.innerText;
        num3+=b.innerText;
    }
    else if(b.innerText=='='){
        if(fun=='add'){
            num1=parseFloat(num3)+num2;
        }
        else if(fun=='sub'){
            num1=num2-parseFloat(num3);
        }
        else if(fun=='mul'){
            num1=num2*parseFloat(num3);
        }
        else if(fun=='mod'){
            num1=num2%parseFloat(num3);
        }
        else{
            num1=num2/parseFloat(num3);
        }
    }
    else if(b.innerText=='C'){
        num1="";
    }
    else{
         num2=parseFloat(num1);
         num1+=b.innerText;
         num3="";
        if(b.innerText=='+'){
            fun="add";
        }
        else if(b.innerText=='-'){
            fun="sub";
        }
        else if(b.innerText=='*'){
            fun='mul';
        }
        else if(b.innerText=='/'){
            fun='div';
        }
        else{
            fun='mod';
        }
    }
     a.value=num1;
})


});

