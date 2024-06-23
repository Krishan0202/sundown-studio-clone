// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

let elemContainer = document.querySelector("#elem-container");
let fixedImage = document.querySelector("#fixed-image");
elemContainer.addEventListener("mouseenter", function () {
  fixedImage.style.display = "block";
});
elemContainer.addEventListener("mouseleave", function () {
  fixedImage.style.display = "none";
});

// let elem1 = document.querySelector("#elem1");

// elem1.addEventListener("mouseenter", function () {
//   let image = elem1.getAttribute("data-image");
//   fixedImage.style.backgroundImage = `url(${image})`;
// });

let elems = document.querySelectorAll(".elem");

elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    let image = e.getAttribute("data-image");
    fixedImage.style.backgroundImage = `url(${image})`;
  });
});
