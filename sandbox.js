const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.setAttribute("aria-expanded", false);

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");

  const ariaExpanded = hamburger.getAttribute("aria-expanded");

  if (ariaExpanded === "true") {
    hamburger.setAttribute("aria-expanded", false);
  } else {
    hamburger.setAttribute("aria-expanded", true);
  }
});
