const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  if (i >= slides.length) index = 0;
  else if (i < 0) index = slides.length - 1;
  else index = i;

  slider.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));

// Auto-slide every 5 seconds
setInterval(() => {
  showSlide(index + 1);
}, 5000);
