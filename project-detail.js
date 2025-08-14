
// Project data
const projectsData = {
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    badge: 'Full Stack',
    year: '2023',
    description: 'Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos integrado e dashboard analytics em tempo real. Suporta múltiplos vendedores e inclui recursos avançados como recomendações por IA e chat ao vivo.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io', 'AWS'],
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
    demoUrl: 'https://ecommerce-demo.exemplo.com',
    githubUrl: 'https://github.com/thiagoaraujo/ecommerce-platform',
    mainImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop'
    ]
  },
  'ai-analytics-dashboard': {
    title: 'AI Analytics Dashboard',
    badge: 'AI/ML',
    year: '2023',
    description: 'Dashboard inteligente com machine learning para análise preditiva de dados empresariais e visualizações interativas em tempo real. Processa grandes volumes de dados e fornece insights acionáveis.',
    technologies: ['Python', 'Vue.js', 'TensorFlow', 'PostgreSQL', 'Docker', 'AWS'],
    features: [
      'Análise preditiva com algoritmos de machine learning',
      'Visualizações interativas em tempo real',
      'Processamento de big data com Apache Spark',
      'Relatórios automatizados e agendados',
      'API REST para integração com outros sistemas',
      'Sistema de alertas inteligentes',
      'Dashboard customizável por usuário',
      'Exportação de dados em múltiplos formatos'
    ],
    challenges: [
      'Otimização de algoritmos de ML para processamento em tempo real',
      'Desenvolvimento de pipeline de dados escalável',
      'Implementação de sistema de cache inteligente',
      'Criação de visualizações responsivas para grandes datasets',
      'Integração com múltiplas fontes de dados heterogêneas'
    ],
    demoUrl: 'https://ai-dashboard-demo.exemplo.com',
    githubUrl: 'https://github.com/thiagoaraujo/ai-analytics-dashboard',
    mainImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop'
    ]
  },
  'mobile-banking-app': {
    title: 'Mobile Banking App',
    badge: 'Mobile',
    year: '2022',
    description: 'Aplicativo móvel para serviços bancários com autenticação biométrica, transferências PIX e gerenciamento financeiro completo. Interface intuitiva e segurança de nível bancário.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'PostgreSQL', 'AWS'],
    features: [
      'Autenticação biométrica (Face ID / Touch ID)',
      'Transferências PIX instantâneas',
      'Gerenciamento de contas e cartões',
      'Histórico detalhado de transações',
      'Notificações push em tempo real',
      'Controle de limites e configurações',
      'Chat de suporte integrado',
      'Modo offline para consultas básicas'
    ],
    challenges: [
      'Implementação de segurança bancária em dispositivos móveis',
      'Sincronização offline/online de dados sensíveis',
      'Otimização de performance para dispositivos antigos',
      'Integração com APIs do Banco Central (PIX)',
      'Compliance com regulamentações bancárias'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/thiagoaraujo/mobile-banking-app',
    mainImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
    ]
  }
};

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeProjectDetail();
  setupNavigation();
  setupImageModal();
});

function initializeProjectDetail() {
  // Get project ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  
  if (projectId && projectsData[projectId]) {
    loadProjectData(projectsData[projectId]);
  } else {
    // Default project or redirect to projects page
    window.location.href = 'index.html#projects';
  }
}

function loadProjectData(project) {
  // Update page title
  document.getElementById('project-title').textContent = `${project.title} - João Dev`;
  
  // Update project details
  document.getElementById('project-badge').textContent = project.badge;
  document.getElementById('project-year').textContent = project.year;
  document.getElementById('project-detail-title-main').textContent = project.title;
  document.getElementById('project-detail-description-main').textContent = project.description;
  
  // Update action buttons
  document.getElementById('live-demo-btn').href = project.demoUrl;
  document.getElementById('view-code-btn').href = project.githubUrl;
  
  // Update main image
  document.getElementById('project-main-image').src = project.mainImage;
  document.getElementById('project-main-image').alt = project.title;
  
  // Update technologies
  updateTechnologies(project.technologies);
  
  // Update features
  updateFeatures(project.features);
  
  // Update challenges
  updateChallenges(project.challenges);
  
  // Update gallery
  updateGallery(project.gallery, project.title);
}

function updateTechnologies(technologies) {
  const techBadges = document.getElementById('project-tech-badges');
  techBadges.innerHTML = '';
  
  technologies.forEach(tech => {
    const badge = document.createElement('div');
    badge.className = 'tech-badge';
    badge.textContent = tech;
    techBadges.appendChild(badge);
  });
}

function updateFeatures(features) {
  const featuresList = document.getElementById('project-key-features');
  featuresList.innerHTML = '';
  
  features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });
}

function updateChallenges(challenges) {
  const challengesList = document.getElementById('project-challenges');
  challengesList.innerHTML = '';
  
  challenges.forEach(challenge => {
    const li = document.createElement('li');
    li.textContent = challenge;
    challengesList.appendChild(li);
  });
}

function updateGallery(gallery, projectTitle) {
  const galleryGrid = document.getElementById('project-gallery-grid');
  galleryGrid.innerHTML = '';
  
  const galleryTitles = [
    'Dashboard Principal',
    'Interface do Usuário',
    'Configurações do Sistema'
  ];
  
  gallery.forEach((image, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
      <img src="${image}" alt="${projectTitle} - ${galleryTitles[index] || `Screenshot ${index + 1}`}" loading="lazy" />
      <div class="gallery-item-overlay">
        <div class="gallery-item-title">${galleryTitles[index] || `Screenshot ${index + 1}`}</div>
      </div>
    `;
    
    // Add click event to open image in modal
    galleryItem.addEventListener('click', () => {
      openImageModal(image, `${projectTitle} - ${galleryTitles[index] || `Screenshot ${index + 1}`}`);
    });
    
    galleryGrid.appendChild(galleryItem);
  });
}

function setupNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

function setupImageModal() {
  // Image modal functionality will be added here
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
