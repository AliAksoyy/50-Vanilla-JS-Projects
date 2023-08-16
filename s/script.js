const ali = document.querySelector("body");
console.log(ali);
const cerate = (parent, content) => {
  const beyda = document.createElement("div");
  beyda.innerText = content;
  beyda.style.display = "flex";
  beyda.style.alignItems = "center ";
  beyda.style.justifyContent = "center ";
  beyda.style.background = "#3e4";
  beyda.style.width = "8rem";
  beyda.style.height = "8rem";
  beyda.style.padding = "8rem";
 
  parent.appendChild(beyda);
  parent.style.maxHeight= "100vh"
  parent.style.overflow= "auto"
};

for (let i = 1; i <= 102; i++) {
  cerate(ali, i);
}
