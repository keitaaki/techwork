var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  speed: 300,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});