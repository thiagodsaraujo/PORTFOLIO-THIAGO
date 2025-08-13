
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
    mainImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop'
    ]
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
    mainImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop'
    ]
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
    mainImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop'
    ]
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
    mainImage: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop'
    ]
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
    mainImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1655635949322-0e97e4d79179?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1676299081847-c0326b3ac8b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1675557009276-d5bf27e11c3f?w=800&h=600&fit=crop'
    ]
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
    mainImage: 'https://images.unsplash.com/photo-1586267333474-6ca0ac833fb4?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586267333474-6ca0ac833fb4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1634224088880-42eb1d7633b9?w=800&h=600&fit=crop'
    ]
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

// Carousel functionality
let currentImageIndex = 0;

function nextImage(event) {
  event.stopPropagation();
  const images = document.querySelectorAll('.carousel-image');
  const indicators = document.querySelectorAll('.carousel-indicator');
  
  if (images.length === 0) return;
  
  images[currentImageIndex].classList.remove('active');
  indicators[currentImageIndex].classList.remove('active');
  
  currentImageIndex = (currentImageIndex + 1) % images.length;
  
  images[currentImageIndex].classList.add('active');
  indicators[currentImageIndex].classList.add('active');
}

function prevImage(event) {
  event.stopPropagation();
  const images = document.querySelectorAll('.carousel-image');
  const indicators = document.querySelectorAll('.carousel-indicator');
  
  if (images.length === 0) return;
  
  images[currentImageIndex].classList.remove('active');
  indicators[currentImageIndex].classList.remove('active');
  
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  
  images[currentImageIndex].classList.add('active');
  indicators[currentImageIndex].classList.add('active');
}

function goToImage(event, index) {
  event.stopPropagation();
  const images = document.querySelectorAll('.carousel-image');
  const indicators = document.querySelectorAll('.carousel-indicator');
  
  if (images.length === 0) return;
  
  images[currentImageIndex].classList.remove('active');
  indicators[currentImageIndex].classList.remove('active');
  
  currentImageIndex = index;
  
  images[currentImageIndex].classList.add('active');
  indicators[currentImageIndex].classList.add('active');
}

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
      <img src="${project.mainImage}" alt="${project.title}" class="project-main-image" />
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
  
  // Add click event to open project detail page
  card.addEventListener('click', () => {
    openProjectDetailPage(project);
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
  
  // Create complete modal structure
  modal.innerHTML = `
    <div class="modal-overlay" id="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close" id="modal-close">
        <i class="fas fa-times"></i>
      </button>
      <div class="modal-scroll-container">
        <div class="modal-header">
          <h2 class="modal-title">${project.title}</h2>
          <div class="modal-tech">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
          </div>
        </div>
        
        <div class="modal-body">
          <div class="modal-image-section">
            <div class="image-carousel">
              <div class="carousel-container">
                <button class="carousel-btn carousel-prev" onclick="prevImage(event)">
                  <i class="fas fa-chevron-left"></i>
                </button>
                <div class="carousel-images">
                  ${project.gallery.map((image, index) => `
                    <img src="${image}" alt="${project.title} - Screenshot ${index + 1}" 
                         class="carousel-image ${index === 0 ? 'active' : ''}" 
                         data-index="${index}" />
                  `).join('')}
                </div>
                <button class="carousel-btn carousel-next" onclick="nextImage(event)">
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
              <div class="carousel-indicators">
                ${project.gallery.map((_, index) => `
                  <button class="carousel-indicator ${index === 0 ? 'active' : ''}" 
                          onclick="goToImage(event, ${index})" data-index="${index}"></button>
                `).join('')}
              </div>
            </div>
          </div>
          
          <div class="modal-content-section">
            <div class="modal-description">
              ${project.fullDescription}
            </div>
            
            <div class="modal-info-grid">
              <div class="modal-section modal-features">
                <h3>Principais Funcionalidades</h3>
                <ul>
                  ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
              </div>
              
              <div class="modal-section modal-challenge">
                <h3>Desafios Técnicos</h3>
                <p class="modal-challenge-text">${project.challenge}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="modal-actions">
          <a href="${project.demoUrl}" class="modal-link" target="_blank">
            <i class="fas fa-external-link-alt"></i>
            Ver Demo
          </a>
          <a href="${project.githubUrl}" class="modal-link" target="_blank">
            <i class="fab fa-github"></i>
            Código no GitHub
          </a>
        </div>
      </div>
    </div>
  `;
  
  // Setup event listeners
  const modalOverlay = modal.querySelector('#modal-overlay');
  const modalClose = modal.querySelector('#modal-close');
  
  modalOverlay.addEventListener('click', closeProjectModal);
  modalClose.addEventListener('click', closeProjectModal);
  
  // Initialize carousel
  currentImageIndex = 0;
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Project Detail Page Functions
function openProjectDetailPage(project) {
  const detailPage = document.getElementById('project-detail-page');
  const mainContent = document.querySelectorAll('section, nav, footer');
  
  // Hide main content
  mainContent.forEach(element => {
    element.style.display = 'none';
  });
  
  // Populate project detail page
  populateProjectDetailPage(project);
  
  // Show project detail page
  detailPage.classList.remove('hidden');
  
  // Update URL without page reload
  history.pushState({ projectId: project.id }, project.title, `#project-${project.id}`);
  
  // Setup back button
  setupBackButton();
}

function closeProjectDetailPage() {
  const detailPage = document.getElementById('project-detail-page');
  const mainContent = document.querySelectorAll('section, nav, footer');
  
  // Hide project detail page
  detailPage.classList.add('hidden');
  
  // Show main content
  setTimeout(() => {
    mainContent.forEach(element => {
      element.style.display = '';
    });
  }, 300);
  
  // Update URL
  history.pushState({}, 'João Dev - Portfolio', '/');
}

function populateProjectDetailPage(project) {
  // Update badge
  const badge = document.getElementById('project-badge');
  badge.textContent = project.technologies[0] || 'Full Stack';
  
  // Update title
  const title = document.getElementById('project-detail-title');
  title.textContent = project.title;
  
  // Update description
  const description = document.getElementById('project-detail-description');
  description.textContent = project.fullDescription;
  
  // Update action buttons
  const liveDemoBtn = document.getElementById('live-demo-btn');
  const viewCodeBtn = document.getElementById('view-code-btn');
  liveDemoBtn.href = project.demoUrl;
  viewCodeBtn.href = project.githubUrl;
  
  // Populate technologies
  populateTechStack(project.technologies);
  
  // Populate features
  populateKeyFeatures(project.features);
  
  // Populate challenges
  populateChallenges(project);
  
  // Populate gallery
  populateGallery(project.gallery, project.title);
}

function populateTechStack(technologies) {
  const techStackGrid = document.getElementById('project-tech-stack');
  techStackGrid.innerHTML = '';
  
  technologies.forEach(tech => {
    const techItem = document.createElement('div');
    techItem.className = 'tech-stack-item';
    techItem.innerHTML = `
      <div class="tech-icon" style="background: var(--gradient-primary); width: 6px; height: 6px; border-radius: 50%;"></div>
      <span>${tech}</span>
    `;
    techStackGrid.appendChild(techItem);
  });
}

function populateKeyFeatures(features) {
  const featuresList = document.getElementById('project-key-features');
  featuresList.innerHTML = '';
  
  features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });
}

function populateChallenges(project) {
  const challengesList = document.getElementById('project-challenges');
  challengesList.innerHTML = '';
  
  // Create challenge items from the challenge text
  const challengeItems = [
    project.challenge,
    'Otimização de performance para alta concorrência',
    'Implementação de arquitetura escalável',
    'Integração com APIs de terceiros',
    'Garantir segurança e conformidade'
  ];
  
  challengeItems.forEach(challenge => {
    const li = document.createElement('li');
    li.textContent = challenge;
    challengesList.appendChild(li);
  });
}

function populateGallery(gallery, projectTitle) {
  const galleryGrid = document.getElementById('project-gallery-grid');
  galleryGrid.innerHTML = '';
  
  gallery.forEach((image, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
      <img src="${image}" alt="${projectTitle} - Screenshot ${index + 1}" loading="lazy" />
      <div class="gallery-item-overlay">
        <div class="gallery-item-title">${getImageTitle(index)}</div>
      </div>
    `;
    
    // Add click event to open image in fullscreen
    galleryItem.addEventListener('click', () => {
      openImageModal(image, `${projectTitle} - Screenshot ${index + 1}`);
    });
    
    galleryGrid.appendChild(galleryItem);
  });
}

function getImageTitle(index) {
  const titles = [
    'Homepage Principal',
    'Dashboard Admin',
    'Interface do Usuário',
    'Painel de Analytics'
  ];
  return titles[index] || `Screenshot ${index + 1}`;
}

function openImageModal(imageSrc, imageTitle) {
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    backdrop-filter: blur(20px);
    cursor: pointer;
  `;
  
  modal.innerHTML = `
    <div style="max-width: 90%; max-height: 90%; text-align: center;">
      <img src="${imageSrc}" alt="${imageTitle}" 
           style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 10px; box-shadow: var(--shadow-dark);" />
      <p style="color: var(--text-primary); margin-top: 20px; font-size: 1.1rem;">${imageTitle}</p>
    </div>
    <button style="
      position: absolute;
      top: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: rgba(0, 0, 0, 0.7);
      border: 1px solid var(--border-color);
      border-radius: 50%;
      color: var(--text-primary);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    " onmouseover="this.style.background='var(--secondary-color)'" onmouseout="this.style.background='rgba(0, 0, 0, 0.7)'">
      <i class="fas fa-times"></i>
    </button>
  `;
  
  modal.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  document.body.appendChild(modal);
}

function setupBackButton() {
  const backBtn = document.getElementById('back-to-projects');
  backBtn.addEventListener('click', closeProjectDetailPage);
}

// Handle browser back button
window.addEventListener('popstate', (event) => {
  if (event.state && event.state.projectId) {
    const project = projectsData.find(p => p.id === event.state.projectId);
    if (project) {
      openProjectDetailPage(project);
    }
  } else {
    closeProjectDetailPage();
  }
});

// Handle direct URL access to projects
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash.startsWith('#project-')) {
    const projectId = parseInt(hash.replace('#project-', ''));
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
      setTimeout(() => {
        openProjectDetailPage(project);
      }, 100);
    }
  }
});

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
