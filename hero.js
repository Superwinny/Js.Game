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
      #enemyKills;
    
    constructor(ptnVie, imgURL, gold, arme, typeAttack, degats) {
        this.#ptnVie = ptnVie;
        this.#imgURL = imgURL;
        this.#gold = gold;
        this.#arme = arme;
        this.#typeAttack = typeAttack;
        this.#degats = degats;
        this.enemyKills = 0; // Initialiser le compteur d'ennemis tués à 0
    
      }

/******** GET  **************/  
get enemyKills() {
  return this.#enemyKills;
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

set enemyKills(kills) {
  this.#enemyKills = kills;
}

set degats(dgs){
  this.#degats = dgs;
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

  switch (item.type) {
    case "boost":
      switch (item.effet) {
        case "boostDegats":
          this.boostDegats(item.value); // Appeler boostDegats() sur l'objet courant de la classe Hero
          console.log(`Boost de dégâts acheté : ${item.effet}`);
          break;
        case "boostSante":
          this.boostSante(item.value); // Appeler boostSante() sur l'objet courant de la classe Hero
          console.log(`Boost de santé acheté : ${item.effet}`);
          break;
        case "boostCritique":
          this.boostCritique(item.value); // Appeler boostCritique() sur l'objet courant de la classe Hero
          console.log(`Boost de chance critique acheté : ${item.effet}`);
          break;
        default:
          console.log("Type de boost invalide.");
          break;
      }
      break;
    case "soin":
      this.heal(item.value); // Appeler heal() sur l'objet courant de la classe Hero
      console.log(`Potion de soin achetée : ${item.effet}`);
      break;
    default:
      console.log("Type d'item invalide.");
      break;
  }
}


afficher(ptnVieElement,armeElement,goldElement,selectedImageElement,degatsElement){
ptnVieElement.textContent =  'Point de vie' + this.ptnVie;
// potionSoinElement.textContent =  'Potion de soin ' + this.potionSoin;
 armeElement.textContent =  'Arme ' + this.arme;
goldElement.textContent =  'Gold ' + this.gold;
selectedImageElement.src =  this.img;
degatsElement.textContent = 'Degats' + this.degats;
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
        enemyKills: this.enemyKills,
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
    boostDegats(value) {
      this.degats += value;
      console.log(`${this.constructor.name} utilise un boost de dégâts.`);
      console.log(`Dégâts actuels : ${this.degats}`);
    }
    boostSante(value) {
      this.ptnVie += value;
      console.log(`${this.constructor.name} utilise un boost de santé.`);
      console.log(`Points de vie actuels : ${this.ptnVie}`);
    }
      boostCritique() {
        this.chanceCritique += 0.05;
        console.log(`${this.constructor.name} a augmenté sa chance de critique de 5%. Nouvelle chance de critique : ${this.chanceCritique}`);
      }
      heal(value){
        this.ptnVie += value;
        console.log(`Points de vie actuels : ${this.ptnVie}`);
      }
     attaquer(enemy){
      if (enemy.ptnVie <= 0) {
        console.log(`${enemy.constructor.name} est vaincu !`);
        this.gold += 2; // Ajouter 2 gold au héros après avoir vaincu un ennemi
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
    return "Guerrier";
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

    // Effectuer ici les opérations spécifiques à l'attaque du guerrier
    const guerrierAttackMessage = `${this.constructor.name} attaque ${enemy.constructor.name} et inflige ${this.degats} points de dégâts.`;
    messageContainer.innerHTML += `<p>${guerrierAttackMessage}</p>`;
    console.log(guerrierAttackMessage);

    enemy.ptnVie -= this.degats;

    // Vérifier si l'attaque double se produit
    const chanceAttaqueDouble = 0.2;
    if (Math.random() < chanceAttaqueDouble) {
      const attaqueDoubleMessage = `${this.constructor.name} effectue une attaque double !`;
      messageContainer.innerHTML += `<p>${attaqueDoubleMessage}</p>`;
      console.log(attaqueDoubleMessage);
      enemy.ptnVie -= this.degats;
    }

    // Vérification si l'ennemi est vaincu
    if (enemy.ptnVie <= 0) {
      this.gold += 2; // Ajouter 2 gold au héros après avoir vaincu un ennemi
      this.enemyKills++;
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
      const mageAttackMessage = `${this.constructor.name} attaque ${enemy.constructor.name} et inflige ${this.degats} points de dégâts.`;
      messageContainer.innerHTML += `<p>${mageAttackMessage}</p>`;
      console.log(mageAttackMessage);
  
      
      enemy.ptnVie -= this.degats;
  
      // Vérifier la chance d'envoyer une boule de feu
      const chanceBouleDeFeu = 0.25; // 25% de chance d'envoyer une boule de feu (10 dégâts)
      if (Math.random() < chanceBouleDeFeu) {
        enemy.ptnVie -= 10;
        const bouleDeFeuMessage = `${this.constructor.name} envoie une boule de feu qui inflige 10 points de dégâts supplémentaires.`;
        messageContainer.innerHTML += `<p>${bouleDeFeuMessage}</p>`;
        console.log(bouleDeFeuMessage);
      }
  
      // Vérifier la chance de regagner des points de vie
      const chanceRegainPtnVie = 0.35; // 35% de chance de regagner des points de vie
      if (Math.random() < chanceRegainPtnVie) {
        const regainPtnVie = Math.floor(this.degats * 0.5);
        this.ptnVie += regainPtnVie;
        const regainPtnVieMessage = `${this.constructor.name} regagne ${regainPtnVie} points de vie.`;
        messageContainer.innerHTML += `<p>${regainPtnVieMessage}</p>`;
        console.log(regainPtnVieMessage);
      }
  
      if (enemy.ptnVie <= 0) {
        this.gold += 2; // Ajouter 2 gold au héros après avoir vaincu un ennemi
      }
  
      const heroAttackMessage2 = `Dégâts infligés: ${this.degats}`;
      const heroAttackMessage3 = `Points de vie restants: ${enemy.ptnVie}`;
  
      messageContainer.innerHTML += `<p>${heroAttackMessage2}</p>`;
      messageContainer.innerHTML += `<p>${heroAttackMessage3}</p>`;
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
    return "Chasseur";
  }

  attaquer(enemy) {
    const chanceCritique = Math.random();
    const typeAttack = this.typeAttack;

    // Effectuer ici les opérations spécifiques à l'attaque du chasseur
    const chasseurAttackMessage = `${this.constructor.name} attaque ${enemy.constructor.name} et inflige ${this.degats} points de dégâts.`;
    messageContainer.innerHTML += `<p>${chasseurAttackMessage}</p>`;
    console.log(chasseurAttackMessage);

    if (chanceCritique < 0.25) {
      const degatsCritique = (Math.floor(Math.random() * 10) + 10) * 2; // Dégâts du critique (double des dégâts normaux)
      this.degats = degatsCritique;
      this.typeAttack = "critique";

      // Effectuer ici les opérations spécifiques à l'attaque du chasseur lors d'un coup critique
      const chasseurCritiqueMessage = `Le chasseur inflige un coup critique et double les dégâts ! Dégâts totaux : ${this.degats}`;
      messageContainer.innerHTML += `<p>${chasseurCritiqueMessage}</p>`;
      console.log(chasseurCritiqueMessage);
    } else {
      this.degats = Math.floor(Math.random() * 8) + 5;
      this.typeAttack = "normal";
    }

    if (enemy.ptnVie <= 0) {
      this.gold += 2; // Ajouter 2 gold au héros après avoir vaincu un ennemi
    }

    enemy.ptnVie -= this.degats;

    // Restaurer les valeurs d'origine
    this.typeAttack = typeAttack;
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
      "boostDegats": { prix: 20, effet: "boostDegats", value: 10 , type: "boost"},
      "boostSante": { prix: 10, effet: "boostSante",value: 10 ,type: "boost"},
      "boostChance": { prix: 12, effet: "boostCritique", value: 10, type: "boost"},
      "potionSoin": { prix: 5, effet: "soin" ,value: 60, type: "soin"},
    };
    
    this.#magasinMage = {
      "boostDegats": { prix: 12, effet: "boostDegats", value: 10, type: "boost" },
      "boostSante": { prix: 15, effet: "boostSante", value: 10, type: "boost" },
      "boostChance": { prix: 20, effet: "boostCritique", value: 10, type: "boost"},
      "potionSoin": { prix: 5, effet: "soin", value: 40, type: "soin" },
    };
    
    this.#magasinChasseur = {
      "boostDegats": { prix: 12, effet: "boostDegats", value: 10 , type: "boost" },
      "boostSante": { prix: 20, effet: "boostSante", value: 10 , type: "boost" },
      "boostChance": { prix: 10, effet: "boostCritique", value: 10 , type: "boost" },
      "potionSoin": { prix: 5, effet: "soin", value: 50 , type: "soin" },
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
        case "potionSoin":
          hero.heal();
          break;
        default:
          console.log("Effet d'item invalide.");
          break;
      }
    } else {
      console.log(`L'item ${item} n'est pas disponible pour ${hero.constructor.name}.`);
    }
  }
   
  

}   