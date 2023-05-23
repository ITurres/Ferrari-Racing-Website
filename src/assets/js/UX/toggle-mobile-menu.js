const toggleMobileMenuButtons = document.querySelectorAll(
  '[data-toggle-mobile-menu-btn]'
);

const toggleMobileMenu = () => {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  mobileMenu.classList.toggle('toggle-mobile-menu');
};

toggleMobileMenuButtons.forEach((button) => {
  button.addEventListener('click', toggleMobileMenu);
});

window.addEventListener('load', toggleMobileMenu);
