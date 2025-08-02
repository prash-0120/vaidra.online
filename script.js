// Scroll reveal on sections
const sections = document.querySelectorAll('.animate');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const themeToggle = document.getElementById('themeToggle');

const revealOnScroll = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
};

// Show scroll to top button
window.addEventListener('scroll', () => {
  revealOnScroll();

  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Scroll to top action
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});