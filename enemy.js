/**********************************************************/
/******** Enemy  **************/
/**********************************************************/


class Enemy {
  #ptnVie;
  #imgURL;
  #arme;
  #faiblesseAttack;
  #degats;

  constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
    this.#ptnVie = ptnVie;
    this.#imgURL = imgURL;
    this.#arme = arme;
    this.#faiblesseAttack = faiblesseAttack;
    this.#degats = degats;
  }

  /******** GETTERS **************/

  get degats() {
    return this.#degats;
  }
  get arme() {
    return this.#arme;
  }
  get img() {
    return this.#imgURL;
  }
  get ptnVie() {
    return this.#ptnVie;
  }
  get faiblesseAttack() {
    return this.#faiblesseAttack;
  }

  afficher(pvEnemyElement, degatsEnemyElement, armeEnemyElement, faiblesseEnemyElement, selectedImageEnemy) {
    pvEnemyElement.textContent = 'Point de vie : ' + this.ptnVie;
    degatsEnemyElement.textContent = 'Dégâts : ' + this.degats;
    armeEnemyElement.textContent = 'Arme : ' + this.arme;
    faiblesseEnemyElement.textContent = 'Faiblesse : ' + this.faiblesseAttack;
    selectedImageEnemy.src = this.img;
    
  }

  setEnemyIntoLocalStorage() {
    const properties = {
      ptnVie: this.ptnVie,
      imgUrl: this.img,
      arme: this.arme,
      degats: this.degats,
      faiblesseAttack: this.faiblesseAttack,
      typeEnemy: this.typeEnemy,
    };
    localStorage.setItem("enemy", JSON.stringify(properties));
  }

  static getEnemyFromLocalStorage() {
    const enemyData = JSON.parse(localStorage.getItem("enemy"));
    if (enemyData) {
      const { type, ptnVie, imgUrl, arme, faiblesseAttack, degats } = enemyData;
      switch (type) {
        case "Loup":
          return new Loup(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "ZombieAffamer":
          return new ZombieAffamer(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "Zombie":
          return new Zombie(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "Squelette":
          return new Squelette(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "PetitDragon":
          return new PetitDragon(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "Ours":
          return new Ours(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "Minotor":
          return new Minotor(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "MasterDragon":
          return new MasterDragon(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "Hydre":
          return new Hydre(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "Cerbere":
          return new Cerbere(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "GuerrierOrc":
          return new GuerrierOrc(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "GrosZombie":
          return new GrosZombie(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "Gorille":
          return new Gorille(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "Golem":
          return new Golem(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "Fantome":
          return new Fantome(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "DragonRouge":
          return new DragonRouge(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "DragonBleu":
          return new DragonBleu(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "Demon":
          return new Demon(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "ChienATroisTete":
          return new ChienATroisTete(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        case "ChevalierCorrompu":
          return new ChevalierCorrompu(ptnVie, imgUrl, arme, faiblesseAttack, degats);
        default:
          return null;
      }
    } else {
      return null;
    }
  }

  attaquer(cible) {
    const degats = this.degats;
    cible.subirDegats(degats);

    if (cible.ptnVie <= 0) {
      console.log(`${cible.constructor.name} est mort.`);
      return;
    }

    const degatsCible = cible.degats;
    this.subirDegats(degatsCible);

    if (this.ptnVie <= 0) {
      console.log(`${this.constructor.name} est mort.`);
      return;
    }

    this.attaquer(cible);
  }

  subirDegats(degats) {
    this.#ptnVie -= degats;
  }
}
 

 
 /**********************************************************/
/******** Loup **************/
/**********************************************************/
class Loup extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      // super(20, "img/imEnemy/Loup.svg", "Croc", "magic", 5);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** ZombieAffameur **************/
  /**********************************************************/
  class ZombieAffamer extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(40, "img/imEnemy/ZombieAffamer.svg", "Griffes", "tranchant", 10);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Zombie **************/
  /**********************************************************/
  class Zombie extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(35, "img/imEnemy/Zombie.svg", "Mains", "trnahcant", 8);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Squelette **************/
  /**********************************************************/
  class Squelette extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(25, "img/imEnemy/Squelette.svg", "Épée", "critique", 6);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** PetitDragon **************/
  /**********************************************************/
  class PetitDragon extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(50, "img/imEnemy/PetitDragon.svg", "Flammes", "Glace", 12);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Ours **************/
  /**********************************************************/
  class Ours extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(45, "img/imEnemy/Ours.svg", "Griffes", "Feu", 10);

    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Minotor **************/
  /**********************************************************/
  class Minotor extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(55, "img/imEnemy/Minotor.svg", "Hache", "critique", 14);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** MasterDragon **************/
  /**********************************************************/
  class MasterDragon extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(100, "img/imEnemy/MasterDragon.svg", "Feu", "Glace", 25);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Hydre **************/
  /**********************************************************/
  class Hydre extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(75, "img/imEnemy/Hydre.svg", "Crocs venimeux", "Feu", 16);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Guerrier Orc **************/
  /**********************************************************/
  class GuerrierOrc extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(55, "img/imEnemy/GuerrierOrc.svg", "Hache", "critique", 12);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Gros Zombie **************/
  /**********************************************************/
  class GrosZombie extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(60, "img/imEnemy/GrosZombie.svg", "Mains", "tranchant", 14);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Gorille **************/
  /**********************************************************/
  class Gorille extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(50, "img/imEnemy/Gorille.svg", "Poings", "critique", 12);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Golem **************/
  /**********************************************************/
  class Golem extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(65, "img/imEnemy/Golem.svg", "Massue", "magic", 15);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Fantôme **************/
  /**********************************************************/
  class Fantome extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(30, "img/imEnemy/Fantome.svg", "Ectoplasme", "magic", 8);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Dragon Rouge **************/
  /**********************************************************/
  class DragonRouge extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(90, "img/imEnemy/DragonRouge.svg", "Souffle de feu", "critique", 20);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Dragon Bleu **************/
  /**********************************************************/
  class DragonBleu extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(85, "img/imEnemy/DragonBleu.svg", "Souffle de glace", "critique", 18);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Démon **************/
  /**********************************************************/
  class Demon extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(65, "img/imEnemy/Demon.svg", "Trident", "tranchant", 14);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Chien à Trois Têtes **************/
  /**********************************************************/
  class ChienATroisTete extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(70, "img/imEnemy/ChienATroisTete.svg", "Crocs", "tranchant", 16);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
  
  /**********************************************************/
  /******** Chevalier Corrompu **************/
  /**********************************************************/
  class ChevalierCorrompu extends Enemy {
    constructor(ptnVie, imgURL, arme, faiblesseAttack, degats) {
      super(ptnVie, imgURL, arme, faiblesseAttack, degats);
      //super(75, "img/imEnemy/ChevalierCorrompu.svg", "Épée maudite", "critique", 18);
    }
  
    attaquer(cible) {
      super.attaquer(cible);
    }
  }
