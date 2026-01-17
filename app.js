const audio = document.getElementById("audioPlayer");
const btn = document.getElementById("playBtn");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "Pause Audio";
  } else {
    audio.pause();
    btn.textContent = "Play Audio";
  }
});
                                                     
