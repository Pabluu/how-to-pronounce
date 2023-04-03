// reproduzir o audio
export function playAudio(audio) {
  let sound = document.querySelector("#audio");
  if (audio) {
    sound.play();
  }
}

// parar o audio
export function stopAudio(audio) {
  let sound = document.querySelector("#audio");
  if (audio) {
    sound.pause();
    sound.currentTime = 0;
  }
}
