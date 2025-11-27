// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project card toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectCards.length === 0) {
        console.warn('No project cards found');
        return;
    }
    
    projectCards.forEach((card, index) => {
        const toggle = card.querySelector('.project-toggle');
        const projectInfo = card.querySelector('.project-info');
        
        if (!toggle) {
            console.warn(`Toggle button not found for card ${index}`);
            return;
        }
        
        // Click toggle button
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            card.classList.toggle('active');
            console.log(`Card ${index} toggled:`, card.classList.contains('active'));
        });
        
        // Click anywhere in project info section
        if (projectInfo) {
            projectInfo.addEventListener('click', (e) => {
                e.preventDefault();
                card.classList.toggle('active');
            });
        }
    });
    
    console.log(`Initialized ${projectCards.length} project cards`);
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.research-card, .publication-item, .highlight-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Console message
console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #1a1a2e;');
console.log('%cThanks for checking out my website. Feel free to reach out!', 'font-size: 14px; color: #636e72;');
