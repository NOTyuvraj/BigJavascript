
const display = document.querySelector("#display");
const btnInput = document.querySelectorAll(".btns");

btnInput.forEach(function(ele){
    ele.addEventListener('click' , function(){
        display.value += ele.innerHTML
    })
})

function calculate(){
    const result = math.evaluate(display.value);
    display.value = result;
}