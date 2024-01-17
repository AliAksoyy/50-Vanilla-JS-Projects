const container = document.getElementById("container");

const squares = 400;

const colors = [
  "#8d5858",
  "#2eaa2a",
  "#b92d8f",
  "#c3e01c",
  "#11aeca",
  "#460707",
  "#d89a14",
  "#a18599",
  "#344466",
  "#799aa0",
];

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", setColor(square));
  square.addEventListener("mouseout", removeColor(square));
  container.appendChild(square);
}

function setColor(square) {
  const color = getRandomColor();
  square.style.background = color;
}
function removeColor(square) {}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
