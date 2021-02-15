let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');
let cir = document.querySelector(".cir");
let img = document.querySelector(".img");
let h1 = document.querySelector(".h1");
let switsh = document.querySelector(".switsh");

window.addEventListener('mousemove',cursor);

function cursor(e){
    cir.style.top = mouseCursor.style.top = e.pageY + 'px';
    cir.style.left = mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('grow');
    })
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('grow');
    })
});

document.addEventListener('mouseleave', () => {
   mouseCursor.classList.add('shrink');
   cir.classList.add('shrink');
})
document.addEventListener('mouseover', () => {
    mouseCursor.classList.remove('shrink');
    cir.classList.remove('shrink');
})

img.addEventListener('mouseleave', () => {
    cir.classList.remove('change');
    img.style.transform = `scale(0.5)`;
    img.style.transition = `500ms`;
 })
img.addEventListener('mouseover', () => {
     cir.classList.add('change');
     img.style.transform = `scale(0.51)`;
     img.style.transition = `500ms`;
})

h1.addEventListener('mouseleave', () => {
    cir.classList.remove('shrin');
 })
h1.addEventListener('mouseover', () => {
    cir.classList.add('shrin');
})


document.addEventListener('click', () => {
    if(cir.classList.contains('change')){
        cir.removeClass('clicks');
       }
    else{
        cir.classList.add('clicks');
        setTimeout(() => { cir.classList.remove('clicks'); }, 200);
    }
 })

var timesClicked = 0;

h1.addEventListener('click', () => {
    timesClicked++;

    if (timesClicked%2==0) {
        h1.addEventListener('click', () => {
            switsh.classList.add('scaledown');
            switsh.classList.remove('scaleup')
        })
    } else {
        h1.addEventListener('click', () => {
            switsh.classList.add('scaleup');
            switsh.classList.remove('scaledown')
        })
    }
})
