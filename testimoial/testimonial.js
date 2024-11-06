// JavaScript for Responsive Carousel Functionality
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  let currentIndex = 0;

  // Calculate the width of each card plus margin (this may vary based on media query)
  const getCardWidth = () => document.querySelector(".card").offsetWidth + 20;
  const totalCards = document.querySelectorAll(".card").length;

  // Function to update carousel position
  const updateCarousel = () => {
      const offset = -currentIndex * getCardWidth();
      carousel.style.transform = `translateX(${offset}px)`;
  };

  // Adjust max index based on screen width
  const updateMaxIndex = () => {
      const containerWidth = carousel.parentElement.clientWidth;
      const cardsVisible = Math.floor(containerWidth / getCardWidth());
      return totalCards - cardsVisible;
  };

  // Left button click event
  leftBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
      }
  });

  // Right button click event
  rightBtn.addEventListener("click", () => {
      const maxIndex = updateMaxIndex();
      if (currentIndex < maxIndex) {
          currentIndex++;
          updateCarousel();
      }
  });

  // Recalculate carousel position and max index on window resize
  window.addEventListener("resize", () => {
      updateCarousel();
  });
});
