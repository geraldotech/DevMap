var swiper = new Swiper('.slide-content', {
  slidesPerView: 5,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    666: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1410: {
      slidesPerView: 4,
    },
  },
})

