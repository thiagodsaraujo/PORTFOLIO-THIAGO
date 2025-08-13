
// Global variables
let currentSection = 0;
const sections = ['home', 'about', 'tech-stack', 'projects', 'contact'];
const typeTexts = [
  'Software Engineer',
  'Full Stack Developer', 
  'Tech Innovator',
  'Problem Solver',
  'Code Architect'
];
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const typedElement = document.getElementById('typed-text');
const particlesContainer = document.getElementById('particles');
const contactForm = document.getElementById('contact-form');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupTypingAnimation();
  setupParticles();
  setupScrollEffects();
  setupContactForm();
  setupAnimations();
}

// Navigation functionality
function setupNavigation() {
  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Close mobile menu
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      
      // Update active link
      updateActiveNavLink(targetId);
    });
  });
}

function updateActiveNavLink(activeSection) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${activeSection}`) {
      link.classList.add('active');
    }
  });
}

// Typing animation
function setupTypingAnimation() {
  if (!typedElement) return;
  
  function typeEffect() {
    const currentText = typeTexts[typeIndex];
    
    if (isDeleting) {
      typedElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 100 : 150;
    
    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typeIndex = (typeIndex + 1) % typeTexts.length;
      typeSpeed = 500; // Pause before next word
    }
    
    setTimeout(typeEffect, typeSpeed);
  }
  
  typeEffect();
}

// Particles animation
function setupParticles() {
  if (!particlesContainer) return;
  
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }
}

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Random position
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  
  // Random size
  const size = Math.random() * 4 + 1;
  
  // Random animation duration
  const duration = Math.random() * 20 + 10;
  
  particle.style.cssText = `
    position: absolute;
    left: ${x}px;
    top: ${y}px;
    width: ${size}px;
    height: ${size}px;
    background: rgba(0, 245, 255, ${Math.random() * 0.5 + 0.2});
    border-radius: 50%;
    pointer-events: none;
    animation: float ${duration}s infinite linear;
  `;
  
  particlesContainer.appendChild(particle);
  
  // Remove particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
      createParticle(); // Create new particle
    }
  }, duration * 1000);
}

// Add CSS for particle animation
const particleStyles = `
  @keyframes float {
    0% {
      transform: translateY(100vh) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) rotate(360deg);
      opacity: 0;
    }
  }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = particleStyles;
document.head.appendChild(styleSheet);

// Scroll effects
function setupScrollEffects() {
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Navbar background change
    if (scrollTop > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Update active section
    updateActiveSection();
    
    // Parallax effect for backgrounds
    const parallaxElements = document.querySelectorAll('.hero-bg, .tech-bg, .contact-bg');
    parallaxElements.forEach(element => {
      const speed = 0.5;
      const yPos = -(scrollTop * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
    
    lastScrollTop = scrollTop;
  });
}

function updateActiveSection() {
  const scrollPosition = window.scrollY + 200;
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        updateActiveNavLink(sectionId);
      }
    }
  });
}

// Contact form
function setupContactForm() {
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send this data to your backend
    console.log('Form data:', data);
  });
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? 'var(--primary-color)' : 'var(--secondary-color)'};
    color: var(--bg-primary);
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: var(--shadow-dark);
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    font-weight: 500;
    max-width: 300px;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Animate out and remove
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

// Animation on scroll
function setupAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    '.tech-category, .project-card, .contact-info, .contact-form'
  );
  
  animateElements.forEach(element => {
    element.style.cssText += `
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    `;
    observer.observe(element);
  });
  
  // Add animation styles
  const animationStyles = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  
  const animationStyleSheet = document.createElement('style');
  animationStyleSheet.textContent = animationStyles;
  document.head.appendChild(animationStyleSheet);
}

// Smooth scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  border: none;
  border-radius: 50%;
  color: var(--bg-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: var(--shadow-dark);
  transform: translateY(100px);
  transition: all 0.3s ease;
  z-index: 1000;
`;

scrollTopBtn.addEventListener('click', scrollToTop);
document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.transform = 'translateY(0)';
  } else {
    scrollTopBtn.style.transform = 'translateY(100px)';
  }
});

// Preloader (optional)
window.addEventListener('load', () => {
  const preloader = document.createElement('div');
  preloader.className = 'preloader';
  preloader.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    transition: opacity 0.5s ease;
  `;
  
  preloader.innerHTML = `
    <div style="
      width: 50px;
      height: 50px;
      border: 3px solid var(--border-color);
      border-top: 3px solid var(--primary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    "></div>
  `;
  
  // Add spinner animation
  const spinnerStyles = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  
  const spinnerStyleSheet = document.createElement('style');
  spinnerStyleSheet.textContent = spinnerStyles;
  document.head.appendChild(spinnerStyleSheet);
  
  document.body.appendChild(preloader);
  
  // Hide preloader after a short delay
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
      if (preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }, 500);
  }, 1000);
});

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
  updateActiveSection();
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// Handle resize events
window.addEventListener('resize', debounce(() => {
  // Reinitialize particles on resize
  if (particlesContainer) {
    particlesContainer.innerHTML = '';
    setupParticles();
  }
}, 250));
