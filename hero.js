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

    constructor(ptnVie, imgURL, gold, arme, typeAttack, degats) {
      this.#ptnVie = ptnVie;
      this.#imgURL = imgURL;
      this.#gold = gold;
      this.#arme = arme;
      this.#typeAttack = typeAttack;
      this.#degats = degats;
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
  }


/**********************************************************/
/******** Guerrier **************/
/**********************************************************/

class Guerrier extends Hero {
    constructor(ptnVie, gold, arme, typeAttack, imgURL, degats) {
      super(ptnVie, imgURL, gold, arme, typeAttack, degats);
      this.typeAttack = "tranchante";
      this.imgURL = "img/Guerrier";
      this.degats = 10;
    }

    attaquer() {
      let degats = Math.floor(Math.random() * 10) + 1;
      let typeAttack = "tranchante";

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
      this.imgURL = "img/Mage";
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
      this.imgURL = "img/Chasseur";
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