let div = document.querySelectorAll(".box > div");

div.forEach((n) => {
  n.addEventListener("click", () => {
    Channed();
    n.setAttribute("class", "changing");
  });
});

function Channed() {
  div.forEach((n) => {
    n.setAttribute("class", "but");
  });
}
