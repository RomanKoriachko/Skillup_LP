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
  $(".slider").slick({});
});
