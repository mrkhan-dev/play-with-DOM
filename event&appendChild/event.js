const darkButton = document.getElementById("make-dark");
const lightButton = document.getElementById("make-light");

darkButton.addEventListener("click", function makeDark() {
  document.body.style.backgroundColor = "#212125";
  document.body.style.color = "#fff";
});

lightButton.addEventListener("click", function makeLight() {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#212125";
});

// shorthand way to use addEventListener
document.getElementById("make-success").addEventListener("click", function () {
  document.body.style.backgroundColor = "#198754";
  document.body.style.color = "#fff";
});
