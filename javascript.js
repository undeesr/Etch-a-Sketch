const sketchPad = document.querySelector("#sketchpad");

function configureGrid(n) {
  sketchPad.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  return n;
}

function createGrid(n) {
  const pixels = [];

  for (let i = 0; i < n * n; i++) {
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

let NumberOfPixels = +prompt(
  "Enter the number of pixels in the grid (more than 1 and less than 100)"
);

if (!(1 < NumberOfPixels < 100)) {
  NumberOfPixels = +prompt(
    "Enter the number of pixels in the grid (more than 1 and less than 100)"
  );
}

configureGrid(NumberOfPixels);

const pixels = createGrid(NumberOfPixels);

pixels.forEach(hoverEffect);

console.log(sketchPad, pixels);
