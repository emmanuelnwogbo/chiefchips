import swipe from "pure-swipe-js";

const flavourSlide = Array.from(
  document.querySelectorAll(".flavour__slide")
)[0];
const flavourSlideNavs = Array.from(
  document.querySelectorAll(".flavour__directions")
);

const flavours = Array.from(document.querySelectorAll(".flavour__container"));
const flavoursSpan = Array.from(
  document.querySelectorAll(".flavour__nav--span")
);

let flavourSlideTracker = 0;

flavoursSpan.forEach((item) => {
  flavoursSpan[flavourSlideTracker] === item
    ? (item.style.background = "#ffcf3b")
    : (item.style.background = "#fff");
});

flavourSlideNavs.forEach((item) => {
  item.addEventListener("click", function (event) {
    if (item.classList.contains("flavour__directions--next")) {
      if (flavourSlideTracker < flavours.length - 1) {
        flavourSlideTracker += 1;
        console.log(flavourSlideTracker);

        flavourSlide.style.transform = `translateX(-${flavourSlideTracker}00%)`;
        flavours[flavourSlideTracker - 1] != null
          ? (flavours[flavourSlideTracker - 1].style.opacity = "0")
          : "";
        flavours[flavourSlideTracker].style.opacity = "1";
        flavours[flavourSlideTracker + 1] != null
          ? (flavours[flavourSlideTracker + 1].style.opacity = "0")
          : "";

        flavoursSpan.forEach((item) => {
          flavoursSpan[flavourSlideTracker] === item
            ? (item.style.background = "#ffcf3b")
            : (item.style.background = "#fff");
        });
      }
      return;
    }

    if (flavourSlideTracker > 0) {
      flavourSlideTracker -= 1;
      console.log(flavourSlideTracker);

      flavourSlideTracker !== 0
        ? (flavourSlide.style.transform = `translateX(${flavourSlideTracker}00%)`)
        : (flavourSlide.style.transform = `translateX(0)`);

      flavours[flavourSlideTracker - 1] != null
        ? (flavours[flavourSlideTracker - 1].style.opacity = "0")
        : "";
      flavours[flavourSlideTracker].style.opacity = "1";
      flavours[flavourSlideTracker + 1] != null
        ? (flavours[flavourSlideTracker + 1].style.opacity = "0")
        : "";

      flavoursSpan.forEach((item) => {
        flavoursSpan[flavourSlideTracker] === item
          ? (item.style.background = "#ffcf3b")
          : (item.style.background = "#fff");
      });
    }
  });
});

flavours.forEach((item) => {
  item.addEventListener("swipe.progress", function (event) {
    const direction = event.detail.direction;

    if (direction === null) {
      return;
    }

    if (direction % 2 === 0) {
      if (flavourSlideTracker > 0) {
        flavourSlideTracker -= 1;
        console.log(flavourSlideTracker);

        flavourSlideTracker !== 0
          ? (flavourSlide.style.transform = `translateX(${flavourSlideTracker}00%)`)
          : (flavourSlide.style.transform = `translateX(0)`);

        flavours[flavourSlideTracker - 1] != null
          ? (flavours[flavourSlideTracker - 1].style.opacity = "0")
          : "";
        flavours[flavourSlideTracker].style.opacity = "1";
        flavours[flavourSlideTracker + 1] != null
          ? (flavours[flavourSlideTracker + 1].style.opacity = "0")
          : "";

        flavoursSpan.forEach((item) => {
          flavoursSpan[flavourSlideTracker] === item
            ? (item.style.background = "#ffcf3b")
            : (item.style.background = "#fff");
        });
      }
    } else {
      if (flavourSlideTracker < flavours.length - 1) {
        flavourSlideTracker += 1;
        console.log(flavourSlideTracker);

        flavourSlide.style.transform = `translateX(-${flavourSlideTracker}00%)`;
        flavours[flavourSlideTracker - 1] != null
          ? (flavours[flavourSlideTracker - 1].style.opacity = "0")
          : "";
        flavours[flavourSlideTracker].style.opacity = "1";
        flavours[flavourSlideTracker + 1] != null
          ? (flavours[flavourSlideTracker + 1].style.opacity = "0")
          : "";

        flavoursSpan.forEach((item) => {
          flavoursSpan[flavourSlideTracker] === item
            ? (item.style.background = "#ffcf3b")
            : (item.style.background = "#fff");
        });
      }
    }
  });
});

const nutLabel = document.getElementById("nutrition-label");

nutLabel !== null
  ? nutLabel.addEventListener("click", function (e) {
      const flavourContainer = document.querySelector(".flavour__container");
      const checkbox = document.getElementById("nutrition-check");

      checkbox.checked
        ? (flavourContainer.style.backgroundRepeat = `no-repeat`)
        : (flavourContainer.style.backgroundRepeat = `repeat`);
    })
  : "";

const flavourslider = document.querySelector(".flavour__slider");

if (flavourslider !== null) {
  const flavourDir = Array.from(
    document.querySelectorAll(".flavour__directions")
  );
  const flavourBodies = Array.from(document.querySelectorAll(".flavour__body"));
  const flavourPagination = Array.from(
    document.querySelectorAll(".flavour__pagination--item")
  );
  let variantSlideTracker = 0;
  let lengthOfSlider = flavourBodies.length;

  function moveRight() {
    if (variantSlideTracker < lengthOfSlider - 1) {
      variantSlideTracker += 1;
      flavourslider.style.transform = `translateX(-${variantSlideTracker}00%)`;
      triggerFlavourPag();
      showCurrentFlavBod();
    }
  }

  function moveLeft() {
    if (variantSlideTracker >= lengthOfSlider - 1 && variantSlideTracker > 0) {
      variantSlideTracker -= 1;
      flavourslider.style.transform = `translateX(-${variantSlideTracker}00%)`;
      triggerFlavourPag();
      showCurrentFlavBod();
    }
  }

  flavourDir.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      item.classList.contains("flavour__directions--next")
        ? moveRight()
        : moveLeft();
    });
  });

  function triggerFlavourPag() {
    flavourPagination.forEach((item) => {
      item.classList.contains(`flavour__pagination-${variantSlideTracker}`)
        ? (item.style.background = `rgb(255, 207, 59)`)
        : (item.style.background = `#fff`);
    });
  }

  function showCurrentFlavBod() {
    flavourBodies.forEach((item) => {
      item.style.opacity = "0";
    });

    flavourBodies[variantSlideTracker].style.opacity = "1";
  }

  flavourslider.addEventListener("swipe.progress", function (event) {
    const direction = event.detail.direction;
    direction % 2 === 0 ? moveLeft() : moveRight();
  });
}
