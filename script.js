'use strict';
const burger = document.querySelector(".burger");
const menuMobile = document.querySelector(".navButtonMobile");

burger.addEventListener("click", () => {
    menuMobile.classList.toggle("OpenBurger");
    menuMobile.classList.toggle("closeBurger");
});