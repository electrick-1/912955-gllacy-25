var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal-feedback");
var wrapper = document.querySelector(".feedback-wrapper");

if(popup) {
  var close = popup.querySelector(".modal-close");

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

  document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      popup.classList.remove("modal-show");
      wrapper.classList.remove("modal-show");
    }
  });
};


var sliderСontrol = document.querySelectorAll(".slider-control");
var slide = document.querySelectorAll(".slider-item");
var body = document.querySelector("body");

if (slide.length > 0) {
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
}

var hoverMenu = document.querySelector(".navi-catalog");
var dropMenu = document.querySelector(".drop-down-menu");

hoverMenu.addEventListener("mouseover", function(evt) {
  dropMenu.classList.add("modal-show");
});

var searchLink = document.querySelector(".search-link");
var modalSearch = document.querySelector(".modal-search");

searchLink.addEventListener("mouseover", function(evt) {
  modalSearch.classList.add("modal-show");
});

var loginLink = document.querySelector(".login-link");
var modalLogin = document.querySelector(".modal-login");

loginLink.addEventListener("mouseover", function(evt) {
  modalLogin.classList.add("modal-show");
});

var buyLink = document.querySelector(".buy-link-current");
var modalPurchases = document.querySelector(".purchases-section");

buyLink.addEventListener("mouseover", function(evt) {
  modalPurchases.classList.add("modal-flex-show");
});

document.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    dropMenu.classList.remove("modal-show");
    modalSearch.classList.remove("modal-show");
    modalLogin.classList.remove("modal-show");
    modalPurchases.classList.remove("modal-flex-show");
  }
});
