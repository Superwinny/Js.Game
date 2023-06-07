
const sound = new Howl({
  src: ['song/Select.mp3'],
  volume: 0.1
});

window.addEventListener('load', function() {
  sound.play();
});

sound.once('end', function() {
  
});