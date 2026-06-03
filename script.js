import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = ['home', 'tech-stack', 'resume', 'projects', 'contact'];

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-item');
const particlesContainer = document.getElementById('particles');
const typedRole = document.getElementById('typed-role');
const typingRoles = [
  'Backend Engineer',
  'AI Builder',
  'Product Builder',
  'Kitesurfer',
  'CrossFitter'
];

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupTypingAnimation();
  setupEmailCopy();
  setupProjectBadgeOverflow();
  setupParticles();
  setupScrollEffects();
  setupSectionReveals();
  setupMotionSystem();
});

function shouldReduceMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function setupMotionSystem() {
  if (shouldReduceMotion()) {
    document.body.classList.add('motion-reduced');
    return;
  }

  document.body.classList.add('motion-enabled');
  setupHeroMotion();
  setupSectionHeaderMotion();
  setupCapabilityMotion();
  setupTimelineMotion();
  setupProjectMotion();
  setupContactMotion();
}

function setupHeroMotion() {
  const hero = document.querySelector('.hero');
  if (!hero) {
    return;
  }

  gsap.fromTo('.hero-code-line',
    { y: -8 },
    { y: 0, duration: 0.8, ease: 'power3.out' }
  );

  gsap.to('.hero-bg', {
    backgroundPosition: '54% 50%',
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.7,
    },
  });
}

function setupSectionHeaderMotion() {
  gsap.utils.toArray('.compact-header').forEach(header => {
    const parts = [
      header.querySelector('.section-kicker'),
      header.querySelector('.section-title'),
      header.querySelector('.section-subtitle')
    ].filter(Boolean);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: 'top 84%',
        once: true,
      },
    });

    timeline
      .from(parts, {
        y: 18,
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.66,
        stagger: 0.08,
        ease: 'power3.out',
      })
      .to(header, {
        '--header-line-progress': '100%',
        duration: 0.72,
        ease: 'power3.out',
      }, '-=0.24');
  });
}

function setupCapabilityMotion() {
  gsap.utils.toArray('.capability-panel').forEach((card, index) => {
    gsap.fromTo(card,
      { y: 18, scale: 0.985, '--card-line-progress': '0%' },
      {
        y: 0,
        scale: 1,
        '--card-line-progress': '24%',
        duration: 0.75,
        delay: index * 0.04,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 84%',
          once: true,
        },
      }
    );
  });
}

function setupTimelineMotion() {
  gsap.utils.toArray('.timeline').forEach(timeline => {
    gsap.to(timeline, {
      '--timeline-progress': 1,
      ease: 'none',
      scrollTrigger: {
        trigger: timeline,
        start: 'top 82%',
        end: 'bottom 72%',
        scrub: 0.45,
      },
    });
  });

  gsap.utils.toArray('.timeline-item').forEach(item => {
    const marker = item.querySelector('.timeline-marker');
    const content = item.querySelector('.timeline-content');
    const targets = [marker, content].filter(Boolean);

    if (!targets.length) {
      return;
    }

    gsap.fromTo(targets,
      { y: 14, scale: 0.985 },
      {
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 86%',
          once: true,
          toggleClass: { targets: item, className: 'timeline-active' },
        },
      }
    );
  });
}

function setupProjectMotion() {
  gsap.utils.toArray('.simple-project-card').forEach(card => {
    const image = card.querySelector('.project-media img');

    if (image) {
      gsap.fromTo(image,
        { '--project-image-y': '-12px' },
        {
          '--project-image-y': '12px',
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );
    }

    gsap.fromTo(card,
      { y: 22, scale: 0.985, '--card-line-progress': '0%' },
      {
        y: 0,
        scale: 1,
        '--card-line-progress': '24%',
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 86%',
          once: true,
        },
      }
    );
  });
}

function setupContactMotion() {
  const contact = document.querySelector('.contact-simple');
  if (!contact) {
    return;
  }

  gsap.fromTo(contact,
    { y: 18, scale: 0.99, '--card-line-progress': '0%' },
    {
      y: 0,
      scale: 1,
      '--card-line-progress': '24%',
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contact,
        start: 'top 86%',
        once: true,
      },
    }
  );
}

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
    '.compact-header, .capability-panel, .resume-column-title, .timeline-item, .certification-item, .simple-project-card, .contact-simple'
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

  animatedElements.forEach((element, index) => {
    element.style.setProperty('--reveal-index', index % 6);
    observer.observe(element);
  });
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

function setupProjectBadgeOverflow() {
  const containers = document.querySelectorAll('.project-tech');
  if (!containers.length) {
    return;
  }

  const apply = () => {
    const maxVisible = window.matchMedia('(max-width: 768px)').matches ? 4 : 5;

    containers.forEach(container => {
      container.querySelector('.tech-badge-more')?.remove();
      const badges = Array.from(container.querySelectorAll('span'));
      badges.forEach(badge => badge.classList.remove('tech-badge-hidden'));

      let hiddenCount = 0;

      if (badges.length > maxVisible) {
        for (let index = maxVisible; index < badges.length; index++) {
          badges[index].classList.add('tech-badge-hidden');
          hiddenCount += 1;
        }
      }

      if (hiddenCount > 0) {
        const more = document.createElement('span');
        more.className = 'tech-badge-more';
        more.textContent = '+';
        more.setAttribute('aria-label', `${hiddenCount} more technologies`);
        container.appendChild(more);
      }
    });
  };

  apply();
  window.addEventListener('resize', apply);
}
