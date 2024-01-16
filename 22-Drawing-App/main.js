const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const decrease = document.querySelector("#decrease");

const increase = document.querySelector("#increase");

const colorValue = document.querySelector("#color");

const clear = document.querySelector("#clear");

const sizeValue = document.querySelector("#size");

let size = 10;
let isPress = false;
let color = "black";
let x;
let y;

increase.addEventListener("click", (e) => {
  if (size > 50) {
    size = 50;
  }
  sizeValue.textContent = Number(sizeValue.textContent) + 5;
  size = Number(sizeValue.textContent) + 5;
});
decrease.addEventListener("click", (e) => {
  if (Number(sizeValue.textContent) > 5) {
    sizeValue.textContent = Number(sizeValue.textContent) - 5;
    size = Number(sizeValue.textContent) - 5;
  }
});
colorValue.addEventListener("change", (e) => {
  color = e.target.value;
});
clear.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mousedown", (e) => {
  isPress = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  isPress = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPress) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCricle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCricle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
