const lists = document.querySelectorAll("nav ul li");

lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    e.preventDefault();
    [...lists].map((list) => list.classList.remove("active"));
    list.classList.add("active");
  });
});

document
  .querySelector(".active")
  .scrollIntoView({ inline: "center", blocking: "center", behavior: "smooth" });

document.getElementById("top").addEventListener("click", (e) => {
  e.preventDefault();
  document.body.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    blocking: "center",
  });
});
