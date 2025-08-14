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
    fullDescription: 'Uma plataforma completa de e-commerce desenvolvida com React, Node.js e MongoDB. O sistema inclui um painel administrativo robusto, integração com gateways de pagamento, sistema de inventário em tempo real, e analytics detalhados. A plataforma suporta múltiplos vendedores e inclui recursos avançados como recomendações por IA e chat ao vivo.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io', 'AWS'],
    badge: 'Full Stack',
    year: '2023',
    features: [
      'Sistema de autenticação e autorização completo',
      'Painel administrativo com dashboard de vendas',
      'Integração com múltiplos gateways de pagamento',
      'Sistema de inventário em tempo real',
      'Recomendações personalizadas com machine learning',
      'Chat ao vivo entre vendedores e clientes',
      'Sistema de avaliações e comentários',
      'Relatórios e analytics detalhados'
    ],
    challenges: [
      'Implementação de um sistema de pagamentos seguro e escalável',
      'Sincronização do inventário em tempo real entre múltiplos vendedores',
      'Otimização de performance para lidar com alto volume de transações',
      'Desenvolvimento de algoritmo de recomendações personalizadas',
      'Implementação de sistema de cache distribuído com Redis'
    ],
    demoUrl: '#',
    githubUrl: '#',
    mainImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'DeFi Dashboard',
    description: 'Dashboard para gerenciamento de ativos DeFi com integração Web3 e análise de portfólio em tempo real.',
    fullDescription: 'Uma aplicação Web3 avançada para monitoramento e gestão de portfólios DeFi. Conecta-se com múltiplas blockchains para fornecer uma visão unificada de todos os ativos digitais do usuário, com análises detalhadas de performance e yield farming.',
    technologies: ['Vue.js', 'Web3', 'Ethereum', 'TypeScript', 'Metamask', 'Moralis'],
    badge: 'Web3',
    year: '2023',
    features: [
      'Conexão com múltiplas wallets (MetaMask, WalletConnect)',
      'Monitoramento de múltiplas blockchains simultaneamente',
      'Analytics de portfólio em tempo real',
      'Calculadora de yield farming e staking rewards',
      'Histórico detalhado de todas as transações',
      'Alertas personalizáveis de preços e mudanças',
      'Interface responsiva e intuitiva',
      'Integração com principais protocolos DeFi'
    ],
    challenges: [
      'Integração de dados de múltiplas blockchains em uma interface unificada',
      'Otimização de chamadas para APIs de blockchain para reduzir custos',
      'Implementação de sistema de cache para dados voláteis',
      'Desenvolvimento de algoritmos de cálculo de APY em tempo real',
      'Criação de sistema de notificações push para alertas de preço'
    ],
    demoUrl: '#',
    githubUrl: '#',
    mainImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'FinTech API',
    description: 'API robusta para sistema financeiro com microserviços, processamento de pagamentos e compliance.',
    fullDescription: 'Uma API enterprise-grade desenvolvida para instituições financeiras, oferecendo serviços completos de processamento de pagamentos, gestão de contas e conformidade regulatória. Arquitetura de microserviços escalável com alta disponibilidade.',
    technologies: ['Node.js', 'Docker', 'Redis', 'PostgreSQL', 'Kubernetes', 'RabbitMQ'],
    badge: 'Backend',
    year: '2023',
    features: [
      'Arquitetura de microserviços altamente escalável',
      'Processamento de pagamentos PIX, TED e boletos',
      'Sistema de compliance automático para regulamentações',
      'API Rate limiting e throttling inteligente',
      'Monitoramento e logging distribuído',
      'Autenticação OAuth 2.0 e JWT',
      'Documentação interativa com OpenAPI',
      'Testes automatizados e pipeline CI/CD'
    ],
    challenges: [
      'Desenvolvimento de arquitetura que processe milhares de transações por segundo',
      'Implementação de conformidade com regulamentações bancárias',
      'Criação de sistema de monitoramento distribuído',
      'Otimização de performance para operações críticas',
      'Implementação de sistema de recuperação de desastres'
    ],
    demoUrl: '#',
    githubUrl: '#',
    mainImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 4,
    title: 'Real-time Chat Application',
    description: 'Aplicação de chat em tempo real com suporte a múltiplas salas, compartilhamento de arquivos e videochamadas.',
    fullDescription: 'Uma plataforma completa de comunicação empresarial com chat em tempo real, videochamadas, compartilhamento de arquivos e integração com ferramentas de produtividade.',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC', 'AWS S3'],
    badge: 'Full Stack',
    year: '2022',
    features: [
      'Chat em tempo real com Socket.io',
      'Videochamadas em grupo com WebRTC',
      'Compartilhamento seguro de arquivos',
      'Salas públicas e privadas com moderação',
      'Sistema de moderação automática',
      'Notificações push em tempo real',
      'Interface responsiva multiplataforma',
      'Criptografia end-to-end para mensagens'
    ],
    challenges: [
      'Implementação de videochamadas escaláveis para múltiplos usuários',
      'Otimização de latência para chat em tempo real',
      'Desenvolvimento de sistema de moderação automática',
      'Criação de sistema de backup e sincronização',
      'Implementação de criptografia end-to-end'
    ],
    demoUrl: '#',
    githubUrl: '#',
    mainImage: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop'
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

// Translation data
const translations = {
  pt: {
    // Navigation
    home: 'Home',
    about: 'Sobre',
    resume: 'Resumé',
    techStack: 'Tech Stack',
    projects: 'Projetos',
    contact: 'Contato',

    // Hero section
    heroSubtitle: ['Software Engineer', 'Full Stack Developer', 'Inovador em Tech', 'Solucionador de Problemas', 'Arquiteto de Código'],
    location: 'Brasil 🇧🇷',
    locationCity: 'São Paulo, SP',
    curriculum: 'Currículo',
    getInTouch: 'Entrar em contato',

    // About section
    aboutTitle: 'Sobre Mim',
    aboutQuote: 'Desenvolvo aplicações web seguras end-to-end.<br>Especializado nos setores de e-commerce, financeiro, bancário e fintech.',

    // Resume section
    resumeTitle: 'Meu Resumé',
    experienceTitle: 'Experiências',
    educationTitle: 'Educação',
    certificationsTitle: 'Certificações',

    // Tech Stack
    techStackTitle: 'Meu Tech Stack',
    frontend: 'Frontend',
    backendDatabases: 'Backend & Databases',
    cloudDevops: 'Cloud & DevOps',
    otherTech: 'Outras Tecnologias',

    // Projects
    projectsTitle: 'Meus Projetos',
    projectsSubtitle: 'Alguns dos projetos que desenvolvi com tecnologias modernas',
    projectsCta: 'Interessado em ver mais projetos ou discutir uma colaboração?',

    // Contact
    contactTitle: 'Vamos Conversar',
    contactSubtitle: 'Transforme sua ideia em realidade. Entre em contato e vamos construir algo incrível juntos.',
    email: 'Email',
    phone: 'Telefone',
    location: 'Localização',
    meeting: 'Reunião',
    sendMessage: 'Envie sua mensagem',
    sendMessageDesc: 'Preencha o formulário abaixo e entrarei em contato em até 24 horas.',

    // Form labels
    fullName: 'Nome completo',
    fullNamePlaceholder: 'Como você se chama?',
    emailLabel: 'Email',
    emailPlaceholder: 'seu.email@exemplo.com',
    company: 'Empresa (opcional)',
    companyPlaceholder: 'Nome da sua empresa',
    budget: 'Orçamento estimado',
    subject: 'Assunto',
    subjectPlaceholder: 'Sobre o que você gostaria de conversar?',
    message: 'Mensagem',
    messagePlaceholder: 'Descreva seu projeto, necessidades ou dúvidas. Quanto mais detalhes, melhor posso ajudar!',
    newsletter: 'Quero receber novidades sobre tecnologia e projetos',
    sendBtn: 'Enviar Mensagem',
    sending: 'Enviando...',

    // Social
    connectWith: 'Conecte-se comigo',

    // Footer
    footerLeft: '© 2024 João Dev. Todos os direitos reservados.',
    footerRight: 'Feito com ❤️ usando tecnologias modernas'
  },

  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    resume: 'Resume',
    techStack: 'Tech Stack',
    projects: 'Projects',
    contact: 'Contact',

    // Hero section
    heroSubtitle: ['Software Engineer', 'Full Stack Developer', 'Tech Innovator', 'Problem Solver', 'Code Architect'],
    location: 'United Kingdom 🇬🇧',
    locationCity: 'London, UK',
    curriculum: 'Resume',
    getInTouch: 'Get in Touch',

    // About section
    aboutTitle: 'About Me',
    aboutQuote: 'I develop secure end-to-end web applications.<br>Specialized in e-commerce, financial, banking and fintech sectors.',

    // Resume section
    resumeTitle: 'My Resume',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    certificationsTitle: 'Certifications',

    // Tech Stack
    techStackTitle: 'My Tech Stack',
    frontend: 'Frontend',
    backendDatabases: 'Backend & Databases',
    cloudDevops: 'Cloud & DevOps',
    otherTech: 'Other Technologies',

    // Projects
    projectsTitle: 'My Projects',
    projectsSubtitle: 'Some of the projects I\'ve developed with modern technologies',
    projectsCta: 'Interested in seeing more projects or discussing a collaboration?',

    // Contact
    contactTitle: 'Let\'s Talk',
    contactSubtitle: 'Turn your idea into reality. Get in touch and let\'s build something incredible together.',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    meeting: 'Meeting',
    sendMessage: 'Send your message',
    sendMessageDesc: 'Fill out the form below and I\'ll get back to you within 24 hours.',

    // Form labels
    fullName: 'Full name',
    fullNamePlaceholder: 'What\'s your name?',
    emailLabel: 'Email',
    emailPlaceholder: 'your.email@example.com',
    company: 'Company (optional)',
    companyPlaceholder: 'Your company name',
    budget: 'Estimated budget',
    subject: 'Subject',
    subjectPlaceholder: 'What would you like to talk about?',
    message: 'Message',
    messagePlaceholder: 'Describe your project, needs or questions. The more details, the better I can help!',
    newsletter: 'I want to receive tech and project updates',
    sendBtn: 'Send Message',
    sending: 'Sending...',

    // Social
    connectWith: 'Connect with me',

    // Footer
    footerLeft: '© 2024 João Dev. All rights reserved.',
    footerRight: 'Made with ❤️ using modern technologies'
  },

  es: {
    // Navigation
    home: 'Inicio',
    about: 'Acerca',
    resume: 'Currículum',
    techStack: 'Tech Stack',
    projects: 'Proyectos',
    contact: 'Contacto',

    // Hero section
    heroSubtitle: ['Ingeniero de Software', 'Desarrollador Full Stack', 'Innovador Tech', 'Solucionador de Problemas', 'Arquitecto de Código'],
    location: 'México 🇲🇽',
    locationCity: 'Ciudad de México, MX',
    curriculum: 'Currículum',
    getInTouch: 'Contactar',

    // About section
    aboutTitle: 'Acerca de Mí',
    aboutQuote: 'Desarrollo aplicaciones web seguras end-to-end.<br>Especializado en los sectores de e-commerce, financiero, bancario y fintech.',

    // Resume section
    resumeTitle: 'Mi Currículum',
    experienceTitle: 'Experiencia',
    educationTitle: 'Educación',
    certificationsTitle: 'Certificaciones',

    // Tech Stack
    techStackTitle: 'Mi Tech Stack',
    frontend: 'Frontend',
    backendDatabases: 'Backend y Bases de Datos',
    cloudDevops: 'Cloud y DevOps',
    otherTech: 'Otras Tecnologías',

    // Projects
    projectsTitle: 'Mis Proyectos',
    projectsSubtitle: 'Algunos de los proyectos que he desarrollado con tecnologías modernas',
    projectsCta: '¿Interesado en ver más proyectos o discutir una colaboración?',

    // Contact
    contactTitle: 'Hablemos',
    contactSubtitle: 'Convierte tu idea en realidad. Ponte en contacto y construyamos algo increíble juntos.',
    email: 'Email',
    phone: 'Teléfono',
    location: 'Ubicación',
    meeting: 'Reunión',
    sendMessage: 'Envía tu mensaje',
    sendMessageDesc: 'Completa el formulario a continuación y te responderé en 24 horas.',

    // Form labels
    fullName: 'Nombre completo',
    fullNamePlaceholder: '¿Cómo te llamas?',
    emailLabel: 'Email',
    emailPlaceholder: 'tu.email@ejemplo.com',
    company: 'Empresa (opcional)',
    companyPlaceholder: 'Nombre de tu empresa',
    budget: 'Presupuesto estimado',
    subject: 'Asunto',
    subjectPlaceholder: '¿De qué te gustaría hablar?',
    message: 'Mensaje',
    messagePlaceholder: 'Describe tu proyecto, necesidades o preguntas. ¡Cuantos más detalles, mejor puedo ayudar!',
    newsletter: 'Quiero recibir novedades sobre tecnología y proyectos',
    sendBtn: 'Enviar Mensaje',
    sending: 'Enviando...',

    // Social
    connectWith: 'Conéctate conmigo',

    // Footer
    footerLeft: '© 2024 João Dev. Todos los derechos reservados.',
    footerRight: 'Hecho con ❤️ usando tecnologías modernas'
  }
};

let currentLanguage = 'pt';

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupLanguageSelector();
  setupTypingAnimation();
  setupParticles();
  setupScrollEffects();
  setupContactForm();
  setupAnimations();
  setupProjects();
  setupProjectDetailPage();
}

// Navigation functionality
function setupNavigation() {
  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Skip if it's an external link or another page
      if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.endsWith('.html')) {
        return;
      }

      e.preventDefault();

      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      // Close mobile menu if open
      if (navMenu && hamburger) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      }

      // Update active link
      updateActiveNavLink(targetId);
    });
  });
}

// Language selector functionality
function setupLanguageSelector() {
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const langOptions = document.querySelectorAll('.lang-option');
  const currentLangSpan = document.getElementById('current-lang');

  if (!langBtn || !langDropdown) return;

  // Toggle dropdown
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
    langBtn.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    langDropdown.classList.remove('show');
    langBtn.classList.remove('active');
  });

  // Handle language selection
  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      const selectedLang = option.getAttribute('data-lang');

      if (selectedLang !== currentLanguage) {
        // Update active state
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Update current language display
        const optionLangText = option.querySelector('.lang-text');
        currentLangSpan.textContent = optionLangText.textContent;

        // Apply translation
        changeLanguage(selectedLang);
      }

      // Close dropdown
      langDropdown.classList.remove('show');
      langBtn.classList.remove('active');
    });
  });

  // Set initial active state
  const initialOption = document.querySelector(`[data-lang="${currentLanguage}"]`);
  if (initialOption) {
    initialOption.classList.add('active');

    // Set initial text
    const optionLangText = initialOption.querySelector('.lang-text');
    if (currentLangSpan && optionLangText) {
      currentLangSpan.textContent = optionLangText.textContent;
    }
  }
}

// Change language function
function changeLanguage(lang) {
  currentLanguage = lang;
  const t = translations[lang];

  // Update navigation
  updateElementText('[href="#home"]', t.home);
  updateElementText('[href="#about"]', t.about);
  updateElementText('[href="#resume"]', t.resume);
  updateElementText('[href="#tech-stack"]', t.techStack);
  updateElementText('[href="#projects"]', t.projects);
  updateElementText('[href="#contact"]', t.contact);

  // Update hero section
  const curriculumBtn = document.querySelector('.btn-primary span');
  if (curriculumBtn) curriculumBtn.textContent = t.curriculum;

  const contactBtn = document.querySelector('.btn-secondary span');
  if (contactBtn) contactBtn.textContent = t.getInTouch;

  const locationTitle = document.querySelector('.hero-location h4');
  if (locationTitle) locationTitle.textContent = t.location;

  const locationCity = document.querySelector('.hero-location span');
  if (locationCity) locationCity.textContent = t.locationCity;

  // Update section titles
  updateElementText('.about .section-title', t.aboutTitle);
  updateElementText('.resume .section-title', t.resumeTitle);
  updateElementText('.tech-stack .section-title', t.techStackTitle);
  updateElementText('.projects .section-title', `${t.projectsTitle.split(' ')[0]} <span class="highlight">${t.projectsTitle.split(' ')[1]}</span>`);
  updateElementText('.contact .section-title', `${t.contactTitle.split(' ')[0]} <span class="highlight">${t.contactTitle.split(' ')[1]}</span>`);

  // Update about quote
  const aboutQuote = document.querySelector('.quote p');
  if (aboutQuote) aboutQuote.innerHTML = t.aboutQuote;

  // Update resume column titles
  const experienceTitle = document.querySelector('.resume-column:first-child .resume-column-title');
  if (experienceTitle) {
    experienceTitle.innerHTML = `<i class="fas fa-briefcase"></i>${t.experienceTitle}`;
  }

  const educationTitle = document.querySelector('.resume-column:last-child .resume-column-title:first-of-type');
  if (educationTitle) {
    educationTitle.innerHTML = `<i class="fas fa-graduation-cap"></i>${t.educationTitle}`;
  }

  const certificationsTitle = document.querySelector('.resume-column:last-child .resume-column-title:last-of-type');
  if (certificationsTitle) {
    certificationsTitle.innerHTML = `<i class="fas fa-certificate"></i>${t.certificationsTitle}`;
  }

  // Update tech stack categories
  const techCategories = document.querySelectorAll('.tech-category h3');
  if (techCategories[0]) techCategories[0].textContent = t.frontend;
  if (techCategories[1]) techCategories[1].textContent = t.backendDatabases;
  if (techCategories[2]) techCategories[2].textContent = t.cloudDevops;
  if (techCategories[3]) techCategories[3].textContent = t.otherTech;

  // Update projects section
  const projectsSubtitle = document.querySelector('.projects .section-subtitle');
  if (projectsSubtitle) projectsSubtitle.textContent = t.projectsSubtitle;

  const projectsCtaText = document.querySelector('.projects-cta p');
  if (projectsCtaText) projectsCtaText.textContent = t.projectsCta;

  const projectsCtaBtn = document.querySelector('.projects-cta .btn span');
  if (projectsCtaBtn) projectsCtaBtn.textContent = t.getInTouch;

  // Update contact section
  const contactSubtitle = document.querySelector('.contact .section-subtitle');
  if (contactSubtitle) contactSubtitle.textContent = t.contactSubtitle;

  // Update contact cards
  const contactCards = document.querySelectorAll('.contact-card h3');
  if (contactCards[0]) contactCards[0].textContent = t.email;
  if (contactCards[1]) contactCards[1].textContent = t.phone;
  if (contactCards[2]) contactCards[2].textContent = t.location;
  if (contactCards[3]) contactCards[3].textContent = t.meeting;

  // Update form
  const formHeader = document.querySelector('.contact-form-header h3');
  if (formHeader) formHeader.textContent = t.sendMessage;

  const formDesc = document.querySelector('.contact-form-header p');
  if (formDesc) formDesc.textContent = t.sendMessageDesc;

  // Update form labels and placeholders
  updateFormField('name', t.fullName, t.fullNamePlaceholder);
  updateFormField('email', t.emailLabel, t.emailPlaceholder);
  updateFormField('company', t.company, t.companyPlaceholder);
  updateFormField('budget', t.budget, '');
  updateFormField('subject', t.subject, t.subjectPlaceholder);
  updateFormField('message', t.message, t.messagePlaceholder);

  const newsletterLabel = document.querySelector('label[for="newsletter"]');
  if (newsletterLabel) newsletterLabel.textContent = t.newsletter;

  const submitBtnText = document.querySelector('.btn-contact-submit .btn-content span');
  if (submitBtnText) submitBtnText.textContent = t.sendBtn;

  const loadingText = document.querySelector('.btn-contact-submit .btn-loading span');
  if (loadingText) loadingText.textContent = t.sending;

  // Update social section
  const socialTitle = document.querySelector('.contact-social h4');
  if (socialTitle) socialTitle.textContent = t.connectWith;

  // Update footer
  const footerLeft = document.querySelector('.footer-left p');
  if (footerLeft) footerLeft.textContent = t.footerLeft;

  const footerRight = document.querySelector('.footer-right p');
  if (footerRight) footerRight.innerHTML = t.footerRight;

  // Update typing animation texts
  typeTexts.length = 0;
  typeTexts.push(...t.heroSubtitle);

  // Save language preference
  localStorage.setItem('preferredLanguage', lang);
}

function updateElementText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = text;
  }
}

function updateFormField(fieldName, labelText, placeholderText) {
  const label = document.querySelector(`label[for="${fieldName}"]`);
  const input = document.querySelector(`#${fieldName}`);

  if (label) label.textContent = labelText;
  if (input && placeholderText) input.placeholder = placeholderText;
}

// Load saved language preference
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && savedLang !== currentLanguage) {
    currentLanguage = savedLang;

    // Update language display
    const langBtn = document.getElementById('lang-btn');
    const currentLangSpan = document.getElementById('current-lang');
    const savedOption = document.querySelector(`[data-lang="${savedLang}"]`);

    if (langBtn && savedOption) {
      const flagIcon = langBtn.querySelector('.flag-icon');
      const optionFlagIcon = savedOption.querySelector('.flag-icon');
      const optionLangText = savedOption.querySelector('.lang-text');

      if (flagIcon && optionFlagIcon) {
        flagIcon.textContent = optionFlagIcon.textContent;
      }
      if (currentLangSpan && optionLangText) {
        currentLangSpan.textContent = optionLangText.textContent;
      }
    }

    changeLanguage(savedLang);
  }
});

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
    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
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

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.btn-contact-submit');
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Add loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Success
      showNotification('✨ Mensagem enviada com sucesso! Entrarei em contato em até 24 horas.', 'success');
      contactForm.reset();

      // Add success animation to form
      const formContainer = document.querySelector('.contact-form-container');
      formContainer.style.transform = 'scale(0.98)';
      setTimeout(() => {
        formContainer.style.transform = 'scale(1)';
      }, 150);

    } catch (error) {
      showNotification('❌ Ops! Algo deu errado. Tente novamente ou entre em contato por email.', 'error');
    } finally {
      // Remove loading state
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }

    // In a real application, you would send this data to your backend
    console.log('Form data:', data);
  });

  // Add form validation feedback
  const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearFieldError);
  });
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();

  // Remove existing error
  clearFieldError(e);

  if (!value) {
    showFieldError(field, 'Este campo é obrigatório');
    return false;
  }

  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, 'Digite um email válido');
      return false;
    }
  }

  return true;
}

function showFieldError(field, message) {
  field.style.borderColor = 'var(--secondary-color)';
  field.style.boxShadow = '0 0 0 4px rgba(255, 107, 53, 0.1)';

  // Create or update error message
  let errorMsg = field.parentNode.querySelector('.field-error');
  if (!errorMsg) {
    errorMsg = document.createElement('span');
    errorMsg.className = 'field-error';
    errorMsg.style.cssText = `
      color: var(--secondary-color);
      font-size: 0.85rem;
      margin-top: 5px;
      display: block;
    `;
    field.parentNode.appendChild(errorMsg);
  }
  errorMsg.textContent = message;
}

function clearFieldError(e) {
  const field = e.target;
  field.style.borderColor = '';
  field.style.boxShadow = '';

  const errorMsg = field.parentNode.querySelector('.field-error');
  if (errorMsg) {
    errorMsg.remove();
  }
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

// Projects functionality
function setupProjects() {
  // Add click handlers to project cards
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      // Prevent opening modal if clicking on links or carousel controls
      if (e.target.closest('.project-link') || 
          e.target.closest('.carousel-btn') || 
          e.target.closest('.indicator')) {
        return;
      }

      // Get project data based on index
      const project = projectsData[index];
      if (project) {
        openProjectModal(project);
      }
    });

    // Add cursor pointer
    card.style.cursor = 'pointer';
  });

  // Setup carousels
  setupProjectCarousels();

  // Setup project filters
  setupProjectFilters();

  console.log('Projects section initialized with modal functionality');
}

// Project Filter functionality
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      // Filter projects
      filterProjects(filterValue, projectCards);
    });
  });
}

function filterProjects(filterValue, projectCards) {
  // First, hide all cards that don't match
  const cardsToHide = [];
  const cardsToShow = [];
  
  projectCards.forEach((card) => {
    const cardTags = card.getAttribute('data-tags');
    
    if (filterValue === 'all') {
      cardsToShow.push(card);
    } else {
      if (cardTags && cardTags.includes(filterValue)) {
        cardsToShow.push(card);
      } else {
        cardsToHide.push(card);
      }
    }
  });
  
  // Hide cards with animation
  cardsToHide.forEach((card, index) => {
    setTimeout(() => {
      hideProject(card);
    }, index * 50);
  });
  
  // Show cards with staggered animation after hiding is complete
  setTimeout(() => {
    cardsToShow.forEach((card, index) => {
      setTimeout(() => {
        showProject(card, index);
      }, index * 100);
    });
  }, cardsToHide.length * 50 + 200);
}

function showProject(card, index) {
  card.classList.remove('filtering-out', 'hidden');
  card.classList.add('filtering-in');
  card.style.visibility = 'visible';
  card.style.pointerEvents = 'auto';
  
  // Remove animation class after animation completes
  setTimeout(() => {
    card.classList.remove('filtering-in');
  }, 600);
}

function hideProject(card) {
  card.classList.remove('filtering-in');
  card.classList.add('filtering-out');
  
  // Hide completely after animation
  setTimeout(() => {
    card.classList.add('hidden');
    card.style.visibility = 'hidden';
    card.style.pointerEvents = 'none';
  }, 500);
}

// Project Carousel functionality
function setupProjectCarousels() {
  const carousels = document.querySelectorAll('.project-carousel');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const images = carousel.querySelectorAll('.carousel-image');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const indicators = carousel.querySelectorAll('.indicator');
    let currentIndex = 0;
    let intervalId = null;

    // Auto-slide functionality
    function startAutoSlide() {
      intervalId = setInterval(() => {
        nextSlide();
      }, 4000);
    }

    function stopAutoSlide() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    function showSlide(index) {
      // Remove active classes
      images.forEach(img => {
        img.classList.remove('active', 'prev');
      });
      indicators.forEach(indicator => {
        indicator.classList.remove('active');
      });

      // Add active class to current slide
      images[index].classList.add('active');
      indicators[index].classList.add('active');

      // Add prev class to previous slide for animation
      const prevIndex = currentIndex;
      if (prevIndex !== index) {
        images[prevIndex].classList.add('prev');
      }

      currentIndex = index;
    }

    function nextSlide() {
      const nextIndex = (currentIndex + 1) % images.length;
      showSlide(nextIndex);
    }

    function prevSlide() {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      showSlide(prevIndex);
    }

    // Event listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 6000); // Restart auto-slide after user interaction
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 6000);
      });
    }

    // Indicator clicks
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(index);
        stopAutoSlide();
        setTimeout(startAutoSlide, 6000);
      });
    });

    // Pause auto-slide on hover
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;

    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      stopAutoSlide();
    });

    carousel.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          nextSlide(); // Swipe left - next slide
        } else {
          prevSlide(); // Swipe right - previous slide
        }
      }

      setTimeout(startAutoSlide, 6000);
    });

    // Keyboard navigation
    carousel.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          stopAutoSlide();
          setTimeout(startAutoSlide, 6000);
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextSlide();
          stopAutoSlide();
          setTimeout(startAutoSlide, 6000);
          break;
      }
    });

    // Make carousel focusable for keyboard navigation
    carousel.setAttribute('tabindex', '0');

    // Start auto-slide
    startAutoSlide();
  });
}

// Project Detail Page Functions
function setupProjectDetailPage() {
  const backBtn = document.getElementById('back-to-projects');
  if (backBtn) {
    backBtn.addEventListener('click', closeProjectDetailPage);
  }

  // Handle browser back button
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.projectId) {
      const project = projectsData.find(p => p.id === event.state.projectId);
      if (project) {
        openProjectDetailPage(project, false);
      }
    } else {
      closeProjectDetailPage();
    }
  });

  // Handle direct URL access to projects
  const hash = window.location.hash;
  if (hash.startsWith('#project-')) {
    const projectId = parseInt(hash.replace('#project-', ''));
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
      setTimeout(() => {
        openProjectDetailPage(project, false);
      }, 100);
    }
  }
}

function openProjectDetailPage(project, updateHistory = true) {
  const detailPage = document.getElementById('project-detail-page');
  const mainContent = document.querySelectorAll('section, nav:not(.project-detail-nav), footer:not(.project-detail-footer)');

  // Hide main content
  mainContent.forEach(element => {
    element.style.display = 'none';
  });

  // Populate project detail page
  populateProjectDetailPage(project);

  // Show project detail page
  detailPage.classList.remove('hidden');

  // Update URL
  if (updateHistory) {
    history.pushState({ projectId: project.id }, project.title, `#project-${project.id}`);
  }
}

function closeProjectDetailPage() {
  const detailPage = document.getElementById('project-detail-page');
  const mainContent = document.querySelectorAll('section, nav:not(.project-detail-nav), footer:not(.project-detail-footer)');

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
  const badge = document.getElementById('project-detail-badge');
  if (badge) badge.textContent = project.badge;

  // Update year
  const year = document.getElementById('project-detail-year');
  if (year) year.textContent = project.year;

  // Update title
  const title = document.getElementById('project-detail-title');
  if (title) title.textContent = project.title;

  // Update description
  const description = document.getElementById('project-detail-description');
  if (description) description.textContent = project.fullDescription;

  // Update action buttons
  const liveDemoBtn = document.getElementById('live-demo-btn');
  const viewCodeBtn = document.getElementById('view-code-btn');
  if (liveDemoBtn) liveDemoBtn.href = project.demoUrl;
  if (viewCodeBtn) viewCodeBtn.href = project.githubUrl;

  // Populate technologies
  populateTechBadges(project.technologies);

  // Populate features
  populateKeyFeatures(project.features);

  // Populate challenges
  populateChallenges(project.challenges);

  // Populate gallery
  populateGallery(project.gallery, project.title);
}

function populateTechBadges(technologies) {
  const techBadges = document.getElementById('project-tech-badges');
  if (!techBadges) return;

  techBadges.innerHTML = '';

  technologies.forEach(tech => {
    const badge = document.createElement('div');
    badge.className = 'tech-badge';
    badge.textContent = tech;
    techBadges.appendChild(badge);
  });
}

function populateKeyFeatures(features) {
  const featuresList = document.getElementById('project-key-features');
  if (!featuresList) return;

  featuresList.innerHTML = '';

  features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });
}

function populateChallenges(challenges) {
  const challengesList = document.getElementById('project-challenges');
  if (!challengesList) return;

  challengesList.innerHTML = '';

  challenges.forEach(challenge => {
    const li = document.createElement('li');
    li.textContent = challenge;
    challengesList.appendChild(li);
  });
}

function populateGallery(gallery, projectTitle) {
  const galleryGrid = document.getElementById('project-gallery-grid');
  if (!galleryGrid) return;

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
    'Carrinho de compras e checkout',
    'Interface do usuário',
    'Painel de controle'
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

// Project Modal Functions
function openProjectModal(project) {
  const modal = createProjectModal(project);
  document.body.appendChild(modal);

  // Animate modal in
  setTimeout(() => {
    modal.classList.add('modal-show');
  }, 10);

  // Disable body scroll
  document.body.style.overflow = 'hidden';
}

function createProjectModal(project) {
  const modal = document.createElement('div');
  modal.className = 'project-modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-container">
      <button class="modal-close" aria-label="Fechar modal">
        <i class="fas fa-times"></i>
      </button>

      <div class="modal-header">
        <div class="modal-badge">${project.badge}</div>
        <div class="modal-year">${project.year}</div>
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.fullDescription}</p>
      </div>

      <div class="modal-image">
        <div class="modal-carousel">
          <div class="modal-carousel-track">
            ${project.gallery.map((image, index) => `
              <img src="${image}" 
                   alt="${project.title} - Imagem ${index + 1}" 
                   class="modal-carousel-image ${index === 0 ? 'active' : ''}" 
                   loading="lazy" />
            `).join('')}
          </div>
          <div class="modal-carousel-controls">
            <button class="modal-carousel-btn modal-carousel-prev" aria-label="Imagem anterior">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="modal-carousel-btn modal-carousel-next" aria-label="Próxima imagem">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          <div class="modal-carousel-indicators">
            ${project.gallery.map((_, index) => `
              <span class="modal-indicator ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="modal-content">
        <div class="modal-section">
          <h3 class="modal-section-title">
            <i class="fas fa-code"></i>
            Tecnologias Utilizadas
          </h3>
          <div class="modal-tech-list">
            ${project.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
          </div>
        </div>

        <div class="modal-section">
          <h3 class="modal-section-title">
            <i class="fas fa-star"></i>
            Principais Funcionalidades
          </h3>
          <ul class="modal-features-list">
            ${project.features.slice(0, 5).map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-section">
          <h3 class="modal-section-title">
            <i class="fas fa-lightbulb"></i>
            Desafios de Desenvolvimento
          </h3>
          <ul class="modal-challenges-list">
            ${project.challenges.slice(0, 3).map(challenge => `<li>${challenge}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="modal-footer">
        <div class="modal-actions">
          <a href="${project.demoUrl}" class="modal-btn modal-btn-primary" target="_blank" rel="noopener">
            <i class="fas fa-external-link-alt"></i>
            <span>Ver Demo</span>
          </a>
          <a href="${project.githubUrl}" class="modal-btn modal-btn-secondary" target="_blank" rel="noopener">
            <i class="fab fa-github"></i>
            <span>Ver Código</span>
          </a>
        </div>
      </div>
    </div>
  `;

  // Add event listeners
  const closeBtn = modal.querySelector('.modal-close');
  const overlay = modal.querySelector('.modal-overlay');

  closeBtn.addEventListener('click', () => closeProjectModal(modal));
  overlay.addEventListener('click', () => closeProjectModal(modal));

  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closeProjectModal(modal);
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);

  // Setup modal carousel
  setupModalCarousel(modal);

  return modal;
}

function closeProjectModal(modal) {
  modal.classList.add('modal-hide');

  setTimeout(() => {
    if (modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
    // Re-enable body scroll
    document.body.style.overflow = '';
  }, 300);
}

// Modal Carousel functionality
function setupModalCarousel(modal) {
  const carousel = modal.querySelector('.modal-carousel');
  if (!carousel) return;

  const images = carousel.querySelectorAll('.modal-carousel-image');
  const prevBtn = carousel.querySelector('.modal-carousel-prev');
  const nextBtn = carousel.querySelector('.modal-carousel-next');
  const indicators = carousel.querySelectorAll('.modal-indicator');
  let currentIndex = 0;
  let intervalId = null;

  // Auto-slide functionality
  function startAutoSlide() {
    intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  function stopAutoSlide() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function showSlide(index) {
    // Remove active classes
    images.forEach(img => {
      img.classList.remove('active', 'prev');
    });
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });

    // Add active class to current slide
    images[index].classList.add('active');
    indicators[index].classList.add('active');

    // Add prev class to previous slide for animation
    const prevIndex = currentIndex;
    if (prevIndex !== index) {
      images[prevIndex].classList.add('prev');
    }

    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % images.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(prevIndex);
  }

  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextSlide();
      stopAutoSlide();
      setTimeout(startAutoSlide, 8000);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevSlide();
      stopAutoSlide();
      setTimeout(startAutoSlide, 8000);
    });
  }

  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(index);
      stopAutoSlide();
      setTimeout(startAutoSlide, 8000);
    });
  });

  // Pause auto-slide on hover
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);

  // Touch/swipe support for mobile
  let startX = 0;
  let endX = 0;

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    stopAutoSlide();
  });

  carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTimeout(startAutoSlide, 8000);
  });

  // Keyboard navigation
  const handleKeydown = (e) => {
    switch(e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 8000);
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 8000);
        break;
    }
  };

  document.addEventListener('keydown', handleKeydown);

  // Remove keydown listener when modal is closed
  modal.addEventListener('remove', () => {
    document.removeEventListener('keydown', handleKeydown);
    stopAutoSlide();
  });

  // Start auto-slide
  startAutoSlide();
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