const sound = new Howl({
  src: ['song/Ambiance.flac'],
  autoplay: true,
  loop: true,
  volume: 0.5 
});

// Démarrage de la musique lorsque le DOM est entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
  sound.play();
});

// Sélectionnez l'image "Song" dans le DOM
const songImage = document.getElementById('song-image');

// Gestionnaire d'événements pour le clic sur l'image "Song"
songImage.addEventListener('click', function() {
  if (sound.playing()) {
    sound.pause();
  } else {
    sound.play();
  }
});

// Sélectionnez le bouton "STOP" dans le DOM
const stopButton = document.getElementById('stopButton');

// Gestionnaire d'événements pour le clic sur le bouton "Arrêter la musique"
stopButton.addEventListener('click', function() {
  sound.stop();
});