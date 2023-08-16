const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const divs = document.querySelectorAll("div");

document.addEventListener("readystatechange", (e) => {
    console.log(e.target.readyState)
})