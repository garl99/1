particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000000",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": false
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);


$(document).ready(function(){

  var windowWidth = $(window).width();

  /*------Animacion inicial-----*/

  $('main .fondo .img-fondo').css({
    opacity:0
  });

  $('main .fondo .contenedor-flex .presentacion .contenedor .foto img').css({
    opacity: 0
  });

  if (windowWidth > 800) {

      $('main .fondo .contenedor-flex .presentacion .contenedor .foto img').animate({
        opacity: 1
      }, 3000);
    
  }

  $('.menu a').each(function(index){

    $(this).css({
      top: '-100px',
      opacity: 0
    });

    $(this).animate({
      top: 0,
      opacity:1
    }, 2000 + index*500);

  });


  if ($(window).width()>800) {

    $('header .contenedor-textos .textos').css({
      bottom: '10%',
      opacity: 0
      
    });

    $('header .contenedor-textos .textos').animate({
      bottom: '30%',
      opacity: 1
    }, 3000);

  }


  /*------Botones del menu-------*/
  var acercaDe = $('#acercaDe').offset().top;
  var proyectos= $('#proyectos').offset().top;
  var contacto= $('#contacto').offset().top;

  
  $('#btn-acercaDe').on('click',function(e){
    e.preventDefault();

        $('html, body').animate({
            scrollTop: acercaDe
        },600);
  });

  $('#btn-proyectos').on('click',function(e){
    e.preventDefault();

        $('html, body').animate({
            scrollTop: proyectos
        },600);
  });

  $('#btn-contacto').on('click',function(e){
    e.preventDefault();

        $('html, body').animate({
            scrollTop: contacto
        },600);
  });

    /*------Efectos-------*/

    $(window).scroll(function () {
      var cont= 0;
      var windowWidth = $(window).width();
  
      if (windowWidth > 800) {
        var scroll = $(window).scrollTop();
     
        if(scroll>=300 && cont==0){

          $('main .fondo .img-fondo').animate({
            opacity: 1
          }, 2000);
          cont=1;
        }
      }
  
    });


});