function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const control = document.querySelector("#controls");
// console.log(control);

const input = document.querySelector("input");
// console.log(input);

input.addEventListener("input", onInput);
function onInput(evt) {
  const { value } = evt.currentTarget;

  createBoxes(value) = `${value}`;
  console.log(value);
}

const box = document.querySelector("#boxes");
// console.log(box);
box.addEventListener("create", onCreate);
function onCreate(evt) {}

const buttonCreate = document.querySelector("button[data-create]");
// console.log(buttonCreate);
buttonCreate.addEventListener("click", onClick);

const div = document.createElement("div");
function onClick(evt) {
  div.style.width = "30px";
  div.style.height = "30px";
  div.style.backgroundColor = `${getRandomHexColor()}`;
  box.append(div);

  // console.log(evt);
}

const buttonDestroy = document.querySelector("button[data-destroy]");
console.log(buttonDestroy);

buttonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes(evt) {
  div.remove();
  // console.log(evt.currentTarget);
}

function createBoxes(value) {
  onClick()
}

// box.reset();
