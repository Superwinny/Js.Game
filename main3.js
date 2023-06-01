
// Déclaration des variables globales
let selectedImageElement = document.getElementById('selectedImage');
let imageURL = localStorage.getItem('selectedImage');



// Modifier les sélecteurs des éléments de l'interface utilisateur
const ptnVieElement = document.querySelector('.infoGame #ptnVie');
const potionSoinElement = document.querySelector('.infoGame #potionSoin');
const armeElement = document.querySelector('.infoGame #arme');
const goldElement = document.querySelector('.infoGame #gold');
const pvEnemyElement = document.getElementById('pvEnemy');
const armeEnemyElement = document.getElementById('armeEnemy');
const degatsEnemyElement = document.getElementById('degatsEnemy');
const faiblesseEnemyElement = document.getElementById('faiblesseEnemy');
const buttonAttack = document.getElementById('buttonAttack');
const buttonAchat = document.getElementById('buttonAchat');

// Récupérer le héros depuis le stockage local
const hero = Hero.getHeroFromLocalStorage();

// Vérifier si un héros a été sélectionné
if (hero) {
  console.log(hero);
  // Afficher les informations du héros dans l'interface utilisateur
  selectedImageElement.src = hero.img;

  hero.afficher(ptnVieElement, potionSoinElement, armeElement, goldElement);
  
  // Fonction pour attaquer
  const attaquer = () => {
    hero.attaquer();
  };

// Fonction pour acheter
const acheter = () => {
  const marchand = new Marchand();
  marchand.vendreItem(hero.classe); // Passer la classe du héros
};
  // Ajouter un écouteur d'événements au clic sur le bouton d'attaque
  buttonAttack.addEventListener('click', attaquer);

  // Ajouter un écouteur d'événements au clic sur le bouton d'achat
  buttonAchat.addEventListener('click', acheter);
} else {
  console.log("Aucun héros sélectionné.");
}