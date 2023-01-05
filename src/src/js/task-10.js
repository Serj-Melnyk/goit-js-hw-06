function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const control = document.querySelector("#controls");

// const input = document.querySelector("input");
// // console.log(input);

// input.addEventListener("input", onInput);
// function onInput(evt) {
//   // evt.currentTarget = createBoxes(amounte);
//   const { value } = evt.currentTarget;
//   let amounte = 0;
//   for (let i = 1; i <= value; i += 1) {
//     amounte += `${value}`;
//     createBoxes(value);
//     console.log(amounte);
//     // return onClick(evt);
//   }
// }

// const box = document.querySelector("#boxes");
// box.addEventListener("click", onBox);
// function onBox(evt) {
//   box.reset();
// }

// const buttonCreate = document.querySelector("button[data-create]");

// buttonCreate.addEventListener("click", onClick);

// const div = document.createElement("div");
// let divCnange = 30;

// function onClick(evt) {
//   divCnange += 10;
//   div.style.width = `${divCnange}px`;
//   div.style.height = `${divCnange}px`;

//   div.style.backgroundColor = `${getRandomHexColor()}`;

//   box.append(div);
// }

// const buttonDestroy = document.querySelector("button[data-destroy]");
// // console.log(buttonDestroy);

// buttonDestroy.addEventListener("click", destroyBoxes);
// function destroyBoxes(evt) {
//   div.remove();
// }
//..........................................................
// function reset() {
//   div.remove();
// }
// function createBoxes(amounte) {
//   for (let i = 1; i <= input.value; i += 1) {
//     amounte = input.value;
//     // console.log(amounte);
//   }
// }
// // createBoxes(value);
// // evt.currentTarget.reset();
// function createBoxes(amount) {
//   div = amount;
// }
//......................................................
const buttonCreate = document.querySelector("button[data-create]");
console.log(buttonCreate);
buttonCreate.addEventListener("click", onCreate);
function onCreate(evt) {
  let div = [];
  for (let i = 1; i <= input.value; i += 1) {
    div +=
  }
  console.log(evt.currentTarget);
}
