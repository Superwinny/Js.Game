
const sound = new Howl({
    src: ['song/Ambiance.flac']
  });
  
  // Démarrage de la musique lorsque le DOM est entièrement chargé
  document.addEventListener('DOMContentLoaded', function() {
    sound.play();
  });
  
  // Sélectionnez le bouton "STOP" dans le DOM
  const stopButton = document.getElementById('stopButton');
  
  // Fonction pour arrêter la musique lorsque le bouton "STOP" est cliqué
  stopButton.addEventListener('click', function() {
    sound.stop();
  });