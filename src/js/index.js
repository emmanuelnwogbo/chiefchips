import "../sass/main.scss";

import swipe from "pure-swipe-js";
import loadGoogleMapsApi from "load-google-maps-api";

import "./variants";

const mapItems = Array.from(
  document.querySelectorAll(".locations__boxes--item")
);

mapItems.forEach((item) => {
  item.addEventListener("click", function () {
    const map = document.getElementById("map-content");

    map.style.opacity = "1";
    map.style.zIndex = "10";

    document.getElementById("map-close").addEventListener("click", (event) => {
      if (event.target.id === "map-close") {
        map.style.opacity = "0";
        map.style.zIndex = "-1";
      }
    });
  });
});

class Map {
  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({
      key: "AIzaSyDFdPqz2fYoM39ld7gTxES1zvTuJYyc9S4",
    });
  }
  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: { lat: 6.7148901, lng: 3.2231429 },
      zoom: 14,
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let mapElement = document.getElementById("map");

  //document.querySelectorAll('.')

  Map.loadGoogleMapsApi().then(function (googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });
});

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
const mobileVariantCheck = document.getElementById("mobile-variant-check");

const variantBtns = Array.from(document.querySelectorAll(".variants-button"));

console.log(variantSlide);
console.log(variantSlides);

variantSlides[0] !== undefined
  ? variantSlides[0].addEventListener("swipe.progress", function (e) {
      console.log("swiped begin", e.detail.direction, e);
      const direction = e.detail.direction;
      console.log(e.detail.x, e.detail.y, "dir");

      if (direction === null) {
        return;
      }

      if (direction % 2 === 0) {
        console.log("right");
        variantSlides[0].style.transform = "translateX(0)";
        variantSlides[1].style.transform = "translateX(0)";
        variantSlides[3].style.transform = "translateX(0)";
      } else {
        console.log("left");
        variantSlides[0].style.transform = "translateX(-103%)";
        variantSlides[1].style.transform = "translateX(-100%)";
        variantSlides[3].style.transform = "translateX(-97%)";
        return;
      }
    })
  : "";

variantSlides[1] !== undefined
  ? variantSlides[1].addEventListener("swipe.progress", function (e) {
      console.log("swiped begin", e.detail.direction, e);
      const direction = e.detail.direction;
      console.log(e.detail.x, e.detail.y, "dir");

      if (direction === null) {
        return;
      }

      if (direction % 2 === 0) {
        console.log("right");
        variantSlides[0].style.transform = "translateX(0)";
        variantSlides[1].style.transform = "translateX(3%)";
      } else {
        console.log("left");
        variantSlides[0].style.transform = "translateX(-200%)";
        variantSlides[1].style.transform = "translateX(-203%)";
        variantSlides[3].style.transform = "translateX(-200%)";
        return;
      }
    })
  : "";

variantSlides[3] !== undefined
  ? variantSlides[3].addEventListener("swipe.progress", function (e) {
      console.log("swiped begin", e.detail.direction, e);
      const direction = e.detail.direction;
      console.log(e.detail.x, e.detail.y, "dir");

      if (direction === null) {
        return;
      }

      if (direction % 2 === 0) {
        console.log("right here");
        variantSlides[0].style.transform = "translateX(-103%)";
        variantSlides[1].style.transform = "translateX(-100%)";
        variantSlides[3].style.transform = "translateX(-97%)";
      } else {
        return;
      }
    })
  : "";

let slideTracker = 0;
slides[slideTracker] !== undefined
  ? (slides[slideTracker].style.opacity = 1)
  : "";

setInterval(function () {
  if (slideTracker < slides.length - 1) {
    slideTracker += 1;
    slides.forEach((item) => {
      item.style.opacity = 0;
    });
    slides[slideTracker] !== undefined
      ? (slides[slideTracker].style.opacity = 1)
      : "";
  } else {
    slideTracker = 0;
    slides.forEach((item) => {
      item.style.opacity = 0;
    });
    slides[slideTracker] !== undefined
      ? (slides[slideTracker].style.opacity = 1)
      : "";
  }
}, 5000);

headerLabel !== undefined && headerLabel !== null
  ? headerLabel.addEventListener("click", function () {
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
    })
  : "";

let variantNavTracker = 0;
let reset = false;

variantNavigatiors.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.classList.contains("variants__navi--right")) {

      variantNavTracker += 1;
      Array.from(document.querySelectorAll(".variants__slide--item"))[
        variantNavTracker
      ].style.transform = `translateX(-${variantNavTracker}00%)`;
      Array.from(document.querySelectorAll(".variants__slide--item"))[
        variantNavTracker - 1
      ].style.transform = `translateX(-${variantNavTracker}20%)`;
    }

    if (item.classList.contains("variants__navi--left")) {
      console.log("left");
    }
  });
});

console.log("variant btns", variantBtns);
variantBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(btn.classList);
  });
});
