/**********************************************************/
/******** Enemy  **************/
/**********************************************************/

class Enemy {
        #ptnVie;
        #imgURL;
        #arme;
        #faiblesseAttack;
        #degats; 
 
     constructor(ptnVie, imgURL,  arme, faiblesseAtttack, degats) {
         this.#ptnVie = ptnVie;
         this.#imgURL = imgURL;
         this.#arme = arme;
         this.#faiblesseAttack = faiblesseAtttack;
         this.#degats = degats;
       }
 
 /******** GET  **************/  
 

 get degats(){
   return this.#degats;
 }
 get arme(){
   return this.#arme;
 }
 get img(){
   return this.#imgURL;
 }
 get ptnVie()
 {
   return this.#ptnVie;
 }  
 get faiblesseAttack()
 {
   return this.#faiblesseAttack;
 }  
 
 
 
 afficher(pvEnemyElement,degatsEnemyElement,armeEnemyElement,faiblesseEnemyElement){
    pvEnemyElement.textContent =  'Point de vie' + this.ptnVie;
    degatsEnemyElement.textContent =  'Dégats ' + this.degats;
    armeEnemyElement.textContent =  'Arme ' + this.arme;
    faiblesseEnemyElement.textContent =  'Faiblesse ' + this.faiblesseAttack;
 
 }
//  setEnemyIntoLocalStorage() {
//   const properties = {
//     ptnVie : this.ptnVie,
//     imgUrl: this.img,
//     gold : this.gold,
//     arme: this.arme,
//     typeAttack: this.typeAttack,
//     degats: this.degats,
//     faiblesseAtttack: this.faiblesseAtttack,
//   }
//   localStorage.setItem("enemy",JSON.stringify(properties))
// }
// static getEnemyFromLocalStorage() {
//   const enemyData = localStorage.getItem("enemy");
//   if (enemyData) {
//     console.log("parsing enemy", JSON.parse(enemyData))
//     const { ptnVie, imgUrl, gold, arme, typeAttack, degats, typeenemy } = JSON.parse(enemyData);
   
    
//   }
// }
 
  // Méthode pour attaquer
  attaquer(cible) {
    // Obtenir les dégâts de l'ennemi
    const degats = this.degats;
    // Infliger les dégâts à la cible
    cible.subirDegats(degats);
    // Vérifier si la cible est morte
    if (cible.ptnVie <= 0) {
      console.log(`${cible.constructor.name} est mort.`);
      return;
    }
    // Obtenir les dégâts de la cible
    const degatsCible = cible.degats;

    // Infliger les dégâts à l'ennemi
    this.subirDegats(degatsCible);

    // Vérifier si l'ennemi est mort
    if (this.ptnVie <= 0) {
      console.log(`${this.constructor.name} est mort.`);
      return;
    }
    // Répéter l'attaque réciproque
    this.attaquer(cible);
  }
  // Méthode pour subir des dégâts
  subirDegats(degats) {
    this.#ptnVie -= degats;
  }

}
 
 /**********************************************************/
/******** Loup **************/
/**********************************************************/
class Loup extends Enemy {
    constructor() {
      super(20, "img/imEnemy/Loup.svg", "Croc", "magic", 5);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** ZombieAffameur **************/
  /**********************************************************/
  class ZombieAffamer extends Enemy {
    constructor() {
      super(40, "img/imEnemy/ZombieAffamer.svg", "Griffes", "tranchant", 10);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Zombie **************/
  /**********************************************************/
  class Zombie extends Enemy {
    constructor() {
      super(35, "img/imEnemy/Zombie.svg", "Mains", "trnahcant", 8);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Squelette **************/
  /**********************************************************/
  class Squelette extends Enemy {
    constructor() {
      super(25, "img/imEnemy/Squelette.svg", "Épée", "critique", 6);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** PetitDragon **************/
  /**********************************************************/
  class PetitDragon extends Enemy {
    constructor() {
      super(50, "img/imEnemy/PetitDragon.svg", "Flammes", "Glace", 12);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Ours **************/
  /**********************************************************/
  class Ours extends Enemy {
    constructor() {
      super(45, "img/imEnemy/Ours.svg", "Griffes", "Feu", 10);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Minotor **************/
  /**********************************************************/
  class Minotor extends Enemy {
    constructor() {
      super(55, "img/imEnemy/Minotor.svg", "Hache", "critique", 14);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** MasterDragon **************/
  /**********************************************************/
  class MasterDragon extends Enemy {
    constructor() {
      super(100, "img/imEnemy/MasterDragon.svg", "Feu", "Glace", 25);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Hydre **************/
  /**********************************************************/
  class Hydre extends Enemy {
    constructor() {
      super(75, "img/imEnemy/Hydre.svg", "Crocs venimeux", "Feu", 16);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Guerrier Orc **************/
  /**********************************************************/
  class GuerrierOrc extends Enemy {
    constructor() {
      super(55, "img/imEnemy/GuerrierOrc.svg", "Hache", "critique", 12);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Gros Zombie **************/
  /**********************************************************/
  class GrosZombie extends Enemy {
    constructor() {
      super(60, "img/imEnemy/GrosZombie.svg", "Mains", "tranchant", 14);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Gorille **************/
  /**********************************************************/
  class Gorille extends Enemy {
    constructor() {
      super(50, "img/imEnemy/Gorille.svg", "Poings", "critique", 12);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Golem **************/
  /**********************************************************/
  class Golem extends Enemy {
    constructor() {
      super(65, "img/imEnemy/Golem.svg", "Massue", "magic", 15);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Fantôme **************/
  /**********************************************************/
  class Fantome extends Enemy {
    constructor() {
      super(30, "img/imEnemy/Fantome.svg", "Ectoplasme", "magic", 8);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Dragon Rouge **************/
  /**********************************************************/
  class DragonRouge extends Enemy {
    constructor() {
      super(90, "img/imEnemy/DragonRouge.svg", "Souffle de feu", "critique", 20);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Dragon Bleu **************/
  /**********************************************************/
  class DragonBleu extends Enemy {
    constructor() {
      super(85, "img/imEnemy/DragonBleu.svg", "Souffle de glace", "critique", 18);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Démon **************/
  /**********************************************************/
  class Demon extends Enemy {
    constructor() {
      super(65, "img/imEnemy/Demon.svg", "Trident", "tranchant", 14);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Chien à Trois Têtes **************/
  /**********************************************************/
  class ChienATroisTete extends Enemy {
    constructor() {
      super(70, "img/imEnemy/ChienATroisTete.svg", "Crocs", "tranchant", 16);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Chevalier Corrompu **************/
  /**********************************************************/
  class ChevalierCorrompu extends Enemy {
    constructor() {
      super(75, "img/imEnemy/ChevalierCorrompu.svg", "Épée maudite", "critique", 18);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
