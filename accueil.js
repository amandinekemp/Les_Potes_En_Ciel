// Custom JS for handling any specific functionality

// Example: Toggle dropdown menu
document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        // Toggle the menu (e.g., open/close the sidebar or dropdown)
        var dropdownMenu = document.getElementById('dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.classList.toggle('visible');
          dropdownMenu.classList.toggle('hidden');
        }
    });
  }
});
