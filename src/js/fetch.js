function onGetGoods() {
  fetch("../../data/goods.json")
    .then((response) => response.json())
    .then((data) => localStorage.setItem("goods", JSON.stringify(data)))
    .then(() => onShowGoods())
    .catch((error) => console.log(error));
}
