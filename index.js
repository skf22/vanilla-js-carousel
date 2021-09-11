const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;
const prevButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next");
const carousel = document.querySelector("body > div.carousel");
let slidePosition = 0;

const hideAllSlides = () => {
  for (let slide of slides) slide.classList.remove("carousel-item-visible");
};

const moveToPrevSlide = () => {
  hideAllSlides();
  slidePosition === 0 ? (slidePosition = totalSlides - 1) : slidePosition--;
  slides[slidePosition].classList.add("carousel-item-visible");
};

const moveToNextSlide = () => {
  hideAllSlides();
  slidePosition === totalSlides - 1 ? (slidePosition = 0) : slidePosition++;
  slides[slidePosition].classList.add("carousel-item-visible");
};

const automaticCarousel = () => {
  setInterval(() => {
    moveToNextSlide();
  }, 4000);
};

automaticCarousel();

prevButton.addEventListener("click", moveToPrevSlide);
nextButton.addEventListener("click", moveToNextSlide);

carousel.addEventListener("keydown", (e) => {
  e.keyCode === 37 && moveToPrevSlide();
  e.keyCode === 39 && moveToNextSlide();
});
