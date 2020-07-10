const slides = Array.from(document.querySelectorAll(".slider__slide"));

let slideTracker = 0;
slides[slideTracker].style.opacity = 1;

setInterval(function () {
  if (slideTracker < slides.length - 1) {
    slideTracker += 1;
    slides.forEach((item) => {
      item.style.opacity = 0;
    });
    slides[slideTracker].style.opacity = 1;
  } else {
    slideTracker = 0;
    slides.forEach((item) => {
      item.style.opacity = 0;
    });
    slides[slideTracker].style.opacity = 1;
  }
}, 5000);
