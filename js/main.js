// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px -15px rgba(2, 12, 27, 0.7)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Experience Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Project Category Tabs
const projectTabBtns = document.querySelectorAll('.project-tab-btn');
const projectCategories = document.querySelectorAll('.project-category');
        
projectTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const categoryId = btn.getAttribute('data-category');
        
        // Remove active class from all buttons and categories
        projectTabBtns.forEach(btn => btn.classList.remove('active'));
        projectCategories.forEach(cat => cat.classList.remove('active'));
        
        // Add active class to clicked button and corresponding category
        btn.classList.add('active');
        document.getElementById(`${categoryId}-projects`).classList.add('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Animation
const typed = new Typed('.typed', {
    strings: ['intelligent robots', 'ROS systems', 'AI solutions', 'automation tools'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
});