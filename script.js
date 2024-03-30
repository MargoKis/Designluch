const Logo = "./assets/svg/Logo.svg";
const AriseHealth = "./assets/svg/AriseHealth.svg";
const Ephicient = "./assets/svg/Ephicient.svg";
const INC = "./assets/svg/2020INC.svg";
const ThePaak = "./assets/svg/ThePaak.svg";
const Pipelinx = "./assets/svg/Pipelinx.svg";
const Together = "./assets/svg/Together.svg";

function updateBurgerMenu() {
  var navbar = document.getElementById("navbar");
  var burgerMenu = document.getElementById("burgerMenu");
  var closeMenu = document.getElementById("closeMenu");
  var screenWidth = window.innerWidth;

  if (screenWidth < 988) {
    burgerMenu.style.display = "block";
    closeMenu.style.display = "none";
    navbar.classList.remove("active");
  } else {
    burgerMenu.style.display = "none";
    closeMenu.style.display = "none";
    navbar.classList.remove("active");
  }
}

document.getElementById("burgerMenu").addEventListener("click", function () {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
  var burgerMenu = document.getElementById("burgerMenu");
  var closeMenu = document.getElementById("closeMenu");
  burgerMenu.style.display = "none";
  closeMenu.style.display = "block";
});

document.getElementById("closeMenu").addEventListener("click", function () {
  var navbar = document.getElementById("navbar");
  navbar.classList.remove("active");
  var burgerMenu = document.getElementById("burgerMenu");
  var closeMenu = document.getElementById("closeMenu");
  burgerMenu.style.display = "block";
  closeMenu.style.display = "none";
});

window.addEventListener("resize", function () {
  updateBurgerMenu();
});

window.addEventListener("load", function () {
  updateBurgerMenu();
});
