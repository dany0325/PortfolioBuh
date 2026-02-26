document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Mobile Menu Toggle
  const toggleMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
  }

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});
