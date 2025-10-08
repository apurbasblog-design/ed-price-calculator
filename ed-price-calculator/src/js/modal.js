// This file contains the logic for the modal functionality, including opening and closing the modal, as well as handling events related to the modal.

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('sampleModal');
    const modalCloseButton = document.getElementById('modalCloseButton');
    const seeMoreLinks = document.querySelectorAll('.see-more-link');
    const carouselContainer = document.getElementById('carouselContainer');

    // Function to open the modal
    function openModal(images) {
        carouselContainer.innerHTML = ''; // Clear previous images
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            imgElement.classList.add('carousel-image');
            carouselContainer.appendChild(imgElement);
        });
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listener for closing the modal
    modalCloseButton.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Event listeners for "See more samples" links
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const type = this.getAttribute('data-type');
            const images = getImagesForType(type);
            openModal(images);
        });
    });

    // Function to get images based on the rendering type
    function getImagesForType(type) {
        const images = {
            interior: [
                { src: 'public/assets/images/interior1.jpg', alt: 'Interior Sample 1' },
                { src: 'public/assets/images/interior2.jpg', alt: 'Interior Sample 2' },
                { src: 'public/assets/images/interior3.jpg', alt: 'Interior Sample 3' }
            ],
            exterior: [
                { src: 'public/assets/images/exterior1.jpg', alt: 'Exterior Sample 1' },
                { src: 'public/assets/images/exterior2.jpg', alt: 'Exterior Sample 2' },
                { src: 'public/assets/images/exterior3.jpg', alt: 'Exterior Sample 3' }
            ],
            product: [
                { src: 'public/assets/images/product1.jpg', alt: 'Product Sample 1' },
                { src: 'public/assets/images/product2.jpg', alt: 'Product Sample 2' },
                { src: 'public/assets/images/product3.jpg', alt: 'Product Sample 3' }
            ]
        };
        return images[type] || [];
    }
});