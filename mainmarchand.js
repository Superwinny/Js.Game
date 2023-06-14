// Récupérer une référence aux éléments d'item dans la page HTML
const boostDegatsElement = document.getElementById("boostDegats");
const boostSanteElement = document.getElementById("boostSante");
const boostCritiqueElement = document.getElementById("boostChance");
const potionSoinElement = document.getElementById("potionSoin");
const continueGameButton = document.getElementById("continueGame");

let hero = Hero.getHeroFromLocalStorage();
 // Récupérer le héros depuis le stockage local

let elementP = document.querySelector("#vueGold p");
elementP.textContent = "Gold: " + hero.gold;

// Variable pour stocker l'objet sélectionné
let objetSelectionne = null;

let boostsAchetes = []

function mettreAJourStockGold() {
  let hero = Hero.getHeroFromLocalStorage(); // Récupérer le héros depuis le stockage local
  const elementP = document.querySelector("#vueGold p");
  if (hero) {
    const goldTotal = hero.gold + (hero.enemyKills * 2); // Calculer le total des gold du héros
    elementP.textContent = "Gold: " + goldTotal;
  } else {
    elementP.textContent = "Gold: 0";
  }
}

// Mettre à jour l'affichage initial du stock d'or du héros
mettreAJourStockGold();


// Ajouter des gestionnaires d'événements de clic aux items du marchand
boostDegatsElement.addEventListener("click", () => selectionnerItem("boostDegats"));
boostSanteElement.addEventListener("click", () => selectionnerItem("boostSante"));
boostCritiqueElement.addEventListener("click", () => selectionnerItem("boostChance"));
potionSoinElement.addEventListener("click", () => selectionnerItem("potionSoin"));

// Fonction pour sélectionner un item
function selectionnerItem(nomItem) {
  const hero = Hero.getHeroFromLocalStorage();

  if (hero) {
    let classe = hero.constructor.name;

    if (classe === "Guerrier" || classe === "Mage" || classe === "Chasseur") {
      const magasin = new Marchand().getMagasin(classe);

      if (magasin.hasOwnProperty(nomItem)) {
        const item = magasin[nomItem];

        if (item.effet === "boost" && boostsAchetes.includes(nomItem)) {
          console.log("Le héros a déjà acheté ce boost.");
        } else if (hero.gold >= item.prix) {
          objetSelectionne = item;
          console.log(`L'objet ${nomItem} a été sélectionné.`);

          // Désactiver le bouton d'achat pour le boost déjà acheté
          if (item.effet === "boost") {
            document.getElementById(nomItem).disabled = true;
          }
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
      if (objetSelectionne.type === "boost" && boostsAchetes.includes(objetSelectionne.effet)) {
        console.log("Le héros a déjà acheté ce boost.");
      } else {
        hero.acheter(objetSelectionne, classe);
        
        hero.setHeroIntoLocalStorage();
        console.log(`Le héros a acheté ${objetSelectionne.effet}.`);
        mettreAJourStockGold();

        if (objetSelectionne && objetSelectionne.type === "boost" ) {
          boostsAchetes.push(objetSelectionne.effet);
        }
        objetSelectionne = null;
       
      
      }
    } else {
      console.log("Classe de héros invalide.");
    }
  } else {
    console.log("Aucun objet n'est sélectionné.");
  }
});
function getEnemy(enemyList,index){
  return enemyList[index]
}

const mettreAJourInterface = (hero, enemy) => {
  if (enemy) {
    enemy.afficher(pvEnemyElement, degatsEnemyElement, armeEnemyElement, faiblesseEnemyElement, selectedImageEnemy);
  }
};

function getEnemyFromLocalStorage() {
  const enemyData = JSON.parse(localStorage.getItem("enemy"));
  if (enemyData) {
    const enemy =  new Enemy(
      enemyData.ptnVie,
      enemyData.imgUrl,
      enemyData.arme,
      enemyData.faiblesseAttack,
      enemyData.degats
    );
    return enemy;
  } else {
    return null;
  }
}

continueGame.addEventListener("click", () => {
    // Rediriger vers la page du jeu
    window.location.href = "index3.html";
});