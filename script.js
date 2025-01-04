let buttons = document.querySelectorAll('.btn');
    let display = document.querySelector('.display');
    let clear = document.querySelector('#bclr');
    let bx = document.querySelector('#bx');
    let solve = document.querySelector('#beq');
    buttons.forEach((b)=>{
        b.addEventListener('click',function(){
        display.value = display.value + b.value;
        })
        });
    clear.addEventListener('click',()=>{
          display.value = "";
    });
    bx.addEventListener('click',()=>{
          display.value = display.value.substring(0,display.value.length-1);
    });
    solve.addEventListener('click',()=>{
        try{
            display.value = eval(display.value);
        }
        catch(err){
            console.log(err);
            display.value = "Error";
        }
          
    });