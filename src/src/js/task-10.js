function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const box = document.querySelector("#boxes");
// const control = document.querySelector("#controls");

const input = document.querySelector("input");

input.addEventListener("input", onInput);
let amounte = "";
function onInput(evt) {
  let { value } = evt.currentTarget;

  for (let i = 1; i <= value; i += 1) {
    amounte = i;
    // `${createBoxes(amounte)}`;
  }

  // console.log(amounte);
}

//   let amounte = value;

//   buttonCreate.addEventListener("click", onClick);

//   let divCnange = 20;
//   function onClick(evt) {
//     let div = document.createElement("div");

//     divCnange += 10;
//     div.style.width = `${divCnange}px`;
//     div.style.height = `${divCnange}px`;

//     div.style.backgroundColor = `${getRandomHexColor()}`;
//     //,,,,,,,,
//     // div.style.width = 30;
//     // div.style.height = 30;
//     // div.style.backgroundColor = `${getRandomHexColor()}`;
//     box.append(div);
//   }

//   // for (let i = 0; i <= input.value; i += 1) {
//   //   amounte = i;

//   //   createBoxes(value);
//   console.log(amounte);
//   // }
// }

// const buttonCreate = document.querySelector("button[data-create]");

// const buttonDestroy = document.querySelector("button[data-destroy]");
// // console.log(buttonDestroy);

// buttonDestroy.addEventListener("click", destroyBoxes);
// function destroyBoxes(evt) {
//   div.remove();
//   // input.reset();
//   // box.remove();
//   // divCnange.remove();
// }
// let div = document.createElement("div");

// function onClick(amount) {
//   div = amount;
//   div.style.width = 30;
//   div.style.height = 30;
//   div.style.backgroundColor = `${getRandomHexColor()}`;
//   box.append(div);
// }
// console.log(div);
//..........................................................
// function reset() {
//   div.remove();
// }
// function createBoxes(amounte) {
//   for (let i = 1; i <= input.value; i += 1) {
//     amounte = input.value;
//     console.log(amounte);
//   }
// }
// createBoxes(value);
// evt.currentTarget.reset();
// function createBoxes(amount) {
//   div = amount;
// }
//......................................................

// const control = document.querySelector("#controls");
// const input = document.querySelector("input");
// input.addEventListener("input", onInput);

// let amount = [];
// function onInput(evt) {
//   for (let i = 0; i <= evt.currentTarget.value; i += 1) {
//     amount.push(evt.currentTarget.value);
//     // amount = buttonCreate;
//     // createBoxes(input.value);
//   }

//   console.log(amount);
// }

// const buttonCreate = document.querySelector("button[data-create]");
// // console.log(buttonCreate);
// buttonCreate.addEventListener("click", onCreate);
// let divCnange = 30;
// function onCreate(evt) {
//   divCnange += 10;
//   // for (let i = 1; i <= input.value; i += 1) {
//   //   div + input.value;
//   // const itemsDiv = document.createElement("div");
//   divCnange.style.width = `${divCnange}px`;
//   divCnange.style.height = `${divCnange}px`;
//   // }
// }

// function createBoxes(amount) {
//   document.createElement("div");
//   let div = "";
//   div.style.width = "30px";
//   div.style.height = "30px";
//   div.style.backgroundColor = getRandomHexColor();
// }
// console.log(createBoxes(amount));
//..................................
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

const boxes = document.querySelector("#boxes");
console.log(boxes);

const controls = document.querySelector("#controls");
const createBtn = document.querySelector("button[data-create]");
console.log(createBtn);
createBtn.addEventListener("click", onCreate);
function onCreate(evt) {
  createBoxes();
  // amounte = `${createBoxes()}`;
  // evt.currentTarget = createBoxes(input.value);
  // let createDiv = document.createElement("div");
  // // createDiv = input.value;
  // // let divCnange = 10
  // // for (let i = 0; i <= )
  // createDiv.classList.add("colorDiv");
  // // createDiv.style.width = 30;
  // // createDiv.style.height = 30;
  // createDiv.style.backgroundColor = `${getRandomHexColor()}`;
  // boxes.append(createDiv);
  // console.log(createDiv);
}
let divCnange = 20;
function createBoxes() {
  let createDiv = document.createElement("div");

  divCnange += 10;
  // divCnange = amounte;
  createDiv.style.width = `${divCnange}px`;
  createDiv.style.height = `${divCnange}px`;

  // createDiv.classList.add("colorDiv");
  createDiv.style.backgroundColor = `${getRandomHexColor()}`;

  boxes.append(createDiv);

  console.log(createDiv);
}
// createBoxes();

// createDiv.addEventListener("click", onClick);
// function onClick(evt) {
//   createDiv.style.width = 30;
//   createDiv.style.height = 30;
//   createDiv.style.backgroundColor = `${getRandomHexColor()}`;

//   boxes.append("div");
//   console.log(createDiv);
// }
