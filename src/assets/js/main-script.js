const mobileNav = document.getElementById("mobile-nav");
const hamburgerBtn = document.getElementById("hamburger-button");
const closeBtn = document.getElementById("close-button");

function show() {
  mobileNav.classList.remove("hidden");
  mobileNav.classList.add("block");
}

function hidden() {
  mobileNav.classList.remove("block");
  mobileNav.classList.add("hidden");
}

hamburgerBtn.addEventListener("click", show);
closeBtn.addEventListener("click", hidden);
