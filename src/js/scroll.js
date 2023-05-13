const itemScroll = document.querySelector(".top__scroll");

document.addEventListener("scroll", onObserverScroll);
itemScroll.addEventListener("click", onTopPage);

function onObserverScroll() {
  if (window.pageYOffset > 10) {
    itemScroll.classList.add("hide");
  } else {
    itemScroll.classList.remove("hide");
  }
}

function onTopPage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Добавление плавности скролла
  });
}
