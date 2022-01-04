const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");
const clearBtn = document.getElementById("clear");
const checkBox = document.getElementById("rainbow");
let isClick = false;
let size = 16;
makeGrid(size);

// function to create grids
function makeGrid(size) {
  for (let i = 0; i < size * size; i++) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
  }
}
//function to remove grids
function removeGrid() {
  document.querySelectorAll(".grid").forEach((grid) => {
    grid.remove();
  });
}

//function to greate random rgb values
function randomRgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
//eventListeners
//checks if mouse if clicked or not
window.addEventListener("mousedown", () => {
  isClick = true;
});
//checks if mouse if clicked or not
window.addEventListener("mouseup", () => {
  isClick = false;
});
// Clear the grids color
clearBtn.addEventListener("click", () => clear());
function clear() {
  document.querySelectorAll(".grid").forEach((grid) => {
    grid.removeAttribute("style");
  });
}
// add colors to grids when mouse is on click and hover upon the grids according
container.addEventListener("mouseover", (e) => {
  if (checkBox.checked === true && isClick === true && e.target !== container) {
    e.target.setAttribute("style", `background-color:${randomRgb()}`);
  } else if (
    checkBox.checked === false &&
    isClick === true &&
    e.target !== container
  ) {
    e.target.setAttribute("style", " background-color: #ff717e;");
  }
});
// event when reset button is clicked reset the size to user inputted size adn delete old divs
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
