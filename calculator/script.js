const display = document.querySelector("#display");
const btnInput = document.querySelectorAll(".btns");

btnInput.forEach(function (ele) {
  ele.addEventListener("click", function () {
    display.value += ele.innerHTML;
  });
});

function calculate() {
  try {
    const result = math.evaluate(display.value);
    display.value = result;
  } catch (err) {
    display.value = "Error";
  }
}

function clearAll(){
    display.value = "";
}

function clearOne(){
    display.value = display.value.slice(0,-1);
}