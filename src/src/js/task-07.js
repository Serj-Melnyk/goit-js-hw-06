const input = document.querySelector("#font-size-control");
// console.log(input);

const text = document.querySelector("#text");
// console.log(text);

input.addEventListener("input", onInput);
function onInput(evt) {
  const { value } = evt.currentTarget;

  text.style.fontSize = `${value}px`;
  // console.log(value);
}
