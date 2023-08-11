const searh = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  searh.classList.toggle("active");
  input.focus()
});
