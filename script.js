
// Global variables
let currentSection = 0;
const sections = ['home', 'about', 'resume', 'tech-stack', 'projects', 'contact'];
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

// Projects data
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de e-commerce completa com sistema de pagamentos, gestão de estoque e analytics em tempo real.',
    fullDescription: 'Uma plataforma completa de e-commerce desenvolvida com as mais modernas tecnologias, oferecendo uma experiência de compra otimizada tanto para usuários quanto para administradores. O sistema inclui processamento de pagamentos seguro, gestão inteligente de inventário e dashboards analíticos em tempo real.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Docker'],
    features: [
      'Sistema de autenticação e autorização JWT',
      'Processamento de pagamentos com Stripe',
      'Gestão de inventário em tempo real',
      'Dashboard administrativo completo',
      'Sistema de reviews e avaliações',
      'Notificações push e email',
      'API RESTful documentada',
      'Deploy automatizado com CI/CD'
    ],
    challenge: 'O principal desafio foi implementar um sistema de pagamentos robusto que pudesse lidar com múltiplas moedas e métodos de pagamento, garantindo PCI compliance e uma experiência fluida para o usuário.',
    demoUrl: '#',
    githubUrl: '#',
    imageIcon: '🛒'
  },
  {
    id: 2,
    title: 'DeFi Dashboard',
    description: 'Dashboard para gerenciamento de ativos DeFi com integração Web3 e análise de portfólio em tempo real.',
    fullDescription: 'Uma aplicação Web3 avançada para monitoramento e gestão de portfólios DeFi. Conecta-se com múltiplas blockchains para fornecer uma visão unificada de todos os ativos digitais do usuário, com análises detalhadas de performance e yield farming.',
    technologies: ['Vue.js', 'Web3', 'Ethereum', 'TypeScript', 'Metamask', 'Moralis'],
    features: [
      'Conexão com múltiplas wallets (MetaMask, WalletConnect)',
      'Monitoramento de múltiplas blockchains',
      'Analytics de portfólio em tempo real',
      'Calculadora de yield farming',
      'Histórico de transações detalhado',
      'Alertas de preços personalizáveis',
      'Interface responsiva e intuitiva',
      'Integração com exchanges descentralizadas'
    ],
    challenge: 'Integrar dados de múltiplas blockchains e protocolos DeFi em uma interface unificada, mantendo a performance e lidando com a volatilidade dos dados em tempo real.',
    demoUrl: '#',
    githubUrl: '#',
    imageIcon: '📊'
  },
  {
    id: 3,
    title: 'FinTech API',
    description: 'API robusta para sistema financeiro com microserviços, processamento de pagamentos e compliance.',
    fullDescription: 'Uma API enterprise-grade desenvolvida para instituições financeiras, oferecendo serviços completos de processamento de pagamentos, gestão de contas e conformidade regulatória. Arquitetura de microserviços escalável com alta disponibilidade.',
    technologies: ['Node.js', 'Docker', 'Redis', 'PostgreSQL', 'Kubernetes', 'RabbitMQ'],
    features: [
      'Arquitetura de microserviços escalável',
      'Processamento de pagamentos PIX e TED',
      'Sistema de compliance automático',
      'API Rate limiting e throttling',
      'Monitoramento e logging avançado',
      'Autenticação OAuth 2.0',
      'Documentação OpenAPI completa',
      'Testes automatizados e CI/CD'
    ],
    challenge: 'Desenvolver uma arquitetura que pudesse processar milhares de transações por segundo mantendo conformidade com regulamentações bancárias brasileiras e internacionais.',
    demoUrl: '#',
    githubUrl: '#',
    imageIcon: '🏦'
  },
  {
    id: 4,
    title: 'Real-time Chat Application',
    description: 'Aplicação de chat em tempo real com suporte a múltiplas salas, compartilhamento de arquivos e videochamadas.',
    fullDescription: 'Uma plataforma completa de comunicação empresarial com chat em tempo real, videochamadas, compartilhamento de arquivos e integração com ferramentas de produtividade.',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC', 'AWS S3'],
    features: [
      'Chat em tempo real com Socket.io',
      'Videochamadas com WebRTC',
      'Compartilhamento de arquivos seguro',
      'Salas públicas e privadas',
      'Sistema de moderação',
      'Notificações push',
      'Interface responsiva',
      'Criptografia end-to-end'
    ],
    challenge: 'Implementar um sistema de videochamadas escalável que pudesse suportar múltiplos usuários simultaneamente mantendo baixa latência e alta qualidade.',
    demoUrl: '#',
    githubUrl: '#',
    imageIcon: '💬'
  },
  {
    id: 5,
    title: 'AI Content Generator',
    description: 'Plataforma de geração de conteúdo usando IA, com templates personalizáveis e integração com redes sociais.',
    fullDescription: 'Uma ferramenta avançada de marketing digital que utiliza inteligência artificial para gerar conteúdo otimizado para diferentes plataformas sociais, blogs e campanhas publicitárias.',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'React', 'PostgreSQL', 'Celery'],
    features: [
      'Geração de conteúdo com GPT-4',
      'Templates personalizáveis',
      'Análise de sentiment',
      'Agendamento de posts',
      'Integração com redes sociais',
      'Analytics de performance',
      'Editor de texto avançado',
      'Sistema de colaboração'
    ],
    challenge: 'Otimizar o uso da API do OpenAI para gerar conteúdo relevante e contextual, implementando um sistema de cache inteligente para reduzir custos.',
    demoUrl: '#',
    githubUrl: '#',
    imageIcon: '🤖'
  },
  {
    id: 6,
    title: 'Blockchain Voting System',
    description: 'Sistema de votação descentralizado usando blockchain para garantir transparência e segurança nas eleições.',
    fullDescription: 'Um sistema de votação revolucionário baseado em blockchain que garante total transparência, imutabilidade e verificabilidade dos votos, adequado para eleições governamentais e corporativas.',
    technologies: ['Solidity', 'Web3', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
    features: [
      'Smart contracts auditáveis',
      'Votação anônima e verificável',
      'Interface intuitiva para eleitores',
      'Dashboard para administradores',
      'Contagem automática de votos',
      'Armazenamento descentralizado (IPFS)',
      'Integração com carteiras digitais',
      'Auditoria em tempo real'
    ],
    challenge: 'Desenvolver smart contracts seguros que garantissem o anonimato dos votos enquanto permitiam verificabilidade pública, lidando com limitações de gas fees.',
    demoUrl: '#',
    githubUrl: '#',
    imageIcon: '🗳️'
  }
];

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
  setupProjects();
  setupProjectModal();
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
    '.tech-category, .project-card, .contact-info, .contact-form, .timeline-item, .certification-item'
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

// Projects functionality
function setupProjects() {
  renderProjects();
  setupProjectFilters();
}

function renderProjects(filter = 'all') {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;
  
  let filteredProjects = projectsData;
  
  if (filter !== 'all') {
    filteredProjects = projectsData.filter(project => 
      project.technologies.includes(filter)
    );
  }
  
  projectsGrid.innerHTML = '';
  
  filteredProjects.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
  
  // Add animation delay to cards
  const cards = projectsGrid.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.dataset.projectId = project.id;
  
  card.innerHTML = `
    <div class="project-image">
      <div class="project-image-icon">
        <span style="font-size: 4rem;">${project.imageIcon}</span>
      </div>
      <div class="project-overlay">
        <div class="project-links">
          <a href="${project.demoUrl}" class="project-link" target="_blank" onclick="event.stopPropagation()">
            <i class="fas fa-external-link-alt"></i>
          </a>
          <a href="${project.githubUrl}" class="project-link" target="_blank" onclick="event.stopPropagation()">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">
        ${project.technologies.slice(0, 3).map(tech => `<span>${tech}</span>`).join('')}
        ${project.technologies.length > 3 ? '<span class="tech-more">+' + (project.technologies.length - 3) + '</span>' : ''}
      </div>
    </div>
  `;
  
  // Add click event to open modal
  card.addEventListener('click', () => {
    openProjectModal(project);
  });
  
  return card;
}

function setupProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Filter projects
      const filter = button.dataset.filter;
      renderProjects(filter);
    });
  });
}

function setupProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  
  // Close modal events
  modalOverlay.addEventListener('click', closeProjectModal);
  modalClose.addEventListener('click', closeProjectModal);
  
  // Close modal on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalTech = document.getElementById('modal-tech');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalFeatures = document.getElementById('modal-features');
  const modalChallenge = document.getElementById('modal-challenge-text');
  const modalDemo = document.getElementById('modal-demo');
  const modalGithub = document.getElementById('modal-github');
  
  // Populate modal content
  modalTitle.textContent = project.title;
  
  modalTech.innerHTML = project.technologies.map(tech => 
    `<span>${tech}</span>`
  ).join('');
  
  modalImage.innerHTML = `<span style="font-size: 6rem;">${project.imageIcon}</span>`;
  
  modalDescription.textContent = project.fullDescription;
  
  modalFeatures.innerHTML = project.features.map(feature => 
    `<li>${feature}</li>`
  ).join('');
  
  modalChallenge.textContent = project.challenge;
  
  modalDemo.href = project.demoUrl;
  modalGithub.href = project.githubUrl;
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Add additional styles for project image icon
const projectImageStyles = `
  .project-image-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  
  .tech-more {
    background: var(--accent-color) !important;
    color: var(--bg-primary) !important;
    border-color: var(--accent-color) !important;
  }
  
  .project-card {
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;
    transform: translateY(30px);
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const projectStyleSheet = document.createElement('style');
projectStyleSheet.textContent = projectImageStyles;
document.head.appendChild(projectStyleSheet);
