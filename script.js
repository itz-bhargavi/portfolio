// Initialize Vanilla-tilt for 3D effects
const tiltElements = document.querySelectorAll('[data-tilt]');
VanillaTilt.init(tiltElements, {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.2,
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add scroll reveal animations
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.skill-card, .project-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    reveal();
});
