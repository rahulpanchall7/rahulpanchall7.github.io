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

// Robot Arm Animation
const robotArm = document.querySelector('.robot-arm');
const gripperObject = document.querySelector('.gripper-object');

// Create keyframes for the arm movement
const keyframes = [
    { transform: 'rotate(0, 250, 300) rotate(0, 250, 150) rotate(0, 250, 50) rotate(0, 250, -20) rotate(0, 250, -50) rotate(0, 250, -80)' },
    { transform: 'rotate(20, 250, 300) rotate(30, 250, 150) rotate(-10, 250, 50) rotate(0, 250, -20) rotate(0, 250, -50) rotate(0, 250, -80)' },
    { transform: 'rotate(30, 250, 300) rotate(60, 250, 150) rotate(-20, 250, 50) rotate(10, 250, -20) rotate(0, 250, -50) rotate(0, 250, -80)' },
    { transform: 'rotate(30, 250, 300) rotate(60, 250, 150) rotate(-20, 250, 50) rotate(10, 250, -20) rotate(0, 250, -50) rotate(30, 250, -80)', offset: 0.3 },
    { transform: 'rotate(30, 250, 300) rotate(60, 250, 150) rotate(-20, 250, 50) rotate(10, 250, -20) rotate(0, 250, -50) rotate(0, 250, -80)', offset: 0.4 },
    { transform: 'rotate(30, 250, 300) rotate(60, 250, 150) rotate(-20, 250, 50) rotate(10, 250, -20) rotate(0, 250, -50) rotate(0, 250, -80)' },
    { transform: 'rotate(20, 250, 300) rotate(30, 250, 150) rotate(-10, 250, 50) rotate(0, 250, -20) rotate(0, 250, -50) rotate(0, 250, -80)' },
    { transform: 'rotate(0, 250, 300) rotate(0, 250, 150) rotate(0, 250, 50) rotate(0, 250, -20) rotate(0, 250, -50) rotate(0, 250, -80)' }
];

// Create keyframes for the object being picked
const objectKeyframes = [
    { opacity: 0, transform: 'translateY(0)' },
    { opacity: 0, transform: 'translateY(0)', offset: 0.3 },
    { opacity: 1, transform: 'translateY(0)', offset: 0.35 },
    { opacity: 1, transform: 'translateY(-40px)', offset: 0.6 },
    { opacity: 1, transform: 'translateY(-80px)' }
];

// Animate the arm
robotArm.animate(keyframes, {
    duration: 5000,
    iterations: Infinity,
    easing: 'ease-in-out'
});

// Animate the object
gripperObject.animate(objectKeyframes, {
    duration: 5000,
    iterations: Infinity,
    easing: 'ease-in-out'
});