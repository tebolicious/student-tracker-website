// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        // Restore auto-close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Smooth scroll functionality
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

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Download button functionality
document.querySelectorAll('.download-btn, .btn-primary, .btn-light').forEach(button => {
    button.addEventListener('click', function (e) {
        if (this.classList.contains('download-btn') || 
            (this.textContent.includes('Download') && this.classList.contains('btn-light'))) {
            e.preventDefault();
            // Redirect to Google Play Store (you can update this URL)
            window.location.href = 'https://play.google.com/store/apps/details?id=za.co.studenttracker&hl=en';
            // Or show a modal/alert
            // alert('Redirecting to Google Play Store...');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards, objective cards, and client cards
document.querySelectorAll('.feature-card, .objective-card, .client-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add active state to navigation links
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Contact form handling (if needed in future)
function setupContactForm() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    setupMobileMenu();
    setupContactForm();
    console.log('Student Tracker website loaded');
    // Logo click: scroll to top
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Scroll-to-top button behavior
(function () {
    const SCROLL_SHOW_PX = 300;
    const scrollBtn = document.getElementById('scrollTopBtn');

    function toggleScrollBtn() {
        if (!scrollBtn) return;
        if (window.scrollY > SCROLL_SHOW_PX) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }

    if (scrollBtn) {
        // Show/hide on scroll (throttled)
        window.addEventListener('scroll', throttle(toggleScrollBtn, 150));

        // Click to scroll to top
        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Initial check in case page is loaded scrolled
        toggleScrollBtn();
    }
})();

// Throttle scroll events for better performance
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add more interactivity as needed
console.log('Student Tracker - Enhancing Learner Performance');
