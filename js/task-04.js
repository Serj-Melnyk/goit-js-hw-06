const counter = document.querySelector("#counter");

const value = document.querySelector("#value");
let counterValue = 0;

const buttonDecrement = document.querySelector("button[data-action=decrement]");

buttonDecrement.addEventListener("click", onClickDecrement);
function onClickDecrement(evt) {
  value.textContent = counterValue -= 1;
  // console.log(counterValue);
}

const buttonIncrement = document.querySelector("button[data-action=increment]");

buttonIncrement.addEventListener("click", onClickIncrement);
function onClickIncrement(evt) {
  value.textContent = counterValue += 1;
  // console.log(counterValue);
}
