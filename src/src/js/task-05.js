const input = document.querySelector("#name-input");
// console.dir(input);
const output = document.querySelector("#name-output");
// console.dir(output);

input.addEventListener("input", showInput);
function showInput(evt) {
  const { value } = evt.currentTarget;
  output.textContent = value ? value : `Anonymous`;
  //   console.log(input);
}
