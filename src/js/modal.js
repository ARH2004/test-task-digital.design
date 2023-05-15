const btnModal = document.querySelector(".close");
const modal = document.querySelector(".modal");

const modalContent = document.querySelector(".modal__content");
const amountInput = document.getElementById("#amount");

const btnOrder = document.getElementById("#btn_order");

const comment = document.getElementById("#comment");
const radios = document.querySelectorAll('input[name="color"]');

//
btnOrder.addEventListener("click", onMakeOrder);
btnModal.addEventListener("click", onCloseModal);
modal.addEventListener("click", onCloseByBackground);
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

function onCloseByBackground(event) {
  if (event.target === modal) {
    modal.classList.remove("open__modal");
  }
}

function onMakeOrder(event) {
  event.preventDefault();

  const order = {
    amountInput: Math.max(amountInput.value, 1),
    comment: comment.value,
    color: onChooseColor(),
  };

  alert(
    `Вы заказали вещь в количестве ${order.amountInput}, цвет: ${order.color}, ваш комментарий: ${order.comment}`
  );
}

function onChooseColor() {
  for (let item of radios) {
    if (item.checked) {
      return item.getAttribute("id");
    }
  }
}
