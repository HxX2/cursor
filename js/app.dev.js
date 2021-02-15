"use strict";

var mouseCursor = document.querySelector(".cursor");
var navLinks = document.querySelectorAll('.nav-links li');
var cir = document.querySelector(".cir");
var img = document.querySelector(".img");
var h1 = document.querySelector(".h1");
var switsh = document.querySelector(".switsh");
window.addEventListener('mousemove', cursor);

function cursor(e) {
  cir.style.top = mouseCursor.style.top = e.pageY + 'px';
  cir.style.left = mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(function (link) {
  link.addEventListener('mouseleave', function () {
    mouseCursor.classList.remove('grow');
  });
  link.addEventListener('mouseover', function () {
    mouseCursor.classList.add('grow');
  });
});
document.addEventListener('mouseleave', function () {
  mouseCursor.classList.add('shrink');
  cir.classList.add('shrink');
});
document.addEventListener('mouseover', function () {
  mouseCursor.classList.remove('shrink');
  cir.classList.remove('shrink');
});
img.addEventListener('mouseleave', function () {
  cir.classList.remove('change');
  img.style.transform = "scale(0.5)";
  img.style.transition = "500ms";
});
img.addEventListener('mouseover', function () {
  cir.classList.add('change');
  img.style.transform = "scale(0.51)";
  img.style.transition = "500ms";
});
h1.addEventListener('mouseleave', function () {
  cir.classList.remove('shrin');
});
h1.addEventListener('mouseover', function () {
  cir.classList.add('shrin');
});
document.addEventListener('click', function () {
  if (cir.classList.contains('change')) {
    cir.classList.remove('clicks');
  } else {
    cir.classList.add('clicks');
    setTimeout(function () {
      cir.classList.remove('clicks');
    }, 200);
  }
});
var timesClicked = 0;
h1.addEventListener('click', function () {
  timesClicked++;

  if (timesClicked % 2 == 0) {
    h1.addEventListener('click', function () {
      switsh.classList.add('scaledown');
      switsh.classList.remove('scaleup');
      setTimeout(function () {
        switsh.classList.add('opac');
      }, 900);
    });
  } else {
    h1.addEventListener('click', function () {
      switsh.classList.add('scaleup');
      switsh.classList.remove('scaledown');
    });
  }
});