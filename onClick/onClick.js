document.getElementById("event").addEventListener("click", function () {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "Shahjalal Khan";
  document.body.style.backgroundColor = "#212125";
  document.body.style.color = "#fff";
});

document.getElementById("prev").addEventListener("click", function () {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "Khan Shaheb";
  document.body.style.backgroundColor = "#ffff";
  document.body.style.color = "#212125";
});

document.getElementById("btn-update").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;

  const inputPara = document.getElementById("display-input-text");
  inputPara.innerText = inputText;
  inputField.value = "";
});
