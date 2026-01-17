const image = document.querySelector("img");
image.load();
image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

document.getElementById("playBtn").addEventListener("click", function ()
document.getElementById("audio").play();
});
