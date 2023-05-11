const list = document.querySelector(".goods___list");
const category = document.querySelector(".nav__list");
const items = document.querySelectorAll(".nav__item");

document.addEventListener("DOMContentLoaded", onGetGoods);
category.addEventListener("click", onChoseTypeGoods);

function onChoseTypeGoods() {
  for (let item of items) {
    item.onclick = () => onShowGoods(item.getAttribute("name"));
  }
}

function onShowGoods(type) {
  const data = JSON.parse(localStorage.getItem("goods"));

  return (list.innerHTML = filter(data, type).map(
    ({ id, title, img, url, date }) => `<div class="goods__item">
            <div class="goods__info">
            <img src=${img} alt=${title} />
            <div class="goods__item__title">${title}</div> #${id}
            <a target='_blank' href=${url}>Посмотреть подробнее</a>
            <div class="goods__buy">
              <button>Купить</button>
            </div>
            <div class="goods__date">${date}</div>
           </div>
        </div>`
  ));
}
