const image = document.querySelector("img");
image.load();

image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

const audio = document.querySelector("audio");
audio.play();

audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});

const video = document.querySelector("video");
video.pause();

video.addEventListener("pause", function (event) {
  console.log("Pausing", event);
});

video.addEventListener("time", function (event) {
  console.log("Time event:", event);
});

const audio = document.querySelector("audio");
audio.play();

const button = document.querySelector("button");
button.play();

button.addEventListener("click", function (event) {
  audio.play();
});

const audio = document.querySelector("audio");
audio.pause();

const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  audio.pause();
});

const audio = document.querySelector("audio");
audio.stop();

const button = document.querySelector("button";
button.stop();

button.addEventListener("click", function (event) {
  audio.stop();
});

const audio = document.querySelector("audio");
const slider = document.querySelector("input");
slider.addEventListener("change", function (event) {
  audio.volume = event.target.value;
});
