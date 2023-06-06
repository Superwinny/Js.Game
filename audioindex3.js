const sound = new Howl({
    src: ['song/game.wav'],
    autoplay: true,
    loop: true,
    volume: 0.5 // Volume réduit (à ajuster selon vos besoins)
  });
  
  // Gestionnaire d'événements pour le chargement de la page
  window.addEventListener('load', function() {
    sound.play();
  });
  
  // Gestionnaire d'événements pour le clic sur le bouton "Arrêter la musique"
  const buttonStop = document.getElementById('buttonStop');
  buttonStop.addEventListener('click', function() {
    sound.stop();
  });