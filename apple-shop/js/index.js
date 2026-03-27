import BurgerMenu from "./burger.js";
import DropDown from "./drop-down.js";
import Modal from "./modal.js";

new BurgerMenu({
  BURGER: "burger",
  BURGER_OPEN: "burger--open",
  HEADER_MENU: "header__menu",
  HEADER_MENU_OPEN: "header__menu--open",
  lABEL: {
    OPEN: "Открыть меню",
    CLOSE: "Закрыть меню",
  },
  PAGE_BODY: "page__body",
  PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
  MENU_LINK: "menu__link",
  BREAKPOINT: 768,
});
// Инициализация выпадающего списка
new DropDown({
  // Передайте сюда нужные селекторы для выпадающего списка
  CONTAINER: ".dropdown",
  BUTTON: ".dropdown__btn",
  CONTENT: ".dropdown__content",
  ACTIVE_CLASS: "is-active",
});

new Modal({
  MODAL_WRAPPER: "modal",
  PAGE_BODY: "page__body",
  PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
});