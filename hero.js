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

/******** GET  **************/  

get potionSoin(){
  return this.#potionSoin
}
get degats(){
  return this.#degats
}
get typeAttack(){
  return this.#typeAttack
}
get arme(){
  return this.#arme
}
get img(){
  return this.#imgURL
}
get ptnVie()
{
  return this.#ptnVie
}  

get gold()
{
  return this.#gold
}  

/******** SET  **************/

set degats(dgs){
  this.#degats = dgs;
}

set potionSoin(pts){
  this.#potionSoin = pts;
}

set ptnVie(ptn){
  this.#ptnVie = ptn;
}

set arme(arm){
  this.#arme = arm;
}
set gold(gold){
  this.#gold = gold;
}

acheter(item){
  if(this.#gold < item.prix)
     return -1
  this.#gold -= item.prix
  //toDO : Gerer les items pour le changement d'înfo du hero
}
afficher(ptnVieElement,potionSoinElement,armeElement,goldElement){
ptnVieElement.textContent =  'PV ' + this.ptnVie;
potionSoinElement.textContent =  'Potion de soin ' + this.potionSoin;
armeElement.textContent =  'Arme ' + this.arme;
goldElement.textContent =  'Gold ' + this.gold;
}

    attaquer() {
      let degats = Math.floor(Math.random() * 10) + 1;
     
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
    
    
     utiliserPotion() {
         if (this.potionSoin > 0) {
           this.ptnVie += 50; 
           this.potionSoin--; 
    
           console.log(`${this.constructor.name} utilise une potion de soin.`);
           console.log(`Points de vie actuels : ${this.ptnVie}`);
           console.log(`Potions de soin restantes : ${this.potionSoin}`);
         } else {
           console.log(`${this.constructor.name} n'a pas de potion de soin.`);
         }
       }
}
  


/**********************************************************/
/******** Guerrier **************/
/**********************************************************/

class Guerrier extends Hero {
    constructor() {
      super(100, "img/Guerrier.svg", 0, "hache", "tranchant", 10);
      
    }
  

    attaquer() {
     this.ptnVie = 2
      let degats = Math.floor(Math.random() * 10) + 1;
      let typeAttack = this.typeAttack;
      
      //Effectuez ici les opérations spécifiques à l'attaque du guerrier
      console.log("Le guerrier attaque !");
      console.log("Dégâts infligés : " + degats);
      console.log("Type d'attaque : " + typeAttack);
    }
  }


/**********************************************************/
/******** Mage **************/
/**********************************************************/

class Mage extends Hero {
    constructor() {
      super(60, "img/Mage.svg", 0, "Baguette", "Magique", 6);
      
    }

    attaquer() {
      let degats = Math.floor(Math.random() * 8) + 5;
      let typeAttack = this.typeAttack;
      
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
    constructor() {
      super(80, "img/Chasseur.svg", 0, "Couteau", "classique", 8);
      
    }

    attaquer() {
      let chanceCritique = Math.random();
      let typeAttack = this.typeAttack;
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
    switch (true) {
      case classe instanceof Guerrier:
        return this.#magasinGuerrier;
      case classe instanceof Mage:
        return this.#magasinMage;
      case classe instanceof Chasseur:
        return this.#magasinChasseur;
      default:
        return {};
    }
  }



  vendreItem(hero, item) {
    let magasin;
  
    // if (hero instanceof Guerrier) {
    //   magasin = this.#magasinGuerrier;
    // } else if (hero instanceof Mage) {
    //   magasin = this.#magasinMage;
    // } else if (hero instanceof Chasseur) {
    //   magasin = this.#magasinChasseur;
    // } else {
    //   console.log("Classe invalide.");
    //   return;
    // }
  
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