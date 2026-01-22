// ==================== Mobile Menu Toggle ==================== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideNav = navMenu.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);
    
    if (!isClickInsideNav && !isClickOnHamburger) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== Navbar Scroll Effect ==================== 
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== Smooth Scroll for Anchor Links ==================== 
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

// ==================== Intersection Observer untuk Animations ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements that need animation
document.querySelectorAll('.project-card, .skill-category, .timeline-item, .contact-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ==================== Contact Form Handling ==================== 
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Create mailto link
        const mailtoLink = `mailto:your.email@gmail.com?subject=Pesan dari ${encodeURIComponent(name)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`;
        
        // Redirect to mailto
        window.location.href = mailtoLink;
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        showNotification('Terima kasih! Email client Anda akan terbuka.', 'success');
    });
}

// ==================== Notification System ==================== 
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            ${message}
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 2000;
        animation: slideIn 0.3s ease forwards;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== Scroll Progress Bar ==================== 
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #6366f1 0%, #ec4899 100%);
    z-index: 999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

// ==================== Add animation styles ==================== 
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in {
        opacity: 0;
        animation: fadeInUp 0.6s ease forwards;
    }

    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }

    .project-card {
        animation-delay: 0.1s;
    }

    .project-card:nth-child(2) {
        animation-delay: 0.2s;
    }

    .project-card:nth-child(3) {
        animation-delay: 0.3s;
    }

    .skill-category {
        animation-delay: 0.1s;
    }

    .skill-category:nth-child(2) {
        animation-delay: 0.2s;
    }

    .skill-category:nth-child(3) {
        animation-delay: 0.3s;
    }

    @media (max-width: 480px) {
        @keyframes slideIn {
            from {
                transform: translateX(300px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(300px);
                opacity: 0;
            }
        }
    }
`;
document.head.appendChild(style);

// ==================== Parallax Effect ==================== 
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

function updateParallax() {
    const scrolled = window.pageYOffset;
    const elements = document.querySelectorAll('.hero::before, .hero::after');
    
    elements.forEach((el, index) => {
        if (index === 0) {
            el.style.transform = `translateY(${scrolled * 0.5}px)`;
        } else {
            el.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
    
    ticking = false;
}

// ==================== Active Nav Link ==================== 
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== Lazy Loading Images ==================== 
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== Copy to Clipboard ==================== 
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!', 'success');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showNotification('Copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Failed to copy', 'error');
    }
    document.body.removeChild(textArea);
}

// ==================== Add Active Class to Nav Link in CSS ==================== 
const style2 = document.createElement('style');
style2.textContent = `
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style2);

// ==================== Keyboard Navigation ==================== 
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== Console Welcome Message ==================== 
console.log(`
╔═══════════════════════════════════════════════════════╗
║      Welcome to My Personal Portfolio Website        ║
║         Built with HTML, CSS & JavaScript            ║
║                                                       ║
║  Made with ❤️ by a Full Stack Engineer              ║
║                                                       ║
║  GitHub: https://github.com/yourusername            ║
║  LinkedIn: https://linkedin.com/in/yourusername     ║
║  Email: your.email@gmail.com                         ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
`);

// ==================== Initialize ==================== 
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    
    // Add any additional initialization code here
});
