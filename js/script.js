var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal-feedback");
var wrapper = document.querySelector(".feedback-wrapper");

if(popup) {
  var close = popup.querySelector(".modal-close");
  var login = popup.querySelector("[name=feedback-name-field]");
  var form = popup.querySelector(".feedback-form");
  var email = popup.querySelector("[name=feedback-email-field]");
  var text = popup.querySelector("[name=feedback-text]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-feedback-show");
    wrapper.classList.add("modal-feedback-show");

    if (storage) {
      login.value = storage;
      email.value = storage;
      text.focus();
    }
    else {
      login.focus();
    }
  });

  var remove = function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-show");
    wrapper.classList.remove("modal-feedback-show");
    wrapper.classList.remove("modal-error");
  }

  close.addEventListener("click", remove);

  wrapper.addEventListener("click", remove);

  document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      remove(evt);
    }
  });

  var button = form.querySelector("button");

  button.addEventListener("click", function (evt) {
    if (!login.value || !email.value || !text.value) {
      evt.preventDefault();
      wrapper.classList.remove("modal-error");
      wrapper.offsetWidth = popup.offsetWidth;
      wrapper.classList.add("modal-error");
    }
    else {
      if (isStorageSupport) {
        localStorage.setItem("login, login.value");
        localStorage.setItem("email, email.value");
      }
    }
  })
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
  evt.preventDefault();
  var remove = document.querySelectorAll(".modal-show");
  for (var i = 0; i < remove.length; i++) {
    remove[i].classList.remove("modal-show");
  }
  dropMenu.classList.add("modal-show");
});

var searchLink = document.querySelector(".search-link");
var modalSearch = document.querySelector(".modal-search");
var searchLogin = modalSearch.querySelector("[name=search-field]");

searchLink.addEventListener("mouseover", function(evt) {
  evt.preventDefault();
  var remove = document.querySelectorAll(".modal-show");
  for (var i = 0; i < remove.length; i++) {
    remove[i].classList.remove("modal-show");
  }
  modalSearch.classList.add("modal-show");
  searchLogin.focus();
});

var loginLink = document.querySelector(".login-link");
var modalLogin = document.querySelector(".modal-login");
var emailLogin = modalLogin.querySelector("[name=login-email-field]");

loginLink.addEventListener("mouseover", function(evt) {
  evt.preventDefault();
  var remove = document.querySelectorAll(".modal-show");
  for (var i = 0; i < remove.length; i++) {
    remove[i].classList.remove("modal-show");
  }
  modalLogin.classList.add("modal-show");
  emailLogin.focus();
});

var buyLink = document.querySelector(".buy-link-current");
var modalPurchases = document.querySelector(".purchases-wrapper");

if (modalPurchases) {
  buyLink.addEventListener("mouseover", function(evt) {
    evt.preventDefault();
    var remove = document.querySelectorAll(".modal-show");
    for (var i = 0; i < remove.length; i++) {
      remove[i].classList.remove("modal-show");
    }
    modalPurchases.classList.add("modal-show");
  });
}

document.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    var remove = document.querySelectorAll(".modal-show");
    for (var i = 0; i < remove.length; i++) {
      remove[i].classList.remove("modal-show");
    }
  }
});
