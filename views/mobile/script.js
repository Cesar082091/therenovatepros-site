const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

// Abrir el sidebar
menuToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Cerrar el sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Open sidebar
const menuToggleMobile = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggleMobile.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
