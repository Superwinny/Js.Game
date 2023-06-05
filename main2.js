// Sélectionnez les images des héros
const heroImages = document.querySelectorAll("#choixperso img");
// Sélectionnez les images des Enemy
const enemyImages = document.querySelectorAll("#choixennemi img")
// Sélectionnez le bouton de validation
const confirmButton = document.getElementById("confirmButton");

// Ajoutez un gestionnaire d'événements au bouton de validation
confirmButton.addEventListener("click", () => {
  // Redirigez l'utilisateur vers l'index3.html
  window.location.href = "index3.html";
});

// Parcourez les images et ajoutez un gestionnaire d'événements pour chaque image
heroImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    // Récupérez le nom de la classe du héros correspondant à l'image
    const heroClass = image.alt;

    // Créez une instance du héros correspondant à la classe sélectionnée
    let hero;

    switch (heroClass) {
      case "Guerrier":
        hero = new Guerrier(
          100,
          "img/Guerrier.svg",
          0,
          "hache",
          "tranchant",
          10
        );
        break;
      case "Mage":
        hero = new Mage(60, "img/Mage.svg", 0, "Baguette", "Magique", 6);
        break;
      case "Chasseur":
        hero = new Chasseur(
          80,
          "img/Chasseur.svg",
          0,
          "Couteau",
          "classique",
          8
        );
        break;
      default:
        console.log("Classe invalide.");
        return;
    }

    // Enregistrez l'instance du héros dans le stockage local
    hero.setHeroIntoLocalStorage();

    // Récupérez l'URL de l'image du héros à partir de la classe correspondante
    const imageURL = hero.img;

    // Mettez à jour l'image source avec l'URL du héros sélectionné
    image.setAttribute("src", imageURL);

    // Supprimez l'attribut disabled du bouton de validation
    confirmButton.removeAttribute("disabled");

    console.log("Héros sélectionné :", hero);
    console.log(localStorage.getItem("hero"));
  });
});


// Parcourez les images et ajoutez un gestionnaire d'événements pour chaque image
enemyImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    // Récupérez le nom de la classe de l'ennemi correspondant à l'image
    const enemyClass = image.alt;
    // Créez une instance du Enemy 
    let enemy;

    switch (enemyClass) {
      case "Loup":
        hero = new Loup(20, "img/imgEnemy/Loup.svg", "Croc", "magic", 5);
        break;
      case "Zombie Affamer":
        hero = new ZombieAffamer(
          40,
          "img/imgEnemy/ZombieAffamer.svg",
          "Griffes",
          "tranchant",
          10
        );
        break;
      case "Zombie":
        hero = new Zombie(
          35,
          "img/imgEnemy/Zombie.svg",
          "Mains",
          "trnahcant",
          8
        );
        break;
      case "Squelette":
        hero = new Squelette(
          25,
          "img/imgEnemy/Squelette.svg",
          "Épée",
          "critique",
          6
        );
        break;
      case "PetitDragon":
        hero = new PetitDragon(
          50,
          "img/imgEnemy/PetitDragon.svg",
          "Flammes",
          "Glace",
          12
        );
        break;
      case "Ours":
        hero = new Ours(45, "img/imgEnemy/Ours.svg", "Griffes", "Feu", 10);
        break;
      case "Minotor":
        hero = new Minotor(
          55,
          "img/imgEnemy/Minotor.svg",
          "Hache",
          "critique",
          14
        );
        break;
      case "MasterDragon":
        hero = new MasterDragon(
          100,
          "img/imgEnemy/MasterDragon.svg",
          "Feu",
          "Glace",
          25
        );
        break;
      case "GuerrierOrc":
        hero = new GuerrierOrc(
          55,
          "img/imgEnemy/GuerrierOrc.svg",
          "Hache",
          "critique",
          12
        );
        break;
      case "GrosZombie":
        hero = new GrosZombie(
          60,
          "img/imgEnemy/GrosZombie.svg",
          "Mains",
          "tranchant",
          14
        );
        break;
      case "Gorille":
        hero = new Gorille(
          50,
          "img/imgEnemy/Gorille.svg",
          "Poings",
          "critique",
          12
        );
        break;
      case "Golem":
        hero = new Golem(65, "img/imgEnemy/Golem.svg", "Massue", "magic", 15);
        break;
      case "Fantome":
        hero = new Fantome(
          30,
          "img/imgEnemy/Fantome.svg",
          "Ectoplasme",
          "magic",
          8
        );
        break;
      case "DragonRouge":
        hero = new DragonRouge(
          90,
          "img/imgEnemy/DragonRouge.svg",
          "Souffle de feu",
          "critique",
          20
        );
        break;
      case "Demon":
        hero = new Demon(
          65,
          "img/imgEnemy/Demon.svg",
          "Trident",
          "tranchant",
          14
        );
        break;
      case "ChienATroisTete":
        hero = new ChienATroisTete(
          70,
          "img/imgEnemy/ChienATroisTete.svg",
          "Crocs",
          "tranchant",
          16
        );
        break;
      case "ChevalierCorrompu":
        hero = new ChevalierCorrompu(
          75,
          "img/imgEnemy/ChevalierCorrompu.svg",
          "Épée maudite",
          "critique",
          18
        );
        break;

      default:
        console.log("Classe invalide.");
        return;
    }

    // Enregistrez l'instance du Enemy dans le stockage local
    enemy.setEnemyIntoLocalStorage();
  });
});
