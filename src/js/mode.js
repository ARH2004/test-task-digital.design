const checkbox = document.querySelector(".night__mode");
const body = document.querySelector("body");

checkbox.addEventListener("change", onChangeMode);

function onChangeMode(event) {
  const goods = document.querySelector(".goods___list");

  if (event.target.checked) {
    body.style.backgroundColor = "#111";
    goods.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    goods.style.color = "black";
  }
}
