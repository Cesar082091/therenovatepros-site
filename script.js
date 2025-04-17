const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

// Open sidebar
const menuToggleMobile = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggleMobile.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});


// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
