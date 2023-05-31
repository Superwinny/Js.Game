/**********************************************************/
/******** Hero  **************/
/**********************************************************/

 class Hero {
    #ptnVie;
    #imgURL;
    #gold;
    #arme;
    #typeAttack;
    #degats;
    #potionSoin;

    constructor(ptnVie, imgURL, gold, arme, typeAttack, degats) {
        this.#ptnVie = ptnVie;
        this.#imgURL = imgURL;
        this.#gold = gold;
        this.#arme = arme;
        this.#typeAttack = typeAttack;
        this.#degats = degats;
        this.#potionSoin = 0; 
      }

    attaquer() {
      let degats = Math.floor(Math.random() * 10) + 1;
      let typeAttack = "";

      // Effectuez ici les opérations spécifiques à l'attaque du héros
      console.log("Le héros attaque !");
      console.log("Dégâts infligés : " + degats);
      console.log("Type d'attaque : " + typeAttack);
    }

    static getHeroFromLocalStorage() {
      const heroData = localStorage.getItem("hero");
      if (heroData) {
        const { ptnVie, imgURL, gold, arme, typeAttack, degats } = JSON.parse(heroData);
        return new Hero(ptnVie, imgURL, gold, arme, typeAttack, degats);
      } else {
        return null;
      }
    }
    getPtnVie() {
        return this.#ptnVie;
      }

      getPotionSoin() {
        return this.#potionSoin;
      }
      getArme (){
        return this.#arme;
      }
      getGold() {
        return this.#gold;
      }

    
    utiliserPotion() {
        if (this.#potionSoin > 0) {
          this.#ptnVie += 50; 
          this.#potionSoin--; 
    
          console.log(`${this.constructor.name} utilise une potion de soin.`);
          console.log(`Points de vie actuels : ${this.#ptnVie}`);
          console.log(`Potions de soin restantes : ${this.#potionSoin}`);
        } else {
          console.log(`${this.constructor.name} n'a pas de potion de soin.`);
        }
      }
}
  


/**********************************************************/
/******** Guerrier **************/
/**********************************************************/

class Guerrier extends Hero {
    constructor(ptnVie, gold, arme, typeAttack, imgURL, degats) {
      super(ptnVie, imgURL, gold, arme, typeAttack, degats);
      this.typeAttack = "tranchante";
      this.imgURL = "img/Guerrier.svg";
      this.degats = 10;
      this.arme = "Hache";
      this.gold = 0;
      this.ptnVie = 100;
    }
 
    attaquer() {
      let degats = Math.floor(Math.random() * 10) + 1;
      
      // Effectuez ici les opérations spécifiques à l'attaque du guerrier
      console.log("Le guerrier attaque !");
      console.log("Dégâts infligés : " + degats);
      console.log("Type d'attaque : " + typeAttack);
    }
  }


/**********************************************************/
/******** Mage **************/
/**********************************************************/

class Mage extends Hero {
    constructor(ptnVie, gold, arme, typeAttack, imgURL, degats) {
      super(ptnVie, imgURL, gold, arme, typeAttack, degats);
      this.typeAttack = "magique";
      this.imgURL = "img/Mage.svg";
      this.degats = 6;
    }

    attaquer() {
      let degats = Math.floor(Math.random() * 8) + 5;
      let typeAttack = "magique";

      // Effectuez ici les opérations spécifiques à l'attaque du mage
      console.log("Le mage attaque !");
      console.log("Dégâts infligés : " + degats);
      console.log("Type d'attaque : " + typeAttack);
    }
  }


/**********************************************************/
/******** Chasseur **************/
/**********************************************************/

class Chasseur extends Hero {
    constructor(ptnVie, gold, arme, typeAttack, imgURL, degats) {
      super(ptnVie, imgURL, gold, arme, typeAttack, degats);
      this.typeAttack = "";
      this.imgURL = "img/Chasseur.svg";
      this.degats = 8;
    }

    attaquer() {
      let chanceCritique = Math.random();
      let degats = 0;
      let typeAttack = "";

      if (chanceCritique < 0.2) {
        degats = Math.floor(Math.random() * 10) + 10;
        typeAttack = "critique";
      } else {
        degats = Math.floor(Math.random() * 8) + 5;
        typeAttack = "normal";
      }

      // Effectuez ici les opérations spécifiques à l'attaque du chasseur
      console.log("Le chasseur attaque !");
      console.log("Dégâts infligés : " + degats);
      console.log("Type d'attaque : " + typeAttack);
    }
  }


  /**********************************************************/
/******** Marchand **************/
/**********************************************************/

class Marchand {
    #magasinGuerrier;
    #magasinMage;
    #magasinChasseur;

  constructor() {
    this.#magasinGuerrier = {
      "Épée": { prix: 10, degats: 15 },
      "Armure": { prix: 20, ptnVie: 20 },
      "Bouclier": { prix: 15, ptnVie: 5 },
      "Potion": { prix: 8, effet: "soin" },
    };

    this.#magasinMage = {
      "Bâton": { prix: 12, degats: 12 },
      "Gros Bâton": { prix: 22, degats: 22 },
      "Robe": { prix: 18, ptnVie: 10 },
      "Potion": { prix: 8, effet: "soin" },
    };

    this.#magasinChasseur = {
      "Arc": { prix: 15, degats: 10 },
      "Armure": { prix: 5, ptnVie: 15 },
      "Dague": { prix: 8, degats: 8 },
      "Potion": { prix: 8, effet: "soin" },
    };
  }

  getMagasin(classe) {
    switch (classe) {
      case "Guerrier":
        return this.#magasinGuerrier;
      case "Mage":
        return this.#magasinMage;
      case "Chasseur":
        return this.#magasinChasseur;
      default:
        return {};
    }
  }



  vendreItem(hero, item) {
    let magasin;
  
    if (hero instanceof Guerrier) {
      magasin = this.#magasinGuerrier;
    } else if (hero instanceof Mage) {
      magasin = this.#magasinMage;
    } else if (hero instanceof Chasseur) {
      magasin = this.#magasinChasseur;
    } else {
      console.log("Classe invalide.");
      return;
    }
  
    if (magasin[item]) {
      const { prix, ...details } = magasin[item];
      console.log(`Le marchand vend un ${item} à ${hero.constructor.name}.`);
      console.log(`Prix: ${prix}`);
      console.log("Détails: ", details);
    } else {
      console.log(`L'item ${item} n'est pas disponible pour ${hero.constructor.name}.`);
    }
  }
}
