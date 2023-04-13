window.onload = function() {

    document.getElementById("slidetitle0").innerHTML=slidetitles0[0];
    document.getElementById("subgroup0").style.backgroundImage=slideimage0[0];
    document.getElementById("slidedesc0").innerHTML=slidedescs0[0];
    slides0 = document.querySelectorAll(".slide0");
    slides0.forEach((slide0, indx) => {
      slide0.style.transform = `translateX(${indx * 100}%)`;
    });
    curSlide0 = 0;
    maxSlide0 = slides0.length - 1;

    document.getElementById("slidetitle1").innerHTML=slidetitles1[0];
    document.getElementById("subgroup1").style.backgroundImage=slideimage1[0];
    document.getElementById("slidedesc1").innerHTML=slidedescs1[0];
    slides1 = document.querySelectorAll(".slide1");
    slides1.forEach((slide1, indx) => {
    slide1.style.transform = `translateX(${indx * 100}%)`;
    });
    curSlide1 = 0;
    maxSlide1 = slides1.length - 1;

    document.getElementById("slidetitle2").innerHTML=slidetitles2[0];
    document.getElementById("subgroup2").style.backgroundImage=slideimage2[0];
    document.getElementById("slidedesc2").innerHTML=slidedescs2[0];
    slides2 = document.querySelectorAll(".slide2");
    slides2.forEach((slide2, indx) => {
    slide2.style.transform = `translateX(${indx * 100}%)`;
    });
    curSlide2 = 0;
    maxSlide2 = slides2.length - 1;

    document.getElementById("slidetitle3").innerHTML=slidetitles3[0];
    document.getElementById("subgroup3").style.backgroundImage=slideimage3[0];
    document.getElementById("slidedesc3").innerHTML=slidedescs3[0];
    slides3 = document.querySelectorAll(".slide3");
    slides3.forEach((slide3, indx) => {
    slide3.style.transform = `translateX(${indx * 100}%)`;
    });
    curSlide3 = 0;
    maxSlide3 = slides3.length - 1;
};

function openinfo(){
    window.open("../../documents/puestos.pdf")
}
  
var slideimage0 = {
    0: "url(../../images/emengineer.jpg)",
    1: "url(../../images/battery.jpg)",
    2: "url(../../images/frontend.webp)",
    3: "url(../../images/data.jpeg)",
    4: "url(../../images/systems.jpg)",
    
}

var slidetitles0 = {
    0: "Ingeniero electromagnético",
    1: "Ingeniero electrónico",
    2: "Desarrollador de frontend",
    3: "Data scientist",
    4: "Ingeniero de sistemas",
}

var slidedescs0 = {
    0: "Responsable de diseñar y construir las bobinas alrededor de la parte curva del sincrotrón para generar campos electromagnéticos, manteniendo así las partículas en la pista mientras cambian de dirección.",
    1: "Responsable de diseñar y construir los circuitos de corriente alterna utilizados en las partes de aceleración lineal del sincrotrón, así como las baterías y fuentes de alimentación.",
    2: "Aplicar tecnologías web para crear y mantener la página web del equipo y otras aplicaciones orientadas al usuario.",
    3: "Recopila y analiza datos de experimentos para optimizar los sistemas. Diseño de programas para captación de datos. Construcción de gráficas y interpretación de los resultados.",
    4: "Diseño de software utilizado para automatizar todos los procesos que ocurren en los controladores lógicos programables del sincrotrón, como las bobinas o los sensores.",
}

var slideimage1 = {
    0: "url(../../images/materials.jpg)",
    1: "url(../../images/cad.png)",
    2: "url(../../images/vacuum.jpg)",
    3: "url(../../images/proton.jpg)",
    4: "url(../../images/simulation.png)",
    
}

var slidetitles1 = {
    0: "Ingeniero de materiales",
    1: "Ingeniero de CAD",
    2: "Ingeniero de vacío",
    3: "Especialista en generación de protones",
    4: "Ingeniero de simulaciones",
}

var slidedescs1 = {
    0: "Realiza simulaciones computacionales y pruebas físicas de los materiales y partes del prototipo para determinar sus propiedades, estrés y posibles daños.",
    1: "Diseña y construye modelos tridimensionales de piezas de sincrotrón, imanes y otras partes relevantes del proyecto utilizando software de CAD.",
    2: "Comprende y domina la tecnología de vacío para aplicarla en la construcción del sincrotrón. Investigación y construcción de cámaras de vacío.",
    3: "Responsable de investigar, probar y diseñar diferentes fuentes de protones, involucrando técnicas químicas, físicas o mecánicas.",
    4: "Prueba las propiedades magnéticas, mecánicas y térmicas del ciclotrón utilizando métodos de elementos finitos y otras técnicas de simulación.",
}

var slideimage2 = {
    0: "url(../../images/quimico.png)",
    1: "url(../../images/paper.webp)",
    2: "url(../../images/physics.png)",
    3: "url(../../images/medicine.jpg)",
    4: "url(../../images/laser.png)",
    
}

var slidetitles2 = {
    0: "Químico orgánico",
    1: "Editor de publicaciones",
    2: "Investigador en física de partículas",
    3: "Investigación y regulación sanitaria",
    4: "Investigador de nuevas tecnologías",
}

var slidedescs2 = {
    0: "Responsable de diseñar posibles rutas sintéticas para la molécula final del radiofármaco, así como de manejar impurezas y optimizar los recursos.",
    1: "Escritor de artículos científicos rigurosos y profesionales que sinteticen los avances realizados en las diferentes áreas del equipo.",
    2: "Responsable de estudiar los fenómenos que predominan en física de altas energías y sincrotrones para asegurar que las tareas de ingeniería se realicen de manera adecuada.",
    3: "Responsable de asegurar que se cumplan todas las regulaciones sanitarias. Realiza investigaciones sobre las necesidades de los pacientes y lo que se debe proporcionar para una terapia efectiva, además de su posible implementación en el prototipo.",
    4: "Responsable de investigar sobre las nuevas técnicas que se están realizando en el campo de la aceleración de partículas, proponer formas de aplicarlas en nuestro proyecto y realizar cálculos y estimaciones pertinentes.",
}

var slideimage3 = {
    0: "url(../../images/design.webp)",
    1: "url(../../images/socimedia.jpeg)",
    2: "url(../../images/economics.jpg)",
    
}

var slidetitles3 = {
    0: "Diseñador gráfico",
    1: "Administrador de redes sociales/creador de contenido",
    2: "Gestor económico",
}

var slidedescs3 = {
    0: "Diseña logotipos, banners promocionales y publicaciones para las redes sociales del equipo.",
    1: "Responsable de crear publicaciones en Instagram, Linkedin y en el blog de nuestra página web. Interacción con comentarios y mensajes directos.",
    2: "Responsable de gestionar las cuentas bancarias del equipo, estimar precios y llevar a cabo operaciones de contabilidad con posibles socios y proveedores.",
}


  function nextsl0() {
      // check if current slide is the last and reset current slide
      if (curSlide0 === maxSlide0) {
          curSlide0 = 0;
      } else {
          curSlide0++;
      }
  
      //move slide by -100%
      slides0.forEach((slide0, indx) => {
      slide0.style.transform = `translateX(${100 * (indx - curSlide0)}%)`;
      });
  
      document.getElementById("subgroup0").style.backgroundImage=slideimage0[curSlide0];
      document.getElementById("slidetitle0").innerHTML=slidetitles0[curSlide0];
      document.getElementById("slidedesc0").innerHTML=slidedescs0[curSlide0];
  };
  
  
  function prevsl0() {
    // check if current slide is the first and reset current slide to last
    if (curSlide0 === 0) {
      curSlide0 = maxSlide0;
    } else {
      curSlide0--;
    }
  
    //   move slide by 100%
    slides0.forEach((slide0, indx) => {
      slide0.style.transform = `translateX(${100 * (indx - curSlide0)}%)`;
    });
    document.getElementById("subgroup0").style.backgroundImage=slideimage0[curSlide0];
    document.getElementById("slidetitle0").innerHTML=slidetitles0[curSlide0];
    document.getElementById("slidedesc0").innerHTML=slidedescs0[curSlide0];
  };

  function nextsl1() {
    // check if current slide is the last and reset current slide
    if (curSlide1 === maxSlide1) {
        curSlide1 = 0;
    } else {
        curSlide1++;
    }

    //move slide by -100%
    slides1.forEach((slide1, indx) => {
    slide1.style.transform = `translateX(${100 * (indx - curSlide1)}%)`;
    });

    document.getElementById("subgroup1").style.backgroundImage=slideimage1[curSlide1];
    document.getElementById("slidetitle1").innerHTML=slidetitles1[curSlide1];
    document.getElementById("slidedesc1").innerHTML=slidedescs1[curSlide1];
};


function prevsl1() {
  // check if current slide is the first and reset current slide to last
  if (curSlide1 === 0) {
    curSlide1 = maxSlide1;
  } else {
    curSlide1--;
  }

  //   move slide by 100%
  slides1.forEach((slide1, indx) => {
    slide1.style.transform = `translateX(${100 * (indx - curSlide1)}%)`;
  });
  document.getElementById("subgroup1").style.backgroundImage=slideimage1[curSlide1];
  document.getElementById("slidetitle1").innerHTML=slidetitles1[curSlide1];
  document.getElementById("slidedesc1").innerHTML=slidedescs1[curSlide1];
};

function nextsl2() {
    // check if current slide is the last and reset current slide
    if (curSlide2 === maxSlide2) {
        curSlide2 = 0;
    } else {
        curSlide2++;
    }

    //move slide by -100%
    slides2.forEach((slide2, indx) => {
    slide2.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
    });

    document.getElementById("subgroup2").style.backgroundImage=slideimage2[curSlide2];
    document.getElementById("slidetitle2").innerHTML=slidetitles2[curSlide2];
    document.getElementById("slidedesc2").innerHTML=slidedescs2[curSlide2];
};


function prevsl2() {
  // check if current slide is the first and reset current slide to last
  if (curSlide2 === 0) {
    curSlide2 = maxSlide2;
  } else {
    curSlide2--;
  }

  //   move slide by 100%
  slides2.forEach((slide2, indx) => {
    slide2.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
  });
  document.getElementById("subgroup2").style.backgroundImage=slideimage2[curSlide2];
  document.getElementById("slidetitle2").innerHTML=slidetitles2[curSlide2];
  document.getElementById("slidedesc2").innerHTML=slidedescs2[curSlide2];
};

function nextsl3() {
    // check if current slide is the last and reset current slide
    if (curSlide3 === maxSlide3) {
        curSlide3 = 0;
    } else {
        curSlide3++;
    }

    //move slide by -100%
    slides3.forEach((slide3, indx) => {
    slide3.style.transform = `translateX(${100 * (indx - curSlide3)}%)`;
    });

    document.getElementById("subgroup3").style.backgroundImage=slideimage3[curSlide3];
    document.getElementById("slidetitle3").innerHTML=slidetitles3[curSlide3];
    document.getElementById("slidedesc3").innerHTML=slidedescs3[curSlide3];
};


function prevsl3() {
  // check if current slide is the first and reset current slide to last
  if (curSlide3 === 0) {
    curSlide3 = maxSlide3;
  } else {
    curSlide3--;
  }

  //   move slide by 100%
  slides3.forEach((slide3, indx) => {
    slide3.style.transform = `translateX(${100 * (indx - curSlide3)}%)`;
  });
  document.getElementById("subgroup3").style.backgroundImage=slideimage3[curSlide3];
  document.getElementById("slidetitle3").innerHTML=slidetitles3[curSlide3];
  document.getElementById("slidedesc3").innerHTML=slidedescs3[curSlide3];
};
  