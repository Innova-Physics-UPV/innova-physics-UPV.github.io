/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var uluru = {lat: 39.479326, lng: -0.337336};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }


 // position we will use later
 var lat = 39.479326;
 var lon = -0.337336;
 // initialize map
 map = L.map('mapDiv').setView([lat, lon], 13);
 // set map tiles source
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
   maxZoom: 18,
 }).addTo(map);
 // add marker to the map
 marker = L.marker([lat, lon]).addTo(map);
 // add popup to the marker
 marker.bindPopup("<b>Edificio 8H</b><br />Aula 0.042<br />Valencia").openPopup();



function fadeIn(element) {
  let opacity = 0;
  element.style.display = 'block';
  const fadeInInterval = setInterval(function () {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
    }
  }, 30); // Adjust the interval as needed
}

function fadeOut(element) {
  let opacity = 1;
  const fadeOutInterval = setInterval(function () {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      element.style.display = 'none';
      clearInterval(fadeOutInterval);
    }
  }, 30); // Adjust the interval as needed
}


function toggleImages1(isHovered) {
  const colorImage1 = document.querySelector('.color-img1');
  const whiteImage1 = document.querySelector('.white-img1');

  if (isHovered) {
    fadeIn(colorImage1);
    whiteImage1.style.display = 'none';
  } else {
    colorImage1.style.display = 'none';
    fadeIn(whiteImage1);
  }
}


function toggleImages2(isHovered) {
  const colorImage2 = document.querySelector('.color-img2');
  const whiteImage2 = document.querySelector('.white-img2');

  if (isHovered) {
    fadeIn(colorImage2);
    whiteImage2.style.display = 'none';
  } else {
    colorImage2.style.display = 'none';
    fadeIn(whiteImage2);
  }
}

function toggleImages3(isHovered) {
  const colorImage3 = document.querySelector('.color-img3');
  const whiteImage3 = document.querySelector('.white-img3');

  if (isHovered) {
    fadeIn(colorImage3);
    whiteImage3.style.display = 'none';
  } else {
    colorImage3.style.display = 'none';
    fadeIn(whiteImage3);
  }
}

function toggleImages4(isHovered) {
  const colorImage4 = document.querySelector('.color-img4');
  const whiteImage4 = document.querySelector('.white-img4');

  if (isHovered) {
    fadeIn(colorImage4);
    whiteImage4.style.display = 'none';
  } else {
    colorImage4.style.display = 'none';
    fadeIn(whiteImage4);
  }
}

function toggleImages5(isHovered) {
  const colorImage5 = document.querySelector('.color-img5');
  const whiteImage5 = document.querySelector('.white-img5');

  if (isHovered) {
    fadeIn(colorImage5);
    whiteImage5.style.display = 'none';
  } else {
    colorImage5.style.display = 'none';
    fadeIn(whiteImage5);
  }
}