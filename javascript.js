const sketchPad = document.querySelector("#sketchpad");

function createGrid() {
  const pixels = [];

  for (let i = 0; i < 16 * 16; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("pixel");
    sketchPad.appendChild(gridBlock);

    pixels.push(gridBlock);
  }

  return pixels;
}

function hoverEffect(pixel) {

    const originalColor = pixel.style.backgroundColor;

  pixel.addEventListener("pointerenter", () => {
    pixel.style.backgroundColor = "black";
  });

  return originalColor;
}

const pixels = createGrid();

pixels.forEach(hoverEffect);

console.log(sketchPad, pixels);
