const slider = document.getElementById('testimonialSlider');
        const totalSlides = document.querySelectorAll('.testimonial-card').length;
        let currentSlide = 0;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            document.getElementById('prevBtn').disabled = currentSlide === 0;
            document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
        }

        function nextSlide() {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateSlider();
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        }

        // Initial state
        updateSlider();