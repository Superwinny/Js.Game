// Récupérer une référence aux éléments d'item dans la page HTML
const boostDegatsElement = document.getElementById("boostDegats");
const boostSanteElement = document.getElementById("boostSante");
const boostCritiqueElement = document.getElementById("boostChance");
const potionSoinElement = document.getElementById("potionSoin");


// Ajouter des gestionnaires d'événements de clic aux items du marchand
boostDegatsElement.addEventListener("click", () => acheterItem("Boost Dégâts"));
boostSanteElement.addEventListener("click", () => acheterItem("Boost Santé"));
boostCritiqueElement.addEventListener("click", () => acheterItem("Boost Chance Critique"));
potionSoinElement.addEventListener("click", () => acheterItem("Potion de Soin"));


 function acheterItem(nomItem, mettreAJourInterface) {
  // Récupérer le héros depuis le stockage local
  const hero = Hero.getHeroFromLocalStorage();

  // Vérifier si le héros existe
  if (hero) {
    // Récupérer le magasin correspondant à la classe du héros
    let classe = hero.constructor.name;

    // Vérifier si la classe du héros est valide
    if (classe === "Guerrier" || classe === "Mage" || classe === "Chasseur") {
      const magasin = new Marchand().getMagasin(classe);

      // Vérifier si l'item existe dans le magasin
      if (magasin.hasOwnProperty(nomItem)) {
        const item = magasin[nomItem];

        // Vérifier si le héros a assez d'or pour acheter l'item
        if (hero.gold >= item.prix) {
          // Acheter l'item
          hero.acheter(item, classe);

          // Mettre à jour les informations du héros dans le stockage local
          hero.setHeroIntoLocalStorage();
          // mettreAJourInterface(hero);
         

          console.log(`Le héros a acheté ${nomItem}.`);
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