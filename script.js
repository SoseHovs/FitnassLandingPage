// banner sliders
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.banner-body');
  const clickButton = document.querySelectorAll('.banner-pagination-list-item');
  const buttons = document.querySelectorAll('.banner-pagination-button');

  let currentIndex = 2;

  function showSlide(index) {
    slides.forEach((slide) => (slide.style.opacity = '0'));
    setTimeout(() => {
      slides[index].style.opacity = '1';

      buttons.forEach((btn) => btn.classList.remove('is-current'));
      slides.forEach((slide) => slide.classList.remove('show'));
      buttons[index].classList.add('is-current');
      slides[index].classList.add('show');

      currentIndex = index;
    }, 250);
  }

  clickButton.forEach((btn, index) => {
    btn.addEventListener('click', () => showSlide(index));
  });
});

// gallery slider

const familySwiper = new Swiper('.family-slider', {
  loop: true,
  // autoplay: {
  //   delay: 1500,
  //   disableOnInteraction: false,
  // },
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 400,
});
