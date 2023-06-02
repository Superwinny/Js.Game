
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





function jouerPartie() {
  const hero = new Guerrier();
  const marchand = new Marchand();
  let phase = 1;
  let enemyIndex = 0;
  const enemyList = [
    new Loup(),
    new ZombieAffamer(),
    new Zombie(),
    new Squelette(),
    new PetitDragon(),
    new Ours(),
    new Minotor(),
    new MasterDragon(),
    new Hydre(),
    new GuerrierOrc(),
    new GrosZombie(),
    new Gorille(),
    new Golem(),
    new Fantome(),
    new DragonRouge(),
    new DragonBleu(),
    new Demon(),
    new ChienATroisTete(),
    new ChevalierCorrompu()
  ];

  // Fonction pour attaquer
  const attaquer = () => {
    const currentEnemy = enemyList[enemyIndex];

    if (currentEnemy && currentEnemy.ptnVie > 0) {
      currentEnemy.ptnVie -= hero.degats;
      console.log(`Vous attaquez ${currentEnemy.constructor.name} !`);
      console.log(`Dégâts infligés: ${hero.degats}`);
      console.log(`Points de vie restants: ${currentEnemy.ptnVie}`);

      if (currentEnemy.ptnVie <= 0) {
        console.log(`${currentEnemy.constructor.name} est vaincu !`);
        enemyIndex++;
        if (enemyIndex >= enemyList.length) {
          console.log("Vous avez vaincu tous les ennemis !");
          return;
        }
        const nextEnemy = enemyList[enemyIndex];
        console.log(`Prochain ennemi: ${nextEnemy.constructor.name}`);
        nextEnemy.afficher(pvEnemyElement, degatsEnemyElement, armeEnemyElement, faiblesseEnemyElement);
      } else {
        enemyAttaque(currentEnemy, hero);
      }
    } else {
      console.log("Il n'y a pas d'ennemi à attaquer !");
    }
  };

  // Fonction pour l'attaque de l'ennemi
  const enemyAttaque = (enemy, hero) => {
    hero.ptnVie -= enemy.degats;
    console.log(`${enemy.constructor.name} attaque ${hero.constructor.name} !`);
    console.log(`Dégâts infligés: ${enemy.degats}`);
    console.log(`Points de vie restants: ${hero.ptnVie}`);

    if (hero.ptnVie <= 0) {
      console.log(`${hero.constructor.name} est mort ! Partie terminée.`);
      return;
    }
  };

  // Fonction pour acheter
  const acheter = () => {
    const magasin = marchand.getMagasin(hero.constructor);
    // Afficher le magasin dans l'interface utilisateur et gérer l'achat
  };

  // Mettre à jour l'interface utilisateur
  const mettreAJourInterface = () => {
    hero.afficher(ptnVieElement, potionSoinElement, armeElement, goldElement);
    const currentEnemy = enemyList[enemyIndex];
    if (currentEnemy) {
      currentEnemy.afficher(pvEnemyElement, degatsEnemyElement, armeEnemyElement, faiblesseEnemyElement);
    }
  };

  // Gérer les événements de clic sur les boutons
  buttonAttack.addEventListener('click', attaquer);
  buttonAchat.addEventListener('click', acheter);

  // Initialiser l'interface utilisateur
  mettreAJourInterface();

  while (enemyIndex < enemyList.length && hero.ptnVie > 0) {
    console.log(`Phase ${phase}`);
    const currentEnemy = enemyList[enemyIndex];
    console.log(`Prochain ennemi: ${currentEnemy.constructor.name}`);
    currentEnemy.afficher(pvEnemyElement, degatsEnemyElement, armeEnemyElement, faiblesseEnemyElement);

    // Attente de l'action du joueur (attaque ou achat)
    // Mettez ici la logique pour gérer les actions du joueur et les mises à jour de l'interface utilisateur

    phase++;
  }
}