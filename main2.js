// Sélectionnez les images des héros
const heroImages = document.querySelectorAll("#choixperso img");

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
        hero = new Guerrier();
        break;
      case "Mage":
        hero = new Mage();
        break;
      case "Chasseur":
        hero = new Chasseur();
        break;
      default:
        console.log("Classe invalide.");
        return;
    }

    // Enregistrez l'instance du héros dans le stockage local
    localStorage.setItem("hero", JSON.stringify(hero));

    // Récupérez l'URL de l'image du héros à partir de la classe correspondante
    const imageURL = hero.imgURL;

    // Mettez à jour l'image source avec l'URL du héros sélectionné
    image.setAttribute("src", imageURL);

    // Supprimez l'attribut disabled du bouton de validation
    confirmButton.removeAttribute("disabled");

    console.log("Héros sélectionné :", hero);
  });
});