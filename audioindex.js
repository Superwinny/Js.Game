
const sound = new Howl({
    src: ['song/Ambiance.flac'],
    autoplay: true,
    loop: true,
    volume: 0.5 // Volume réduit (à ajuster selon vos besoins)
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