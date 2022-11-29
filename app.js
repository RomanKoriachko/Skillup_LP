let dropdownMenu = document.querySelectorAll(".benefits-section-item-wrapper");
let dropdownItem = document.querySelectorAll(".benefits-section-subitem");
let dropdownButton = document.querySelectorAll(".benefits-section-item-btn");

for (let i = 0; i < dropdownMenu.length; i++) {
  dropdownMenu[i].addEventListener("click", function () {
    dropdownItem[i].classList.toggle("active");
    dropdownButton[i].classList.toggle("active-btn");
  });
}

$(document).ready(function () {
  $(".slider").slick({
    respondTo: "min",
  });
});

$(document).ready(function () {
  $(".suitable-slider").slick({
    dots: true,
    centerMode: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".suitable-slider-mobile").slick({
    dots: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".plan-section-slider").slick({
    dots: true,
    centerMode: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".plan-section-mobile-slider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".companies-slider").slick({
    arrows: false,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
  });
});
