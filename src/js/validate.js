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


function toggleMenu() {
  var navList = document.querySelector(".nav__list");
  navList.classList.toggle("show");
}
