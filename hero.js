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
set typeAttack(typeAttack){
  this.#typeAttack = typeAttack;
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
        case "Boost Dégâts":
          this.boostDegats(); // Appeler boostDegats() sur l'objet courant de la classe Hero
          console.log(`Boost de dégâts acheté : ${item.effet}`);
          break;
        case "Boost Santé":
          this.boostSante(); // Appeler boostSante() sur l'objet courant de la classe Hero
          console.log(`Boost de santé acheté : ${item.effet}`);
          break;
        case "Boost Chance Critique":
          this.boostCritique(); // Appeler boostCritique() sur l'objet courant de la classe Hero
          console.log(`Boost de chance critique acheté : ${item.effet}`);
          break;
        case "Potion de Soin":
          this.utiliserPotion(); // Appeler utiliserPotion() sur l'objet courant de la classe Hero
          console.log(`Potion de soin achetée : ${item.effet}`);
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
        typeHero: this.typeHero,
      }
      localStorage.setItem("hero",JSON.stringify(properties))
      console.log(properties)
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
    
    
    boostDegats(boostValue) {
      this.degats += boostValue;
      console.log(`${this.constructor.name} utilise un boost de dégâts.`);
      console.log(`Dégâts actuels : ${this.degats}`);
    }
    
    boostSante(boostValue) {
      this.ptnVie += boostValue;
      console.log(`${this.constructor.name} utilise un boost de santé.`);
      console.log(`Points de vie actuels : ${this.ptnVie}`);
    }
      boostCritique() {
        this.chanceCritique += 0.05;
        console.log(`${this.constructor.name} a augmenté sa chance de critique de 5%. Nouvelle chance de critique : ${this.chanceCritique}`);
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

  attaquer(enemy) {
    let chanceCritique = Math.random();
    let typeAttack = this.typeAttack;
    if (chanceCritique < 0.2) {
      this.degats = Math.floor(Math.random() * 10) + 5;
      this.typeAttack = "critique";
    } else {
      this.degats = Math.floor(Math.random() * 10) + 10;
      this.typeAttack = "normal";
    }
  
    enemy.ptnVie -= this.degats;
  
    // Vérifier si l'attaque double se produit
    const chanceAttaqueDouble = 0.2; // Probabilité d'attaque double (20%)
    if (Math.random() < chanceAttaqueDouble) {
      console.log(`${this.constructor.name} effectue une attaque double !`);
      enemy.ptnVie -= this.degats;
    }
  
    // Restaurer les valeurs d'origine
    this.typeAttack = typeAttack;
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

    attaquer(enemy) {
      this.degats = Math.floor(Math.random() * 8) + 5;
      this.typeAttack = "normal";
    
      // Effectuer ici les opérations spécifiques à l'attaque du mage
      console.log(`${this.constructor.name} attaque ${enemy.constructor.name} avec ${this.arme} pour ${this.degats} points de dégâts.`);
      enemy.ptnVie -= this.degats;
    
      // Vérifier la chance d'envoyer une boule de feu
      const chanceBouleDeFeu = 0.25; // 25% de chance d'envoyer une boule de feu (10 dégâts)
      if (Math.random() < chanceBouleDeFeu) {
        console.log(`${this.constructor.name} envoie une boule de feu qui inflige 10 points de dégâts supplémentaires.`);
        enemy.ptnVie -= 10;
      }
    
      // Vérifier la chance de regagner des points de vie
      const chanceRegainPtnVie = 0.25; // 25% de chance de regagner des points de vie
      if (Math.random() < chanceRegainPtnVie) {
        const regainPtnVie = Math.floor(this.degats * 0.5);
        this.ptnVie += regainPtnVie;
        console.log(`${this.constructor.name} regagne ${regainPtnVie} points de vie.`);
      }
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

    attaquer(enemy) {
      const chanceCritique = Math.random();
      const typeAttack = this.typeAttack;
    
      if (chanceCritique < 0.35) {
        const degatsCritique = (Math.floor(Math.random() * 10) + 10) * 2; // Dégâts du critique (double des dégâts normaux)
        this.degats = degatsCritique;
        this.typeAttack = "critique";
        console.log(`Le chasseur inflige un coup critique et double les dégâts ! Dégâts totaux : ${this.degats}`);
      } else {
        this.degats = Math.floor(Math.random() * 8) + 5;
        this.typeAttack = "normal";
      }
   
      enemy.ptnVie -= this.degats;
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
      "Boost Dégâts": { prix: 10, effet: "boostDegats" },
      "Boost Santé": { prix: 20, effet: "boostSante" },
      "Boost Chance Critique": { prix: 15, effet: "boostCritique" },
      "Potion de Soin": { prix: 8, effet: "soin" },
    };
    
    this.#magasinMage = {
      "Boost Dégâts": { prix: 12, effet: "boostDegats" },
      "Boost Santé": { prix: 18, effet: "boostSante" },
      "Boost Chance Critique": { prix: 10, effet: "boostCritique" },
      "Potion de Soin": { prix: 8, effet: "soin" },
    };
    
    this.#magasinChasseur = {
      "Boost Dégâts": { prix: 15, effet: "boostDegats" },
      "Boost Santé": { prix: 5, effet: "boostSante" },
      "Boost Chance Critique": { prix: 12, effet: "boostCritique" },
      "Potion de Soin": { prix: 8, effet: "soin" },
    };
  }
  
  getMagasin(classe) {
    switch (classe) {
      case 'Guerrier':
        return this.#magasinGuerrier;
      case 'Mage':
        return this.#magasinMage;
      case 'Chasseur':
        return this.#magasinChasseur;
      default:
        console.log("Classe de héros invalide.");
        return {};
    }
  }

  vendreItem(hero, item) {
    const magasin = this.getMagasin(hero.constructor);
  
    if (magasin[item]) {
      const { prix, effet } = magasin[item];
      console.log(`Le marchand vend un ${item} à ${hero.constructor.name}.`);
      console.log(`Prix: ${prix}`);
      console.log(`Effet: ${effet}`);
  
      // Appliquer l'effet sur le héros
      switch (effet) {
        case "boostDegats":
          hero.boostDegats();
          break;
        case "boostSante":
          hero.boostSante();
          break;
        case "boostCritique":
          hero.boostCritique();
          break;
        case "soin":
          hero.utiliserPotion();
          break;
        default:
          console.log("Effet d'item invalide.");
          break;
      }
    } else {
      console.log(`L'item ${item} n'est pas disponible pour ${hero.constructor.name}.`);
    }
  }
   
  apparaitre(){

  }

}   