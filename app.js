let button ="Play";
console.log(button);
button.addEventListener("Play", () => {
  if (audio.paused) {
    audio.play();
    button.textContent = "Pause Audio";
  } else {
    audio.pause();
    button.textContent = "Play Audio";
  }
});
                                                     
