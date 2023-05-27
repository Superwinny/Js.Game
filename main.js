// Fonction pour récupérer les paramètres d'URL
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
// Récupérer toutes les images de la page
let images = document.querySelectorAll('.card-img');
let confirmButton = document.getElementById('confirmButton');
let selectedImageURL = null;

// Ajouter un gestionnaire d'événement de clic à chaque image
images.forEach(function(image) {
image.addEventListener('click', function() {
  // Supprimer la classe "selected" de toutes les images
  images.forEach(function(img) {
    img.classList.remove('selected');
  });

  // Ajouter la classe "selected" à l'image cliquée
  this.classList.add('selected');

  // Enregistrer l'URL de l'image sélectionnée
  selectedImageURL = this.getAttribute('data-image-url');

  // Activer le bouton de validation
  confirmButton.disabled = false;
});
});

// Gestionnaire d'événement de clic pour le bouton de validation
confirmButton.addEventListener('click', function() {
// Vérifier si une image est sélectionnée
if (selectedImageURL) {
  // Rediriger vers la page "index3.html" avec l'URL de l'image sélectionnée
  window.location.href = 'index3.html?image=' + encodeURIComponent(selectedImageURL);
} else {
  alert('Veuillez sélectionner une image avant de valider votre choix.');
}
});