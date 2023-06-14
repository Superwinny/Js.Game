//Sélectionner la div du message
const messageContainer = document.getElementById("message-container");

// Déclaration des variables globales
let selectedImageElement = document.getElementById('selectedImage');
let selectedImageEnemy = document.getElementById('enemyImage');

// Modifier les sélecteurs des éléments de l'interface utilisateur

const degatsElement = document.querySelector('.infoGame #degats');
const ptnVieElement = document.querySelector('.infoGame #ptnVie');
 const armeElement = document.querySelector('.infoGame #arme');
const goldElement = document.querySelector('.infoGame #gold');
const pvEnemyElement = document.querySelector('.infoEnemy #pvEnemy');
const armeEnemyElement = document.querySelector('.infoEnemy #armeEnemy');
const degatsEnemyElement = document.querySelector('.infoEnemy #degatsEnemy');
const faiblesseEnemyElement = document.querySelector('.infoEnemy #faiblesseEnemy');
const buttonAttack = document.getElementById('buttonAttack');
const buttonAchat = document.getElementById('buttonAchat');

  // Mettre à jour l'interface utilisateur
   const mettreAJourInterface = (hero, enemy) => {
    hero.afficher(ptnVieElement, goldElement,armeElement, selectedImageElement,degatsElement);
    enemy.afficher(pvEnemyElement, degatsEnemyElement, armeEnemyElement, faiblesseEnemyElement, selectedImageEnemy);
  };

function getEnemy(enemyList,index){
  return enemyList[index]
}

// Déclaration d'une variable pour suivre l'état du clignotement
let isFlashing = false;

function flashEnemyImage() {
  if (isFlashing) {
    return Promise.resolve(); // Renvoyer une promesse résolue si le clignotement est déjà en cours
  }

  isFlashing = true;
  let visible = true;
  selectedImageEnemy.style.opacity = 1; // Réinitialiser l'opacité de l'image

  return new Promise((resolve, reject) => {
    const flashInterval = setInterval(() => {
      if (visible) {
        selectedImageEnemy.style.opacity = 0.2;
      } else {
        selectedImageEnemy.style.opacity = 1;
      }
      visible = !visible;
    }, 300); // Temps en millisecondes pour chaque clignotement

    setTimeout(() => {
      clearInterval(flashInterval); // Arrêter l'intervalle de clignotement
      selectedImageEnemy.style.opacity = 1; // Rétablir l'opacité de l'image au cas où elle serait réduite
      isFlashing = false; // Réinitialiser l'état du clignotement
      resolve(); // Résoudre la promesse une fois le clignotement terminé
    }, 2000); // Temps en millisecondes avant d'arrêter le clignotement
  });
}
function flashEnemyImageMort() {
  if (isFlashing) {
    return Promise.resolve(); // Renvoyer une promesse résolue si le clignotement est déjà en cours
  }

  isFlashing = true;
  selectedImageEnemy.style.opacity = 1; // Réinitialiser l'opacité de l'ennemi

  return new Promise((resolve, reject) => {
    let opacity = 1;

    const flashInterval = setInterval(() => {
      opacity -= 0.1; // Réduire l'opacité de 0.1 à chaque intervalle
      selectedImageEnemy.style.opacity = opacity;

      if (opacity <= 0) {
        clearInterval(flashInterval); // Arrêter l'intervalle lorsque l'opacité atteint 0
        selectedImageEnemy.style.display = "none"; // Masquer complètement l'image
        selectedImageEnemy.style.opacity = 1; // Rétablir l'opacité pour le prochain ennemi
        isFlashing = false; // Réinitialiser l'état du clignotement
        resolve(); // Résoudre la promesse une fois l'animation terminée
      }
    }, 100); // Temps en millisecondes pour chaque intervalle

    setTimeout(() => {
      clearInterval(flashInterval); // Arrêter l'intervalle de clignotement
      selectedImageEnemy.style.display = "block"; // Rétablir l'affichage de l'image
      selectedImageEnemy.style.opacity = 1; // Rétablir l'opacité de l'image pour le prochain ennemi
      isFlashing = false; // Réinitialiser l'état du clignotement
      resolve(); // Résoudre la promesse une fois le clignotement terminé
    }, 1000); // Temps en millisecondes avant d'arrêter le clignotement
  });
}
async function flashHeroImage() {
  if (isFlashing) {
    return Promise.resolve();
  }

  isFlashing = true;
  let visible = true;
  selectedImageElement.style.opacity = 1;

  return new Promise((resolve, reject) => {
    const flashInterval = setInterval(() => {
      if (visible) {
        selectedImageElement.style.opacity = 0.2;
      } else {
        selectedImageElement.style.opacity = 1;
      }
      visible = !visible;
    }, 300);

    setTimeout(() => {
      clearInterval(flashInterval);
      selectedImageElement.style.opacity = 1;
      isFlashing = false;
      resolve();
    }, 2000);
  });
}


function jouerPartie() {
   
    const hero = Hero.getHeroFromLocalStorage();
    let enemy = Enemy.getEnemyFromLocalStorage();
    const marchand = new Marchand();
    let round = 0 // TODO: get from local storage
    

  let enemyIndex = 0;
  
   const enemyList = [
     new Loup(20, "img/imgEnemy/Loup.svg", "Croc", "magic", 5),
     new Squelette(25,"img/imgEnemy/Squelette.svg","Épée","critique",6),
     new Fantome( 30,"img/imgEnemy/Fantome.svg","Ectoplasme","magic",8),
     new Zombie(35,"img/imgEnemy/Zombie.svg","Mains","trnahcant",8),
     new ZombieAffamer(40,"img/imgEnemy/ZombieAffamer.svg","Griffes","tranchant",10),
     new Ours(45, "img/imgEnemy/Ours.svg", "Griffes", "Feu", 10),
     new PetitDragon(50,"img/imgEnemy/PetitDragon.svg","Feu", "critique",12),
     new Minotor(55,"img/imgEnemy/Minotor.svg","Hache","critique",14),
     new GuerrierOrc(55,"img/imgEnemy/GuerrierOrc.svg","Hache","critique",12),
     new GrosZombie(60,"img/imgEnemy/GrosZombie.svg","Mains","tranchant",14),
     new Gorille(50,"img/imgEnemy/Gorille.svg","Poings","critique",12),
     new Demon(65,"img/imgEnemy/Demon.svg","Trident de l'enfer","tranchant",14),
     new Golem(65, "img/imgEnemy/Golem.svg", "Massue", "magic", 15),
     new Hydre(75, "img/imgEnemy/Hydre.svg", "Crocs venimeux", "tranchant", 16),
     new ChienATroisTete(70,"img/imgEnemy/ChienTroisTete.svg","Crocs","tranchant",16),
     new ChevalierCorrompu( 75,"img/imgEnemy/ChevalierCoronpu.svg","Épée maudite","critique",18),
     new DragonRouge( 90,"img/imgEnemy/DragonRouge.svg","Souffle de feu","critique",20),
     new DragonBleu(85, "img/imgEnemy/DragonBleu.svg", "Souffle de glace", "critique", 18),
     new MasterDragon( 100,"img/imgEnemy/MasterDragon.svg","Feu","Glace",25),
   ];
  
  // Vérifier si un héros a été sélectionné
  if (hero) {
    if (!enemy) {
      enemy = getEnemy(enemyList, round);
      enemy.afficher(pvEnemyElement, degatsEnemyElement, armeEnemyElement, faiblesseEnemyElement, selectedImageEnemy);
    }
  } else {
    // Rediriger sur le premier index
    window.location.href = "index.html";
  }

  mettreAJourInterface(hero, enemy);

  // Fonction pour l'attaque de l'ennemi
  const enemyAttaque = async (enemy, hero) => {
    hero.ptnVie -= enemy.degats;
    const attackMessage = `${enemy.constructor.name} attaque ${hero.constructor.name} et inflige ${enemy.degats} points de dégâts.`;
    messageContainer.innerHTML += `<p>${attackMessage}</p>`;
    await flashHeroImage();
    
    
  
    if (hero.ptnVie <= 0) {
      console.log(`${hero.constructor.name} est mort ! Partie terminée.`);
      return;
    }
  };
  

  // Fonction pour attaquer
  const attaquer = async () => {
    if (enemy && enemy.ptnVie > 0) {
      hero.attaquer(enemy);
      await flashEnemyImage();
    
      if (enemy.ptnVie <= 0) {
        console.log(`${enemy.constructor.name} est vaincu !`);
        enemyIndex++;
        await flashEnemyImageMort();
      
        if (enemyIndex >= enemyList.length) {
        
          return;
        }
      
        enemy = getEnemy(enemyList, ++round);
        mettreAJourInterface(hero, enemy);
      
        if (enemyIndex > 0 && enemyIndex % 5 === 0 && Math.random() <= 0.5) {
          console.log("Le marchand apparaît !");
          enemy.setEnemyIntoLocalStorage();
          hero.setHeroIntoLocalStorage();
          window.location.href = "marchand.html";
        }
      } else {
        enemyAttaque(enemy, hero);
      }

      mettreAJourInterface(hero, enemy);
     
    } else {
      console.log("Il n'y a pas d'ennemi à attaquer !");
    }
  };

  buttonAttack.addEventListener("click", attaquer);
}

jouerPartie();