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

    attaquer(enemy) {
      let chanceCritique = Math.random();
      let typeAttack = this.typeAttack;
      if (chanceCritique < 0.1) {
        this.degats = Math.floor(Math.random() * 10) + 5;
        this.typeAttack = "critique";
      } else {
        this.degats = Math.floor(Math.random() * 10) + 10;
        this.typeAttack = "normal";
      }





      // Effectuez ici les opérations spécifiques à l'attaque du mage
      console.log("Le mage attaque !");
      console.log("Dégâts infligés : " + this.degats);
      console.log("Type d'attaque : " + this.typeAttack);
      enemy.ptnVie -= this.degats
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
      
      let chanceCritique = Math.random();
      let typeAttack = this.typeAttack;
      if (chanceCritique < 0.1) {
        this.degats = Math.floor(Math.random() * 10) + 5;
        this.typeAttack = "critique";
      } else {
        this.degats = Math.floor(Math.random() * 8) + 5;
        this.typeAttack = "normal";
      }





      // Effectuez ici les opérations spécifiques à l'attaque du mage
      console.log("Le mage attaque !");
      console.log("Dégâts infligés : " + this.degats);
      console.log("Type d'attaque : " + this.typeAttack);
      enemy.ptnVie -= this.degats
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
      let chanceCritique = Math.random();
      let typeAttack = this.typeAttack;
      if (chanceCritique < 0.3) {
        this.degats = Math.floor(Math.random() * 10) + 10;
        this.typeAttack = "critique";
      } else {
        this.degats = Math.floor(Math.random() * 8) + 5;
        this.typeAttack = "normal";
      }

      // Effectuez ici les opérations spécifiques à l'attaque du chasseur
      console.log("Le chasseur attaque !");
      console.log("Dégâts infligés : " + this.degats);
      console.log("Type d'attaque : " + this.typeAttack);

      enemy.ptnVie -= this.degats
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
          hero.soigner();
          break;
        default:
          console.log("Effet d'item invalide.");
          break;
      }
    } else {
      console.log(`L'item ${item} n'est pas disponible pour ${hero.constructor.name}.`);
    }
  }
  apparaitre() {
    const item1Div = document.getElementById('item1');
    const item2Div = document.getElementById('item2');
    const item3Div = document.getElementById('item3');
    const item4Div = document.getElementById('item4');
  
    const classe = Hero.getHeroFromLocalStorage().constructor;
    const magasin = this.getMagasin(classe);
  
    const items = Object.keys(magasin);
  
    switch (items.length) {
      case 4:
        item1Div.innerHTML = `Item: ${items[0]}<br>Prix: ${magasin[items[0]].prix}`;
        item2Div.innerHTML = `Item: ${items[1]}<br>Prix: ${magasin[items[1]].prix}`;
        item3Div.innerHTML = `Item: ${items[2]}<br>Prix: ${magasin[items[2]].prix}`;
        item4Div.innerHTML = "Item: Potion de Soin<br>Prix: " + magasin["Potion"].prix;
        break;
      case 3:
        item1Div.innerHTML = `Item: ${items[0]}<br>Prix: ${magasin[items[0]].prix}`;
        item2Div.innerHTML = `Item: ${items[1]}<br>Prix: ${magasin[items[1]].prix}`;
        item3Div.innerHTML = `Item: ${items[2]}<br>Prix: ${magasin[items[2]].prix}`;
        item4Div.innerHTML = "Item: Potion de Soin<br>Prix: " + magasin["Potion"].prix;
        break;
      case 2:
        item1Div.innerHTML = `Item: ${items[0]}<br>Prix: ${magasin[items[0]].prix}`;
        item2Div.innerHTML = `Item: ${items[1]}<br>Prix: ${magasin[items[1]].prix}`;
        item3Div.innerHTML = "Aucun item disponible";
        item4Div.innerHTML = "Item: Potion de Soin<br>Prix: " + magasin["Potion"].prix;
        break;
      case 1:
        item1Div.innerHTML = `Item: ${items[0]}<br>Prix: ${magasin[items[0]].prix}`;
        item2Div.innerHTML = "Aucun item disponible";
        item3Div.innerHTML = "Aucun item disponible";
        item4Div.innerHTML = "Item: Potion de Soin<br>Prix: " + magasin["Potion"].prix;
        break;
      default:
        item1Div.innerHTML = "Aucun item disponible";
        item2Div.innerHTML = "Aucun item disponible";
        item3Div.innerHTML = "Aucun item disponible";
        item4Div.innerHTML = "Item: Potion de Soin<br>Prix: " + magasin["Potion"].prix;
        break;
    }
  
    const objets = document.querySelectorAll('.item img');
  
    objets.forEach((objet) => {
      objet.addEventListener('click', () => {
        alert("Vous avez cliqué sur une image !");
        const btnValidation = document.getElementById('btnValidation');
        btnValidation.disabled = false;
        localStorage.setItem('partieEnCours', 'true');
      });
    });
  
    const btnValidation = document.getElementById('btnValidation');
    btnValidation.addEventListener('click', () => {
      btnValidation.style.display = 'none';
      // Reprendre la partie où elle s'était arrêtée
      const partieEnCours = localStorage.getItem('partieEnCours');
      if (partieEnCours === 'true') {
        // Reprendre la partie
      } else {
        // Nouvelle partie
      }
      localStorage.removeItem('partieEnCours');
    });
  }
  
}