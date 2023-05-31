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

// // Gestionnaire d'événement de clic pour le bouton de validation
// confirmButton.addEventListener('click', function() {
// // Vérifier si une image est sélectionnée
// if (selectedImageURL) {
//   // Rediriger vers la page "index3.html" avec l'URL de l'image sélectionnée
//   window.location.href = 'index3.html?image=' + encodeURIComponent(selectedImageURL);
// } else {
//   alert('Veuillez sélectionner une image avant de valider votre choix.');
// }
// });



// Sélectionner le bouton "Attaquer"
const buttonAttack = document.getElementById('buttonAttack');
console.log(buttonAttack)

// Ajouter un écouteur d'événements au clic sur le bouton
buttonAttack.addEventListener('click', attaquer);


// Variable pour stocker l'image sélectionnée par l'utilisateur
let imageSelectionnee = ""; // Mettez à jour cette variable avec l'image sélectionnée

let adversaire = {
  pointsDeVie: 100,
  arme: 'Épée',
  degats: 20,
  faiblesses: ['Tranchant']
};

function attaquer() {
  
  // Récupérer l'arme sélectionnée par l'utilisateur
  let armeSelect = document.querySelector('input[name="arme"]:checked').value;

  let degats = 0;
  let typeDegats = "";

  switch (armeSelect) {
    case "guerrier":
      degats = Math.floor(Math.random() * 10) + 1;
      typeDegats = "tranchante";
      break;
    case "mage":
      degats = Math.floor(Math.random() * 8) + 5;
      typeDegats = "magic";
      break;
    case "chasseur":
      let chanceCritique = Math.random();
      if (chanceCritique < 0.3) {
        degats = Math.floor(Math.random() * 15) + 10;
        typeDegats = "critique";
      } else {
        degats = Math.floor(Math.random() * 8) + 5;
        typeDegats = "normal";
      }
      break;
    
  }

  // Calculer les dégâts en fonction du type d'arme
  switch (typeDegats) {
    case "tranchante":
      degats = degats + 5; // Exemple : dégâts supplémentaires pour une arme tranchante
      break;
    case "magic":
      degats = degats + 3; // Exemple : dégâts supplémentaires pour une arme de type magi
      break;
    case "critique":
      degats = degats * 2; // Exemple : dégâts doublés pour un coup critique
      break;
    case "normal":
      // Pas de modifications supplémentaires pour les dégâts normaux
      break;
    default:
      console.log("Type de dégâts non reconnu.");
  }

  // Appliquer les dégâts à l'adversaire (exemple : soustraire les dégâts à ses points de vie)
  adversaire.pointsDeVie -= degats;

  // Afficher les informations de l'attaque et les dégâts infligés
  console.log("Attaque réussie !");
  console.log("Dégâts infligés : " + degats);
  console.log("Points de vie restants de l'adversaire : " + adversaire.pointsDeVie);
}




// Récupérer la référence du bouton d'achat
let buttonAchat = document.getElementById('buttonAchat');

// Ajouter un gestionnaire d'événements pour le clic sur le bouton d'achat
buttonAchat.addEventListener('click', acheter);
















// TEST
//  //Tableau contenant un seul adversaire
//  const adversaires = [
//    {
//      image: 'img/Hero,svg',
//      pointsDeVie: 100,
//      arme: 'Main',
//      degats: 20,
//      faiblesses: ['Tranchant']
//    }
//  ];
//  //Récupérer l'adversaire sélectionné (premier adversaire du tableau)
//  const adversaireSelectionne = adversaires[0];
//  //Mettre à jour les informations de l'adversaire dans les éléments HTML
//  document.getElementById('enemyImage').src = adversaireSelectionne.image;
//  document.getElementById('pvEnemy').textContent = adversaireSelectionne.pointsDeVie;
//  document.getElementById('armeEnemy').textContent = adversaireSelectionne.arme;
//  document.getElementById('degatsEnemy').textContent = adversaireSelectionne.degats;
//  document.getElementById('faiblesseEnemy').textContent = adversaireSelectionne.faiblesses.join(', ');