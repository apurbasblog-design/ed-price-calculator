// Carousel functionality for the modal to display images or samples
class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.slides = carouselElement.querySelectorAll('.carousel-slide');
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.showSlide(this.currentIndex);
        this.setupEventListeners();
    }

    setupEventListeners() {
        const nextButton = this.carouselElement.querySelector('.carousel-next');
        const prevButton = this.carouselElement.querySelector('.carousel-prev');

        nextButton.addEventListener('click', () => this.nextSlide());
        prevButton.addEventListener('click', () => this.prevSlide());
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
    }
}

// Initialize the carousel when the modal is opened
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('sample-modal');
    const carouselElement = modal.querySelector('.carousel');

    if (carouselElement) {
        const carousel = new Carousel(carouselElement);
    }
});