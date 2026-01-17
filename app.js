const images = {"https://cdn.britannica.com/25/160325-050-EB1C8FB7/image-instruments-Earth-satellite-NASA-Suomi-National-2012.jpg", "https://cdn.pixabay.com/photo/2013/11/22/17/23/forest-215795_1280.jpg", "https://wallpapers.com/images/hd/beautiful-ocean-pictures-1920-x-1080-r0yyh3qhk3284dqc.jpg"]; 
let index = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    index = (index + 1) % images.length;
    document.getElementById("earth").src = images[index];
  }
});
