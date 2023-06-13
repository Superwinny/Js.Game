// Récupérer une référence aux éléments d'item dans la page HTML
const boostDegatsElement = document.getElementById("boostDegats");
const boostSanteElement = document.getElementById("boostSante");
const boostCritiqueElement = document.getElementById("boostChance");
const potionSoinElement = document.getElementById("potionSoin");
const continueGameButton = document.getElementById("continueGame");

let hero = Hero.getHeroFromLocalStorage();
 // Récupérer le héros depuis le stockage local
let enemy = Enemy.getEnemyFromLocalStorage(); 



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
  const enemy = getEnemyFromLocalStorage();
  let enemyIndex = localStorage.getItem("enemyIndex");
  if (enemyIndex === null) {
    enemyIndex = 0;
  } else {
    enemyIndex = parseInt(enemyIndex);
  }
  const enemyList = [
    new Loup(20, "img/imgEnemy/Loup.svg", "Croc", "magic", 5),
    new Squelette(25,"img/imgEnemy/Squelette.svg","Épée","critique",6),
    new Fantome(30,"img/imgEnemy/Fantome.svg","Ectoplasme","magic",8),
    new Zombie(35,"img/imgEnemy/Zombie.svg","Mains","trnahcant",8),
    new ZombieAffamer(40,"img/imgEnemy/ZombieAffamer.svg","Griffes","tranchant",10),
    new Ours(45, "img/imgEnemy/Ours.svg", "Griffes", "Feu", 10),
    new PetitDragon(50,"img/imgEnemy/PetitDragon.svg","Feu", "critique",12),
    new Minotor(55,"img/imgEnemy/Minotor.svg","Hache","critique",14),
    new GuerrierOrc(55,"img/imgEnemy/GuerrierOrc.svg","Hache","critique",12),
    new GrosZombie(60,"img/imgEnemy/GrosZombie.svg","Mains","tranchant",14),
    new Gorille(50,"img/imgEnemy/Gorille.svg","Poings","critique",12),
    new Demon(65,"img/imgEnemy/Demon.svg","Trident de l'enfer","tranchant",14),
    new Golem(65, "img/imgEnemy/Golem.svg", "Massue", "magic", 15),
    new Hydre(75, "img/imgEnemy/Hydre.svg", "Crocs venimeux", "tranchant", 16),
    new ChienATroisTete(70,"img/imgEnemy/ChienTroisTete.svg","Crocs","tranchant",16),
    new ChevalierCorrompu(75,"img/imgEnemy/ChevalierCoronpu.svg","Épée maudite","critique",18),
    new DragonRouge(90,"img/imgEnemy/DragonRouge.svg","Souffle de feu","critique",20),
    new DragonBleu(85, "img/imgEnemy/DragonBleu.svg", "Souffle de glace", "critique", 18),
    new MasterDragon(100,"img/imgEnemy/MasterDragon.svg","Feu","Glace",25),
  ];

  if (enemy) {
    enemyIndex++;
    if (enemyIndex >= enemyList.length) {
      console.log("Vous avez vaincu tous les ennemis !");
      return;
    }

    const nextEnemy = enemyList[enemyIndex];
    mettreAJourInterface(nextEnemy);

    if (nextEnemy) {
      nextEnemy.setEnemyIntoLocalStorage();
    } else {
      console.log("Aucun ennemi disponible dans la liste.");
      // Afficher un message d'erreur ou prendre une autre action appropriée
    }

    // Rediriger vers la page du jeu
    window.location.href = "index3.html";
  } else {
    console.log("Aucun ennemi disponible dans la liste.");
    // Afficher un message d'erreur ou prendre une autre action appropriée
  }
});