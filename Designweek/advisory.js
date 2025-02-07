function toggleMenu() {
    const nav = document.getElementById('nav');
    // Toggle the display property to show/hide the menu
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
    }
  }
  