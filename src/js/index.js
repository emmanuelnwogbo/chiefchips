import "../sass/main.scss";

import swipe from "pure-swipe-js";

const slides = Array.from(document.querySelectorAll(".slider__slide"));
const dropdownItems = Array.from(
  document.querySelectorAll(".header__dropdown--item")
);
const dropdownCheck = document.getElementById("header-check");
const headerLabel = document.getElementById("header-label");
const variantNavigatiors = Array.from(
  document.querySelectorAll(".variants__navi")
);
const variantSlides = Array.from(
  document.querySelectorAll(".variants__slide--item")
);
const variantSlide = document.getElementById("variants-slide");

console.log(variantSlide);
variantSlide.addEventListener("swipe.progress", function (e) {
  console.log("swiped begin", e.detail.direction, e);
  const direction = e.detail.direction;
  console.log(e.detail.x, e.detail.y, 'dir');

  if (direction === null) {
    return;
  }

  if (direction % 2 === 0) {
    console.log("right");
  } else {
    console.log("left");
  }
});

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

headerLabel.addEventListener("click", function () {
  if (!dropdownCheck.checked) {
    setTimeout(function () {
      dropdownItems.forEach((item) => {
        item.style.opacity = 1;
      });
    }, 100);

    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  } else {
    dropdownItems.forEach((item) => {
      item.style.opacity = 0;
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
    });
  }
});

variantNavigatiors.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.classList.contains("variants__navi--right")) {
      variantSlides[0].style.transform = "translateX(-100%)";
      variantSlides[1].style.transform = "translateX(-100%)";
      variantSlides[0].style.opacity = "0";
      variantSlides[1].style.opacity = "1";
    } else {
      variantSlides[0].style.transform = "translateX(0)";
      variantSlides[1].style.transform = "translateX(0)";
      variantSlides[0].style.opacity = "1";
      variantSlides[1].style.opacity = "0";
    }
  });
});
