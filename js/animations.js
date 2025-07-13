// Scroll Animation
const animateElements = document.querySelectorAll('.animate-on-scroll');

const animateOnScroll = () => {
  animateElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.classList.add('animated');
    }
  });
};

// Initial check
animateOnScroll();

// Check on scroll
window.addEventListener('scroll', animateOnScroll);