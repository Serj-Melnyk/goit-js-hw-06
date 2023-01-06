function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const control = document.querySelector("#controls");

const input = document.querySelector("input");

input.addEventListener("input", onInput);
// console.log(input);
function onInput(evt) {
  //   // evt.currentTarget = createBoxes(amounte);
  const { value } = evt.currentTarget;

  // Array.from({ value });
  // console.log(onClick(evt) += {value});
  // value + value;
  let amounte = 0;

  //   const amounte = [input].reduce(acc) => {
  //     return acc + { value } ;
  //   }, []);
  console.log(value);

  for (let i = 1; i <= value; i += 1) {
    amounte += `${value}`;
    //   createBoxes(value);
    //   console.log(amounte);
    //   // return onClick(evt);
  }
}

const box = document.querySelector("#boxes");
// box.addEventListener("click", onBox);
// function onBox(evt) {
//   // box.reset();
// }

const buttonCreate = document.querySelector("button[data-create]");

buttonCreate.addEventListener("click", onClick);

let div = document.createElement("div");

let divCnange = 20;

function onClick(evt) {
  divCnange = `${amounte}`;
  divCnange += 10;
  div.style.width = `${divCnange}px`;
  div.style.height = `${divCnange}px`;

  div.style.backgroundColor = `${getRandomHexColor()}`;

  box.append(div);
  // after;
}

const buttonDestroy = document.querySelector("button[data-destroy]");
// console.log(buttonDestroy);

buttonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes(evt) {
  div.remove();
  // box.remove();
  // divCnange.remove();
}
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
