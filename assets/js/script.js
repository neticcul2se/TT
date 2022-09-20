"use strict";

/**nav bar*/

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

/** show btn scroll window */
const goTopBtn = document.querySelector("[data-go-to-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});
