function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()
const swiper = new Swiper('.swiper__first', {
  slidesPerView: 1,
  // spaceBetween: 10,
  breakpoints: {
    992: {
      slidesPerView: 1,
      // spaceBetween: 10,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiper2 = new Swiper('.swiper__recently', {
  slidesPerView: 2,
  // spaceBetween: 10,
  breakpoints: {
    992: {
      slidesPerView: 2,
      // spaceBetween: 10,
    }
  },
  navigation: {
    nextEl: '.next__btn',
    prevEl: '.prev__btn',
  },
});
const swiper3 = new Swiper('.swiper__edge', {
  slidesPerView: 1,
  // spaceBetween: 10,
  breakpoints: {
    992: {
      slidesPerView: 1,
      // spaceBetween: 10,
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },
});



