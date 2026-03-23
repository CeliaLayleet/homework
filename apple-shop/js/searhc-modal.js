// search.js
export default class SearchModal {
  constructor(options) {
    this.button = document.querySelector(options.BUTTON);
    this.modal = document.querySelector(options.MODAL);
    this.closeBtn = document.querySelector(options.CLOSE_BTN);
    this.body = document.querySelector('body');
    this.noScrollClass = options.NO_SCROLL_CLASS;

    if (this.button && this.modal) {
      this.init();
    }
  }

  init() {
    this.button.addEventListener('click', () => this.open());
    this.closeBtn.addEventListener('click', () => this.close());
    // Закрытие по клику на фон
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });
  }

  open() {
    this.modal.classList.add('is-open');
    this.body.classList.add(this.noScrollClass);
  }

  close() {
    this.modal.classList.remove('is-open');
    this.body.classList.remove(this.noScrollClass);
  }
}
