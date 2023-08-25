const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, index) => {
  console.log(index);
  cup.addEventListener("click", () => higlightCups(index));
});

function higlightCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--
  }
  smallCups.forEach((cup, i) => {
    if (i < index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}
