// This file contains the logic for the pricing calculator, including functions to calculate prices based on user input and update the displayed results.

document.addEventListener('DOMContentLoaded', function() {
    // Show only the image for the selected category
    function showSelectedRenderingType() {
        const selectedType = document.getElementById('type').value;
        let found = false;
        document.querySelectorAll('.rendering-type').forEach(div => {
            if (div.getAttribute('data-type') === selectedType) {
                div.classList.add('active');
                found = true;
            } else {
                div.classList.remove('active');
            }
        });
        if (!found) {
            const first = document.querySelector('.rendering-type');
            if (first) first.classList.add('active');
        }
    }

    const basePrices = {
        interior: { basic: 400, standard: 600, premium: 800 },
        exterior: { basic: 500, standard: 700, premium: 1000 },
        product:  { basic: 80,  standard: 160, premium: 250 },
    };

    const turnaroundTimes = {
        basic: 'Less than 1 week',
        standard: 'Around 1 week',
        premium: '1-2 weeks'
    };

    function updateTurnaround() {
        const complexity = document.getElementById('complexity').value;
        const type = document.getElementById('type').value;
        document.querySelectorAll('.turnaround-list').forEach(list => list.innerHTML = '');
        const active = document.querySelector('.rendering-type.active .turnaround-list');
        if (active) {
            active.innerHTML = `Turnaround time: <b>${turnaroundTimes[complexity]}</b>`;
        }
    }

    function calculatePrice() {
        showSelectedRenderingType();
        const type = document.getElementById('type').value;
        const quantity = parseInt(document.getElementById('quantity').value, 10);
        const complexity = document.getElementById('complexity').value;
        document.getElementById('quantity-number').value = quantity;
        let pricePerRendering = basePrices[type][complexity];
        let discount = 0;
        let discountMsg = '';

        // Discount logic for interior
        if (type === 'interior') {
            if (complexity === 'basic') {
                if (quantity > 6) {
                    pricePerRendering = 250;
                    discount = 150;
                    discountMsg = `You save $150 per image!`;
                } else if (quantity >= 3) {
                    pricePerRendering = 300;
                    discount = 100;
                    discountMsg = `You save $100 discount per image.`;
                }
            } else if (complexity === 'standard') {
                if (quantity > 6) {
                    pricePerRendering = 400;
                    discount = 200;
                    discountMsg = `You save $200 per image`;
                } else if (quantity >= 3) {
                    pricePerRendering = 500;
                    discount = 100;
                    discountMsg = `You save $100 per image`;
                }
            } else if (complexity === 'premium') {
                if (quantity > 6) {
                    pricePerRendering = 550;
                    discount = 250;
                    discountMsg = `You save $250 per image`;
                } else if (quantity >= 3) {
                    pricePerRendering = 650;
                    discount = 150;
                    discountMsg = `You save $150 per image`;
                }
            }
        }
        // Discount logic for exterior
        else if (type === 'exterior') {
            if (complexity === 'basic') {
                if (quantity > 6) {
                    pricePerRendering = 400;
                    discount = 100;
                    discountMsg = `You save $100 per image`;
                } else if (quantity >= 3) {
                    pricePerRendering = 450;
                    discount = 50;
                    discountMsg = `You save $50 per image`;
                }
            } else if (complexity === 'standard') {
                if (quantity > 6) {
                    pricePerRendering = 550;
                    discount = 150;
                    discountMsg = `You save $150 per image`;
                } else if (quantity >= 3) {
                    pricePerRendering = 650;
                    discount = 50;
                    discountMsg = `You save $50 per image`;
                }
            } else if (complexity === 'premium') {
                if (quantity > 6) {
                    pricePerRendering = 750;
                    discount = 250;
                    discountMsg = `You save $250 per image`;
                } else if (quantity >= 3) {
                    pricePerRendering = 850;
                    discount = 150;
                    discountMsg = `You save $150 per image`;
                }
            }
        }
        // Discount logic for product
        else if (type === 'product') {
            if (complexity === 'basic') {
                if (quantity > 6) {
                    pricePerRendering = 100;
                    discount = 50;
                    discountMsg = `You save $50 per image!`;
                } else if (quantity >= 3) {
                    pricePerRendering = 120;
                    discount = 30;
                    discountMsg = `You save $30 per image!`;
                }
            } else if (complexity === 'standard') {
                if (quantity > 6) {
                    pricePerRendering = 150;
                    discount = 100;
                    discountMsg = `You save $100 per image!`;
                } else if (quantity >= 3) {
                    pricePerRendering = 200;
                    discount = 50;
                    discountMsg = `You save $50 per image!`;
                }
            } else if (complexity === 'premium') {
                if (quantity > 6) {
                    pricePerRendering = 250;
                    discount = 150;
                    discountMsg = `You save $150 per image!`;
                } else if (quantity >= 3) {
                    pricePerRendering = 350;
                    discount = 50;
                    discountMsg = `You save $50 per image!`;
                }
            }
        }
        const total = pricePerRendering * quantity;
        document.getElementById('result').innerText = `Total Price: $${total}`;
        document.getElementById('discount-info').innerText = discountMsg;
        updateTurnaround();
    }

    document.addEventListener('DOMContentLoaded', function() {
        updateTurnaround();
        document.getElementById('complexity').addEventListener('change', function() {
            updateTurnaround();
            calculatePrice();
        });
        document.getElementById('type').addEventListener('change', updateTurnaround);
        const range = document.getElementById('quantity');
        const number = document.getElementById('quantity-number');
        range.addEventListener('input', function() {
            number.value = range.value;
            calculatePrice();
        });
        number.addEventListener('input', function() {
            let val = parseInt(number.value);
            if (isNaN(val) || val < 1) val = 1;
            if (val > 10) val = 10;
            number.value = val;
            range.value = val;
            calculatePrice();
        });
    });

    // Modal functionality
    const modal = document.getElementById('sample-modal');
    const modalClose = document.getElementById('modal-close');
    const seeMoreLinks = document.querySelectorAll('.see-more-link');

    seeMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.getAttribute('data-type');
            openModal(type);
        });
    });

    modalClose.addEventListener('click', function() {
        closeModal();
    });

    function openModal(type) {
        const modalContent = document.getElementById('modal-content');
        modalContent.innerHTML = getCarouselContent(type);
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function getCarouselContent(type) {
        // Logic to generate carousel content based on the type
        // This is a placeholder; implement your carousel logic here
        return `<div class="carousel">
                    <img src="public/assets/images/${type}_sample1.jpg" alt="${type} Sample 1">
                    <img src="public/assets/images/${type}_sample2.jpg" alt="${type} Sample 2">
                    <img src="public/assets/images/${type}_sample3.jpg" alt="${type} Sample 3">
                </div>`;
    }
});