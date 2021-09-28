window.addEventListener("load", function () {
  let imagenes = [];
  imagenes[0] = "img/slider/0.jpg";
  imagenes[1] = "img/slider/1.jpg";
  imagenes[2] = "img/slider/2.jpg";
  imagenes[3] = "img/slider/3.jpg";
  imagenes[4] = "img/slider/4.jpg";
  indiceImagenes = 0;

  function cambiarImg() {
    document.slider.src = imagenes[indiceImagenes];
    if (indiceImagenes < 4) {
      indiceImagenes++;
    } else {
      indiceImagenes = 0;
    }
  }

  setInterval(cambiarImg, 3000);
});
