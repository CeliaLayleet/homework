export const newPhonesSlider = () => {
  new Swiper(".new-phones__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      prevEl: ".new-phones__swiper-button--prev",
      nextEl: ".new-phones__swiper-button--next",
    },
  });
};
