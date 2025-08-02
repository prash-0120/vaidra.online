// Toggle mobile navigation menu
function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
