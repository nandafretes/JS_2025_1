const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let index = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 300}px)`;
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});