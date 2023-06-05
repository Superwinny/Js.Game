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
        console.log(imgURL)
        this.#ptnVie = ptnVie;
        this.#imgURL = imgURL;
        this.#gold = gold;
        this.#arme = arme;
        this.#typeAttack = typeAttack;
        this.#degats = degats;
        this.#potionSoin = 0; 
        console.log(this.#imgURL)
      }

/******** GET  **************/  

get potionSoin(){
  return this.#potionSoin;
}
get degats(){
  return this.#degats;
}
get typeAttack(){
  return this.#typeAttack;
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

get gold()
{
  return this.#gold;
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

set arme(arme){
  this.#arme = arme;
}
set gold(gold){
  this.#gold = gold;
}

acheter(item, classe) {
  if (this.#gold < item.prix) {
    return -1; // Retourne -1 si le héros n'a pas assez d'or pour acheter l'item
  }
  
  this.#gold -= item.prix; // Déduit le prix de l'item de l'or du héros
  
  // Mettre à jour les informations du héros en fonction du type d'item acheté
  const magasin = new Marchand().getMagasin(classe);
  
  for (const type in magasin) {
    if (magasin[type] === item) {
      switch (type) {
        case "Arme":
          this.#arme = item;
          console.log(`Nouvelle arme achetée : ${item.nom}`);
          break;
        case "Potion":
          this.#potionSoin = item;
          console.log(`Nouvelle potion achetée : ${item.nom}`);
          break;
        default:
          console.log("Type d'item invalide.");
          break;
      }
      break;
    }
  }
}

afficher(ptnVieElement,potionSoinElement,armeElement,goldElement,selectedImageElement){
ptnVieElement.textContent =  'Point de vie' + this.ptnVie;
potionSoinElement.textContent =  'Potion de soin ' + this.potionSoin;
armeElement.textContent =  'Arme ' + this.arme;
goldElement.textContent =  'Gold ' + this.gold;
selectedImageElement.src =  this.img;
console.log(this)

}

    attaquer() {
      let degats = Math.floor(Math.random() * 10) + 1;
     
      // Effectuez ici les opérations spécifiques à l'attaque du héros
      console.log("Le héros attaque !");
      console.log("Dégâts infligés : " + degats);
      console.log("Type d'attaque : " + typeAttack);
    }

     setHeroIntoLocalStorage() {
      const properties = {
        ptnVie : this.ptnVie,
        imgUrl: this.img,
        gold : this.gold,
        arme: this.arme,
        typeAttack: this.typeAttack,
        degats: this.degats,
        typeHero: this.typeHero
      }
      localStorage.setItem("hero",JSON.stringify(properties))
    }
    static getHeroFromLocalStorage() {
      const heroData = localStorage.getItem("hero");
      if (heroData) {
        console.log("parsing hero", JSON.parse(heroData))
        const { ptnVie, imgUrl, gold, arme, typeAttack, degats, typeHero } = JSON.parse(heroData);
        switch(typeHero){
          case "Guerrier":
            return new Guerrier(ptnVie, imgUrl, gold, arme, typeAttack, degats)
          break;
          case "Mage":
            return new Mage(ptnVie, imgUrl, gold, arme, typeAttack, degats)
            break
          case "Chasseur":
            return new Chasseur(ptnVie, imgUrl, gold, arme, typeAttack, degats)
            break;
            default:
              console.log("Classe invalide.");
              return;
        }
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
    constructor(ptnVie, imgUrl, gold, arme, typeAttack, degats) {
      super(ptnVie, imgUrl, gold, arme, typeAttack, degats);
      
    }
  
    get typeHero() {
      return "Guerrier"
    }

    attaquer() {
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
    constructor(ptnVie, imgUrl, gold, arme, typeAttack, degats) {
      super(ptnVie, imgUrl, gold, arme, typeAttack, degats);  
    }

    get typeHero(){
      return "Mage"
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
    constructor(ptnVie, imgUrl, gold, arme, typeAttack, degats) {
      super(ptnVie, imgUrl, gold, arme, typeAttack, degats);
      
    }

    get typeHero() {
      return "Chasseur"
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
      case classe === Guerrier:
        return this.#magasinGuerrier;
      case classe === Mage:
        return this.#magasinMage;
      case classe === Chasseur:
        return this.#magasinChasseur;
      default:
        console.log("Classe de héros invalide.");
        return {};
    }
  }

  vendreItem(hero) {
    const magasin = this.getMagasin(hero.constructor);
  
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