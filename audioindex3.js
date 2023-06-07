
  const sound = new Howl({
    src: ['song/game.wav'],
    autoplay: true,
    loop: true,
    volume: 0.2
  });
  
  let isPlaying = true; // Variable pour garder une trace de l'état de la musique
  
  // Fonction pour mettre en pause ou reprendre la musique
  const toggleMusic = () => {
    if (isPlaying) {
      sound.pause(); // Mettre en pause la musique
    } else {
      sound.play(); // Reprendre la musique
    }
    isPlaying = !isPlaying; // Inverser l'état de la musique (pause ou lecture)
  };
  
  // Ajoutez un gestionnaire d'événement pour le chargement de la page
  window.addEventListener('load', () => {
    sound.play(); // Lecture automatique de la musique au chargement de la page
  });
  
  // Ajoutez un gestionnaire d'événement pour le clic sur l'image
  const songImage = document.getElementById("song-image");
  songImage.addEventListener("click", toggleMusic);