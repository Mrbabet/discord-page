const menuAcitve = document.querySelector(".burger-button");
const mobileNav = document.querySelector(".nav-mobile");

let buttonActive = false;

menuAcitve.addEventListener("click", () => {
  if (!buttonActive) {
    mobileNav.classList.add("active");
    menuAcitve.classList.add("active");
    // faMoon.classList.add("active");
    // icon.classList.add("active");
    buttonActive = true;
  } else {
    mobileNav.classList.remove("active");
    menuAcitve.classList.remove("active");
    // faSun.classList.remove("active");
    // faMoon.classList.remove("active");
    // icon.classList.remove("active");
    buttonActive = false;
  }
});

const selectButton = document.querySelector(".selected-lang");
const langMenu = document.querySelector(".dropdown-container");

selectButton.addEventListener("click", () => {
  if (!buttonActive) {
    langMenu.classList.add("active");
    buttonActive = true;
  } else {
    langMenu.classList.remove("active");
    buttonActive = false;
  }
});