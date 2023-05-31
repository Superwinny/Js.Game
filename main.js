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







// Sélectionner le bouton "Attaquer"
const buttonAttack = document.getElementById('buttonAttack');
console.log(buttonAttack)

