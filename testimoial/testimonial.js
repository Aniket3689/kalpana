const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Number of slides to show
    spaceBetween: 30, // Space between slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Delay between slides
      disableOnInteraction: false, // Continue autoplay after user interactions
    },
    breakpoints: {
      // When window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // When window width is < 640px
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  