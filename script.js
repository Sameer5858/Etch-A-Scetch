const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");
const clearBtn = document.getElementById("clear");
const checkBox = document.getElementById("rainbow");
let size = 16;
makeGrid(size);
resetBtn.addEventListener("click", () => {
  size = prompt(
    "how many grids for each side? please enter a number between 0-100",
    16
  );
  if (size < 0) {
    return alert("please enter a number between 0-100");
  } else if (size > 100) {
    return alert("please enter a number between 0-100");
  } else {
    removeGrid();
    removeGrid();
    makeGrid(size);
  }
});

function makeGrid(size) {
  for (let i = 0; i < size * size; i++) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
  }
}
function removeGrid() {
  document.querySelectorAll(".grid").forEach((grid) => {
    grid.remove();
  });
}
clearBtn.addEventListener("click", () => clear());
function clear() {
  document.querySelectorAll(".grid").forEach((grid) => {
    grid.removeAttribute("style");
  });
}
function randomRgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
container.addEventListener("mouseover", (e) => {
  if (checkBox.checked == true && e.target !== container) {
    e.target.setAttribute("style", `background-color:${randomRgb()}`);
  } else if (checkBox.checked == false && e.target !== container) {
    e.target.setAttribute("style", " background-color: #ff717e;");
  }
});
