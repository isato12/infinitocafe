$(document).ready(function () {
  //dando el efecto al menu de cuando carga pagina cae la barra de nav menu por menu
  //el metodo each lo que hara es aplicar una funcion a cada uno de los enlaces

  $(".navbar a").each(function (index, elemento) {
    //la linea de abajo indica que el elemento actual aplicara css
    $(this).css({
      top: "-200px", //modificamos la propiedad css de top de - 200px
    });
    $(this).animate(
      //este elemento aplica animacion
      {
        top: "0",
      },
      //aplicamos nuestra animacion al index (arreglo nav bar) indicando que el primero seria en 2s y de ahi aumenta el eintervalo de .5s cada elemento
      2000 + index * 500
    );
  });
  //efecto titulo header
  //obteniendo el ancho de la pantalla, esperando que sea menor de 800px
  if ($(window).width() > 800) {
    //seleccionando los textos por medio de su clase  para darle porpiedades css
    $("header .textos").css({
      //pone la opacidad y el margen top en 0
      opacity: 0,
      marginTop: 0,
    });
    //seleccionando los textos por medio de su clase para darle una animacion
    $("header .textos").animate(
      {
        //pone la opacidad en 1 y el margen top en -52 lo que hara que se ea nuestra animacion del texto titular
        opacity: 1,
        marginTop: "-52px",
      },
      1500 //indica el tiempo en el que va efectuar el efecto
    );
  }
  //menu hamburguesa
  $(".menu_icon").click(function () {
    $(".navbar").slideToggle();
  });
  
  //cada que picas al enlace de nuestra navegacion te manda a la seccion
  let nosotros = $("#nosotros").offset().top,
    menu = $("#menu").offset().top,
    galeria = $("#postres").offset().top,
    promociones = $("#promociones").offset().top,
    ubicacion = $("#ubicacion").offset().top;
  subir = $("#menunav").offset().top;

  $("#b-nosotros").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: nosotros - 200,
      },
      500
    );
  });

  $("#b-menu").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: menu + 200,
      },
      500
    );
  });

  $("#b-postres").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: galeria + 200,
      },
      500
    );
  });
  $("#b-promociones").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: promociones + 200,
      },
      500
    );
  });

  $("#b-ubicacion").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: ubicacion + 800,
      },
      500
    );
  });
  $("#arriba").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: subir,
      },
      500
    );
  });
});
