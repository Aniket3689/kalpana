let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto Slider Functionality
setInterval(() => {
    moveSlide(1);
}, 5000); // Change slide every 5 seconds

function moveSlide(n) {
    showSlide(currentSlide + n);
}


var swiper = new Swiper('.swiper-container', {
    loop: true,  // Enables infinite loop
    autoplay: {
        delay: 5000, // 5-second delay for auto-slide
        disableOnInteraction: false, // Autoplay continues even after user interaction
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade', // Optional: fade effect between slides
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 1,
    spaceBetween: 0,
});



