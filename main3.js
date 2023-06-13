
// Déclaration des variables globales
let selectedImageElement = document.getElementById('selectedImage');
let selectedImageEnemy = document.getElementById('enemyImage');

// Modifier les sélecteurs des éléments de l'interface utilisateur
const degatsElement = document.querySelector('.infoGame #degats');


const ptnVieElement = document.querySelector('.infoGame #ptnVie');
// const potionSoinElement = document.querySelector('.infoGame #potionSoin');
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

function jouerPartie() {
   
    const hero = Hero.getHeroFromLocalStorage();
    let enemy = Enemy.getEnemyFromLocalStorage();
    const marchand = new Marchand();
    let round = 0
    
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
  
   if(!enemy){
    enemy = getEnemy(enemyList, round)
    enemy.afficher(pvEnemyElement, degatsEnemyElement,armeEnemyElement,faiblesseEnemyElement,selectedImageEnemy)
   }
 } else {
  // Rediriger sur le premier index 
   window.location.href = "index.html";
 }

 mettreAJourInterface(hero, enemy)

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
  
  
  
  // Fonction pour attaquer
  const attaquer = () => {
  
    if (enemy && enemy.ptnVie > 0) {
      hero.attaquer(enemy);

      if (enemy.ptnVie <= 0) {
        console.log(`${enemy.constructor.name} est vaincu !`);
        enemyIndex++;

        if (enemyIndex >= enemyList.length) {
          console.log("Vous avez vaincu tous les ennemis !");
          return;
        }

        enemy = getEnemy(enemyList, ++round);
        mettreAJourInterface(hero, enemy);

        if (enemyIndex > 0 && enemyIndex % 5 === 0) {
          console.log("Le marchand apparaît !");
          enemy.setEnemyIntoLocalStorage();
          hero.setHeroIntoLocalStorage();
          mettreAJourInterface(hero, enemy)
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
 jouerPartie()