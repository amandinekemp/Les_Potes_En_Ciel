$(document).ready(function() {
  $('#togglePassword').click(function() {
      const passwordField = $('#password');
      const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
      passwordField.attr('type', type);
      $(this).find('i').toggleClass('bi-eye bi-eye-slash');
  });

  $('#togglePasswordSignup').click(function() {
      const passwordField = $('#passwordSignup');
      const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
      passwordField.attr('type', type);
      $(this).find('i').toggleClass('bi-eye bi-eye-slash');
  });
});
