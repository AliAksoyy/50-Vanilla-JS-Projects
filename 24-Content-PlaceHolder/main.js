const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");


setTimeout(getDate, 2500);

function getDate() {
  header.innerHTML =
    '<img src="https://source.unsplash.com/random" alt="img" />';
  title.innerHTML = " Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus";

  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="img"/>';

  name.innerHTML = "John Doe";
  date.innerHTML = `${new Date().toLocaleDateString("tr")}`;

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((text) =>
    text.classList.remove("animated-bg-text")
  );
}
