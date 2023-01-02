const input = document.querySelector(`input`);
const style = document.querySelector(`style`);
// const styleValid = document.querySelector(`#validation-input`);
// console.log(style);
// console.log(input);
input.addEventListener(`input`, onInput);
function onInput(evt) {
  const { value } = evt.currentTarget;
  console.log(value);
  if (value.length === input.dataset.length) {
    // input.classList.add = `valid`;
    input.style.borderColor = `green`;
  }
}
