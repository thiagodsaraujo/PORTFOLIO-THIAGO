const sections = ['home', 'tech-stack', 'resume', 'projects', 'contact'];

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-item');
const particlesContainer = document.getElementById('particles');
const typedRole = document.getElementById('typed-role');
const typingRoles = [
  'Problem Solver',
  'Backend Developer',
  'Automation Specialist',
  'API Builder'
];

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupTypingAnimation();
  setupEmailCopy();
  setupParticles();
  setupScrollEffects();
  setupSectionReveals();
});

function setupNavigation() {
  const allNavLinks = [...navLinks, ...mobileNavLinks];

  allNavLinks.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');

      if (!href || !href.startsWith('#')) {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      updateActiveNavLink(href.slice(1));
    });
  });
}

function setupParticles() {
  if (!particlesContainer) {
    return;
  }

  const particleCount = window.matchMedia('(max-width: 768px)').matches ? 12 : 22;

  for (let index = 0; index < particleCount; index++) {
    createParticle();
  }
}

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';

  const size = Math.random() * 3 + 1;
  const duration = Math.random() * 18 + 14;

  particle.style.cssText = `
    position: absolute;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    width: ${size}px;
    height: ${size}px;
    background: rgba(255, 255, 255, ${Math.random() * 0.25 + 0.12});
    border-radius: 50%;
    pointer-events: none;
    animation: float ${duration}s infinite linear;
    z-index: 0;
  `;

  particlesContainer.appendChild(particle);
}

function setupTypingAnimation() {
  if (!typedRole) {
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentRole = typingRoles[roleIndex];
    const nextText = currentRole.slice(0, charIndex);
    typedRole.textContent = nextText;

    if (!isDeleting && charIndex < currentRole.length) {
      charIndex += 1;
      setTimeout(type, 72);
      return;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, 1150);
      return;
    }

    if (isDeleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(type, 34);
      return;
    }

    isDeleting = false;
    roleIndex = (roleIndex + 1) % typingRoles.length;
    setTimeout(type, 220);
  };

  type();
}

function setupScrollEffects() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const mobileNav = document.getElementById('mobile-nav');

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollTop > 50);
    }

    if (mobileNav) {
      mobileNav.classList.toggle('scrolled', scrollTop > 50);
    }

    updateActiveSection();
  }, { passive: true });
}

function updateActiveSection() {
  const scrollPosition = window.scrollY + 220;

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (!section) {
      continue;
    }

    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      updateActiveNavLink(sectionId);
      break;
    }
  }
}

function updateActiveNavLink(activeSection) {
  [...navLinks, ...mobileNavLinks].forEach(link => {
    const href = link.getAttribute('href');
    const dataSection = link.getAttribute('data-section');
    const isActive = href === `#${activeSection}` || dataSection === activeSection;

    link.classList.toggle('active', isActive);
  });
}

function setupSectionReveals() {
  const animatedElements = document.querySelectorAll(
    '.capability-panel, .simple-project-card, .timeline-item, .certification-item, .contact-simple'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(element => observer.observe(element));
}

function setupEmailCopy() {
  const copyButton = document.querySelector('.copy-email-btn');
  if (!copyButton) {
    return;
  }

  copyButton.addEventListener('click', async () => {
    const email = copyButton.getAttribute('data-email');
    if (!email) {
      return;
    }

    let copied = false;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch {
        copied = false;
      }
    }

    if (!copied) {
      const helper = document.createElement('input');
      helper.value = email;
      document.body.appendChild(helper);
      helper.select();
      copied = document.execCommand('copy');
      document.body.removeChild(helper);
    }

    copyButton.classList.toggle('copied', copied);
    const label = copyButton.querySelector('span');
    const originalAria = copyButton.getAttribute('aria-label') || 'Copy email';
    copyButton.setAttribute('aria-label', copied ? 'Email copied' : 'Failed to copy email');
    if (label) {
      const original = label.textContent;
      label.textContent = copied ? 'Copied' : 'Failed';
      setTimeout(() => {
        label.textContent = original;
        copyButton.classList.remove('copied');
        copyButton.setAttribute('aria-label', originalAria);
      }, 1600);
      return;
    }

    setTimeout(() => {
      copyButton.classList.remove('copied');
      copyButton.setAttribute('aria-label', originalAria);
    }, 1600);
  });
}
