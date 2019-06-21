var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var wrapper = document.querySelector(".feedback-wrapper")

var sliderСontrol = document.querySelectorAll(".slider-control");
var slide = document.querySelectorAll(".slider-item");
var body = document.querySelector("body");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  wrapper.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  wrapper.classList.remove("modal-show");
});

wrapper.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  wrapper.classList.remove("modal-show");
});


sliderСontrol[0].addEventListener("click", function(evt) {
  slide[0].classList.add("slide-show");
  slide[1].classList.remove("slide-show");
  slide[2].classList.remove("slide-show");
  body.classList.add("slider-background-1");
  body.classList.remove("slider-background-2");
  body.classList.remove("slider-background-3");
});

sliderСontrol[1].addEventListener("click", function(evt) {
  slide[0].classList.remove("slide-show");
  slide[1].classList.add("slide-show");
  slide[2].classList.remove("slide-show");
  body.classList.remove("slider-background-1");
  body.classList.add("slider-background-2");
  body.classList.remove("slider-background-3");
});

sliderСontrol[2].addEventListener("click", function(evt) {
  slide[0].classList.remove("slide-show");
  slide[1].classList.remove("slide-show");
  slide[2].classList.add("slide-show");
  body.classList.remove("slider-background-1");
  body.classList.remove("slider-background-2");
  body.classList.add("slider-background-3");
});
