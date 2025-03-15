// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll animation on mouse wheel
let isScrolling = false;

window.addEventListener('wheel', function (e) {
  if (isScrolling) return; // Prevent multiple scrolls at once
  isScrolling = true;

  const delta = e.deltaY; // Get scroll direction
  const scrollAmount = window.innerHeight; // Scroll by one viewport height

  if (delta > 0) {
    // Scroll down
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth'
    });
  } else {
    // Scroll up
    window.scrollBy({
      top: -scrollAmount,
      behavior: 'smooth'
    });
  }

  // Reset scrolling flag after animation completes
  setTimeout(() => {
    isScrolling = false;
  }, 1000); // Adjust timeout based on scroll duration
});