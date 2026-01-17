let button = document.getElementById("myButton");
let audio= document.getElementById("myAudio");
console.log("button");
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

document.addEventListener('DOMContentLoaded', function() {
                                                 const button =
document.getElementById('myButton');

         if (button) {
button.addEventListener('click', function() {
                                                console.log("Button clicked!");
                                                                                });
                                                                            
