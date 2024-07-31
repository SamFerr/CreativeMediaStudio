"use strict";

// Navbar Toggle
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

// Check if navbarToggler exists
if (navbarToggler) {
  navbarToggler.addEventListener("click", function () {
    const isActive = navbar.classList.toggle("active");
    this.classList.toggle("active");
    this.setAttribute("aria-expanded", isActive);
  });
}

// Close navbar when a link is clicked
navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navbar) {
      navbar.classList.remove("active");
    }
    if (navbarToggler) {
      navbarToggler.classList.remove("active");
      navbarToggler.setAttribute("aria-expanded", "false");
    }
  });
});

// Search Toggle
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

// Check if searchTogglers and searchBox exist
if (searchTogglers.length && searchBox) {
  searchTogglers.forEach(toggler => {
    toggler.addEventListener("click", function () {
      searchBox.classList.toggle("active");
    });
  });

  // Close search box when clicking outside
  document.addEventListener("click", (event) => {
    if (!searchBox.contains(event.target) && !searchTogglers[0].contains(event.target)) {
      searchBox.classList.remove("active");
    }
  });
}

// Header and Back-to-Top Button
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

// Debounced scroll handler for better performance
let isScrolling;
window.addEventListener("scroll", function () {
  if (header && backTopBtn) {
    if (window.scrollY >= 200) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  }

  // Smooth scroll to top
  backTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}, { passive: true });
