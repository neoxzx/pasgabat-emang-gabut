// script.js - JavaScript Identik 100% dengan PAI-B Official

let slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk geser slide (prev/next)
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Fungsi untuk pilih slide via dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Fungsi utama untuk tampilkan slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Auto slide setiap 5 detik (persis PAI-B)
setInterval(function() {
    changeSlide(1);
}, 5000);