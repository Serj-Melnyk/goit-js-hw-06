function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const buttonDestroy = document.querySelector("button[data-destroy]");
const buttonCreate = document.querySelector("button[data-create]");
const boxes = document.querySelector("#boxes");

input.addEventListener("input", onInput);
let amount = "";
function onInput(evt) {
  let { value } = evt.currentTarget;

  for (let i = 1; i <= value; i += 1) {
    amount = i;
  }
  console.log(amount);
}

buttonCreate.addEventListener("click", onCreate);
function onCreate(evt) {
  onInput(evt);
  createBoxes();
}

let divCnange = 20;
let div = document.createElement("div");

function createBoxes() {
  divCnange += 10;

  div.style.width = `${divCnange}px`;
  div.style.height = `${divCnange}px`;
  div.style.backgroundColor = `${getRandomHexColor()}`;

  boxes.append(div);
  console.log(div);
}

buttonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes(evt) {
  div.remove();
}
