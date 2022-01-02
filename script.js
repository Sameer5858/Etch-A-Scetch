const container = document.getElementById("container");
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("grid");
  container.appendChild(div);
}

container.addEventListener("mouseover", (e) => {
  e.target.classList.add("hov");
});
const clearBtn = document.querySelector("button");
clearBtn.addEventListener("click", () => {
  const hovs = document.querySelectorAll(".hov");
  hovs.forEach((hov) => {
    hov.classList.remove("hov");
  });
});
