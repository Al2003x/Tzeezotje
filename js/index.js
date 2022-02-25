let reviews = new Swiper(".reviews__slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let design = new Swiper(".design__slider", {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  slideActiveClass: "swiper-slide-active-mod",
  spaceBetween: 22,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
