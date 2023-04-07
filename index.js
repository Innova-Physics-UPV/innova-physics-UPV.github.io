window.onload = function() {
  // Select all slides
  slides = document.querySelectorAll(".slide");

  // loop through slides and set each slides translateX property to index * 100% 
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  // current slide counter
  curSlide = 0;

  // maximum number of slides
  maxSlide = slides.length - 1;

  document.getElementById("slidetext").innerHTML=slidetexts.sl0;
  document.getElementById("slidelink").innerHTML=slidelinktexts.sl0;
  document.getElementById("slidelink").href=slidelinks.sl0;
};

slidetexts={
 sl0: "Buscamos nuevos integrantes! Puedes acceder a la lista de oportunidades con sus respectivos requisitos y descripciones el siguiente enlace.",
 sl1: "¡Nuestro equipo ha sido aceptado en el programa 'Generación espontánea' de la UPV! ¡Os esperamos a todos los que estéis interesados en formar parte!",
}

slidelinktexts={
  sl0: "Consulta las vacantes",
  sl1: "Echa un vistazo al resto de grupos",
}

slidelinks={
  sl0: "sections/hiring/hiring.html",
  sl1: "https://generacionespontanea.upv.es/grupos",
}

function nextsl() {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    //move slide by -100%
    slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });

    var object = `sl${curSlide}`
    document.getElementById("slidetext").innerHTML=slidetexts[object];
    document.getElementById("slidelink").innerHTML=slidelinktexts[object];
    document.getElementById("slidelink").href=slidelinks[object];
};


function prevsl() {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
};

