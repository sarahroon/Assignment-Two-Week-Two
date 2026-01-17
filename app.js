const audio = document.getElementById("myAudio");
const link = document.getElementById("audioLink");

let isPlaying = false;

function toggleAudio(e) {
  e.preventDefault();

  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    link.textContent = "Pause audio";
  } else {
    audio.pause();
    isPlaying = false;
    link.textContent = "Play audio";
  }
}

link.addEventListener("click", toggleAudio);
