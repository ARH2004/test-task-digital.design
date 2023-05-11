const btnModal = document.querySelector(".close");
const modal = document.querySelector(".modal");

const btn_order = document.getElementById("#btn_order");
const amount = document.getElementById("#amount");
const comment = document.getElementById("#comment");
const radios = document.querySelectorAll('input[name="color"]');
//
btn_order.addEventListener("click", onMakeOrder);
btnModal.addEventListener("click", onCloseModal);

//

let observer = new MutationObserver(onGetElement);

observer.observe(list, {
  childList: true,
});

function onGetElement() {
  const button = document.querySelectorAll(".goods__buy");
  button && onOpenModal(button);
}

function onOpenModal(items) {
  for (let item of items) {
    item.onclick = () => modal.classList.add("open__modal");
  }
}

function onCloseModal() {
  modal.classList.remove("open__modal");
}

function onMakeOrder(event) {
  event.preventDefault();

  const order = {
    amount: amount.value,
    comment: comment.value,
    color: onChooseColor(),
  };

  alert(
    `вы заказали вещь в количестве ${order.amount}, цвет: ${order.color}, ваш комментарий: ${order.comment}`
  );
}

function onChooseColor() {
  for (let item of radios) {
    if (item.checked) {
      return item.getAttribute("id");
    }
  }
}
