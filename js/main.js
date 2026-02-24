const orderBtn = document.querySelector(".content-hero__button");
const orderModal = document.querySelector(".backdrop");
const orderBtnClose = document.querySelector(".modal-close");
const menuBtn = document.querySelector(".header-mobail__icon");
const menuModal = document.querySelector(".mobail-menu");
const menuBtnClose = document.querySelector(".mobail-close");
orderBtn.addEventListener("click", () => {
  orderModal.classList.add("is-open");
});
orderBtnClose.addEventListener("click", () => {
  orderModal.classList.remove("is-open");
});
menuBtn.addEventListener("click", () => {
  menuModal.classList.add("is-open-menu");
});
menuBtnClose.addEventListener("click", () => {
  menuModal.classList.remove("is-open-menu");
});
console.log("guuuu");
// mobail-menu
// mobail-close
//header-mobail__icon
