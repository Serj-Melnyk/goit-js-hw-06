const fontSize = document.querySelector("#font-size-control");
// console.log(fontSize);

const text = document.querySelector("#text");
// console.log(text);

fontSize.addEventListener("range", onRange);
function onRange(evt) {
  console.log(evt.currentTarget);
}
