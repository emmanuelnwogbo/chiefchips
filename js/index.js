const slides = Array.from(document.querySelectorAll(".slider__slide"));
const dropdownItems = Array.from(
  document.querySelectorAll(".header__dropdown--item")
);
const dropdownCheck = document.getElementById("header-check");
const headerLabel = document.getElementById("header-label");
const variantNavigatiors = Array.from(
  document.querySelectorAll(".variants__navi")
);

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
    console.log("hello there");
  });
});
