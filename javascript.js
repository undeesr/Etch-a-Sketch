const sketchPad = document.querySelector("#sketchpad");

function createGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("pixel");
    sketchPad.appendChild(gridBlock);
  }
}

createGrid();

console.log(sketchPad);
