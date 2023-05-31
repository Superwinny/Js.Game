let imageURL;
const selectedImageElement = document.getElementById('selectedImage');
selectedImageElement.onload = () => {
  imageURL = selectedImageElement.src;
};

// Sélectionner les éléments de l'interface utilisateur
const ptnVieElement = document.querySelector('.infoGame p:nth-child(1)');
const potionSoinElement = document.querySelector('.infoGame p:nth-child(2)');
const armeElement = document.querySelector('.infoGame p:nth-child(3)');
const goldElement = document.querySelector('.infoGame p:nth-child(5)');
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
  // Afficher les informations du héros dans l'interface utilisateur
  ptnVieElement.textContent = 'PV ' + hero.getPtnVie();
  potionSoinElement.textContent = 'Potion de soin ' + hero.getPotionSoin();
  armeElement.textContent = 'Arme ' + hero.getArme();
  goldElement.textContent = 'Gold ' + hero.getGold();

  // Fonction pour attaquer
  const attaquer = () => {
    hero.attaquer();
  };

  // Fonction pour acheter
  const acheter = () => {
    const marchand = new Marchand();
    marchand.vendreItem(hero);
  };

  // Ajouter un écouteur d'événements au clic sur le bouton d'attaque
  buttonAttack.addEventListener('click', attaquer);

  // Ajouter un écouteur d'événements au clic sur le bouton d'achat
  buttonAchat.addEventListener('click', acheter);
} else {
  console.log("Aucun héros sélectionné.");
}