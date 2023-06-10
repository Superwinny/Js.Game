// // Récupérer une référence aux éléments d'item dans la page HTML
// const boostDegatsElement = document.getElementById("boostDegats");
// const boostSanteElement = document.getElementById("boostSante");
// const boostCritiqueElement = document.getElementById("boostChance");
// const potionSoinElement = document.getElementById("potionSoin");

// let hero = Hero.getHeroFromLocalStorage(); // Récupérer le héros depuis le stockage local

// let elementP = document.querySelector("#vueGold p");
//     elementP.textContent = "Gold: " + hero.gold;

// // Variable pour stocker l'objet sélectionné
// let objetSelectionne = null;

// // Fonction pour mettre à jour l'affichage du stock d'or du héros
// function mettreAJourStockGold() {
//   const elementP = document.querySelector("#vueGold p");
//   if (hero) {
//     elementP.textContent = "Gold: " + hero.gold;
//   } else {
//     elementP.textContent = "Gold: 0";
//   }
// }

// // Mettre à jour l'affichage initial du stock d'or du héros
// mettreAJourStockGold();


// // Ajouter des gestionnaires d'événements de clic aux items du marchand
// boostDegatsElement.addEventListener("click", () => selectionnerItem("Boost Dégâts"));
// boostSanteElement.addEventListener("click", () => selectionnerItem("Boost Santé"));
// boostCritiqueElement.addEventListener("click", () => selectionnerItem("Boost Chance Critique"));
// potionSoinElement.addEventListener("click", () => selectionnerItem("Potion de Soin"));

// // Fonction pour sélectionner un item
// function selectionnerItem(nomItem) {
//    const hero = Hero.getHeroFromLocalStorage();

//   if (hero) {
//     let classe = hero.constructor.name;

//     if (classe === "Guerrier" || classe === "Mage" || classe === "Chasseur") {
//       const magasin = new Marchand().getMagasin(classe);

//       if (magasin.hasOwnProperty(nomItem)) {
//         const item = magasin[nomItem];

//         if (hero.gold >= item.prix) {
//           objetSelectionne = item;
//           console.log(`L'objet ${nomItem} a été sélectionné.`);
//         } else {
//           console.log("Le héros n'a pas assez d'or pour acheter cet item.");
//         }
//       } else {
//         console.log("Cet item n'est pas disponible dans le magasin.");
//       }
//     } else {
//       console.log("Classe de héros invalide.");
//     }
//   } else {
//     console.log("Le héros n'a pas été trouvé dans le stockage local.");
//   }
// }

// // Gestionnaire d'événements pour le bouton "Acheter"
// btnValidation.addEventListener("click", () => {
//   const hero = Hero.getHeroFromLocalStorage();

//   if (hero && objetSelectionne) {
//     let classe = hero.constructor.name;

//     if (classe === "Guerrier" || classe === "Mage" || classe === "Chasseur") {
//       hero.acheter(objetSelectionne, classe);
//       hero.setHeroIntoLocalStorage();
        
//       console.log(`Le héros a acheté ${objetSelectionne.nom}.`);
      
//        mettreAJourStockGold();
//       // mettreAJourInterface(hero);
//     } else {
//       console.log("Classe de héros invalide.");
//     }
//   } else {
//     console.log("Aucun objet n'est sélectionné.");
//   }
// });

// Récupérer une référence aux éléments d'item dans la page HTML
const boostDegatsElement = document.getElementById("boostDegats");
const boostSanteElement = document.getElementById("boostSante");
const boostCritiqueElement = document.getElementById("boostChance");
const potionSoinElement = document.getElementById("potionSoin");

let hero = Hero.getHeroFromLocalStorage(); // Récupérer le héros depuis le stockage local

let elementP = document.querySelector("#vueGold p");
elementP.textContent = "Gold: " + hero.gold;

// Variable pour stocker l'objet sélectionné
let objetSelectionne = null;


// Fonction pour mettre à jour l'affichage du stock d'or du héros
function mettreAJourStockGold() {
  const elementP = document.querySelector("#vueGold p");
  hero = Hero.getHeroFromLocalStorage(); // Récupérer le héros depuis le stockage local
  if (hero) {
    elementP.textContent = "Gold: " + hero.gold;
  } else {
    elementP.textContent = "Gold: 0";
  }
}

// Mettre à jour l'affichage initial du stock d'or du héros
mettreAJourStockGold();


// Ajouter des gestionnaires d'événements de clic aux items du marchand
boostDegatsElement.addEventListener("click", () => selectionnerItem("Boost Dégâts"));
boostSanteElement.addEventListener("click", () => selectionnerItem("Boost Santé"));
boostCritiqueElement.addEventListener("click", () => selectionnerItem("Boost Chance Critique"));
potionSoinElement.addEventListener("click", () => selectionnerItem("Potion de Soin"));

// Fonction pour sélectionner un item
function selectionnerItem(nomItem) {
  const hero = Hero.getHeroFromLocalStorage();

  if (hero) {
    let classe = hero.constructor.name;

    if (classe === "Guerrier" || classe === "Mage" || classe === "Chasseur") {
      const magasin = new Marchand().getMagasin(classe);

      if (magasin.hasOwnProperty(nomItem)) {
        const item = magasin[nomItem];

        if (hero.gold >= item.prix) {
          objetSelectionne = item;
          console.log(`L'objet ${nomItem} a été sélectionné.`);
        } else {
          console.log("Le héros n'a pas assez d'or pour acheter cet item.");
        }
      } else {
        console.log("Cet item n'est pas disponible dans le magasin.");
      }
    } else {
      console.log("Classe de héros invalide.");
    }
  } else {
    console.log("Le héros n'a pas été trouvé dans le stockage local.");
  }
}

// Gestionnaire d'événements pour le bouton "Acheter"
btnValidation.addEventListener("click", () => {
  const hero = Hero.getHeroFromLocalStorage();

  if (hero && objetSelectionne) {
    let classe = hero.constructor.name;

    if (classe === "Guerrier" || classe === "Mage" || classe === "Chasseur") {
      hero.acheter(objetSelectionne, classe);
      hero.setHeroIntoLocalStorage();

      console.log(`Le héros a acheté ${objetSelectionne.nom}.`);
      objetSelectionne = null;

      mettreAJourStockGold(); // Mettre à jour les gold sur la vue du marchand

      // mettreAJourInterface(hero);
    } else {
      console.log("Classe de héros invalide.");
    }
  } else {
    console.log("Aucun objet n'est sélectionné.");
  }
});