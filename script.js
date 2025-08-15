const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
const slideDuration = 4000; // 4 seconds per slide
let slideInterval;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => {
    indicator.querySelector('.bar').style.animation = 'none';
  });

  slides[index].classList.add('active');
  indicators[index].querySelector('.bar').style.animation =
    `fillBar ${slideDuration}ms linear forwards`;
  currentIndex = index;
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

function startSlider() {
  showSlide(currentIndex);
  slideInterval = setInterval(nextSlide, slideDuration);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    clearInterval(slideInterval);
    showSlide(index);
    startSlider();
  });
});

startSlider();
