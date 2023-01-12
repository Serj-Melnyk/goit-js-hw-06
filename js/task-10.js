function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const buttonDestroy = document.querySelector("button[data-destroy]");
const buttonCreate = document.querySelector("button[data-create]");
const boxes = document.querySelector("#boxes");

input.addEventListener("input", onInput);
buttonCreate.addEventListener("click", () => createBoxes(amount));
buttonDestroy.addEventListener("click", destroyBoxes);

let amount;

function onInput() {
  amount = Number(input.value);
  return amount;
}

let size = 30;

function createBoxes(amount) {
  size = 30;
  for (let i = 0; i < amount; i += 1) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div
        class="color"
        style="width: ${size}px; height: ${size}px;
        background-color: ${getRandomHexColor()};"
      ></div>`
    );
    size += 10;
    // console.log(amount);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
