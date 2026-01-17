let button = document.getElementById("myButton");
let audio= document.getElementById("myAudio");
console.log(button);
if (button && audio) {
  button.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      button.textContent = "Pause Audio";
    } else {
      audio.pause();
      button.textContent = "Play Audio";
    }
  });
} else {
  console.error("Button or audio element not found in the DOM.");
}
