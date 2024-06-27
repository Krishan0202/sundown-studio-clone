const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  let elemContainer = document.querySelector("#elem-container");
  let fixedImage = document.querySelector("#fixed-image");
  elemContainer.addEventListener("mouseenter", function () {
    fixedImage.style.display = "block";
  });
  elemContainer.addEventListener("mouseleave", function () {
    fixedImage.style.display = "none";
  });

  let elems = document.querySelectorAll(".elem");

  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let image = e.getAttribute("data-image");
      fixedImage.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });
}
swiperAnimation();
page4Animation();
