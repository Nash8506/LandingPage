// Select all elements with the .fade-in class
const fadeInElements = document.querySelectorAll('.fade-in');

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight - 100;
}

// Function to add animation class if element is in viewport
function animateOnScroll() {
    fadeInElements.forEach(element => {
        if (isInViewport(element)) {
            element.style.animation = "fadeIn 0.6s forwards";
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', animateOnScroll);

// Trigger animation on initial load
animateOnScroll();
