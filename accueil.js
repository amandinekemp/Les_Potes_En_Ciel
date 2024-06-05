$(document).ready(function() {
  // Fonction pour ajuster la hauteur de l'élément .carousel-inner
  function adjustCarouselHeight() {
    var screenWidth = $(window).width();
    var carouselHeight = 210; // Hauteur par défaut pour une feuille A4

    // Ajuster la hauteur en fonction de la largeur de l'écran
    if (screenWidth < 768) { // Pour les écrans de moins de 768 px de largeur
      carouselHeight = 150; // Réduire la hauteur à 150 px
    } else if (screenWidth < 992) { // Pour les écrans de 768 px à 991 px de largeur
      carouselHeight = 180; // Réduire la hauteur à 180 px
    }

    // Appliquer la nouvelle hauteur à l'élément .carousel-inner
    $('.activities .carousel-inner').css('height', carouselHeight);
  }

  // Appeler la fonction pour ajuster la hauteur lorsque la page est chargée
  adjustCarouselHeight();

  // Appeler la fonction pour ajuster la hauteur lorsque la taille de l'écran change
  $(window).resize(function() {
    adjustCarouselHeight();
  });
});
