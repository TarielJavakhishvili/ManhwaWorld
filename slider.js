document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const slideContainer = document.querySelector(".slide-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;
    const slideInterval = 3000;
    let autoSlide;

   
    function showSlide(index) {
        
        currentIndex = (index + slides.length) % slides.length;

        
        const offset = -currentIndex * 100;
        slideContainer.style.transform = `translateX(${offset}%)`;
    }

    
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    
    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    
    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, slideInterval);
    }

    
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    
    nextButton.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    
    showSlide(currentIndex);
    startAutoSlide();
});


