const list = document.querySelector(".goods___list");
const category = document.querySelector(".nav__list");
const items = document.querySelectorAll(".nav__item");

document.addEventListener("DOMContentLoaded", onGetGoods);
category.addEventListener("click", onChoseTypeGoods);

function getDayInfo(dateString) {
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const [day, month, year] = dateString.split(".");
  const date = new Date(year, parseInt(month) - 1, day);

  const dayOfWeek = daysOfWeek[date.getDay()];
  const weekNumber = Math.ceil(date.getDate() / 7);
  const monthName = months[date.getMonth()];
  const yearNumber = date.getFullYear();

  return `${dayOfWeek}, ${weekNumber} неделя ${monthName} ${yearNumber} года`;
}


function onChoseTypeGoods() {
  for (let item of items) {
    item.onclick = () => onShowGoods(item.getAttribute("name"));
  }
}

function onShowGoods(type) {
  const data = JSON.parse(localStorage.getItem("goods"));

  return (list.innerHTML = filter(data, type).map(
    ({ id, title, img, url, date }) =>
      `<div class="goods__item">
            <div class="goods__info">
            	<img src=${img} alt=${title} />
            	<div class="goods__item__title">${title}</div> #${id}
            	<a target='_blank' href=${url}>Посмотреть подробнее</a>
            	<div class="goods__buy">
              	<button>Купить</button>
            	</div>
            	<div class="goods__date">${getDayInfo(date)}</div>
           </div>
        </div>`
  ));
}
