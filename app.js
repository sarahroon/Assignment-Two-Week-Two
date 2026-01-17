let button = document.getElementById("myButton");
let audio= document.getElementById("myAudio");

if (myButton && myAudio) {
  button.addEventListener("click", () -> {
    if (audio.paused) {
      audio.play();
      button.textContent = "Pause Audio";
    } else {
      audio.pause();
      button.textContent = "Play Audio";
    
