const image = document.querySelector("img");
image.load();
image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

const audio = document.querySelector("audio");
button.onclick = () => audio.play();
const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  audio.play();
});

const audio = document.querySelector("audio");
button.onclick = () => audio.pause();
const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  audio.pause();
});

const audio = document.querySelector("audio");
const slider = document.querySelector("input");
slider.addEventListener("change", function (event) {
  audio.volume = event.target.value;
});




});
