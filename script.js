/**
 * SENA ARQUITETOS ASSOCIADOS
 * Experiência Interativa de Galeria, Acervo de Obras e Atendimento
 */

const PROJECTS_DATA = [
  {
    id: 'residencial-terrazo',
    title: 'Residencial Terrazo',
    category: 'residencial',
    categoryLabel: 'Residencial',
    location: 'Divinópolis, MG',
    year: '2024',
    area: '680 m²',
    typology: 'Residência Unifamiliar',
    cover: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
    narrative:
      'Volumes horizontais pousam sobre o relevo mineiro em diálogo contínuo com o jardim. A pedra natural, a madeira ripada e os grandes vãos envidraçados dissolvem a fronteira entre abrigo e paisagem.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
        caption: '01 / Fachada posterior e integração com o espelho d’água'
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
        caption: '02 / Eixo social permeado pela luz natural da tarde'
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=85',
        caption: '03 / Detalhe de marcenaria autoral e planos em pedra bruta'
      }
    ]
  },
  {
    id: 'casa-bonita',
    title: 'Casa Bonita',
    category: 'residencial',
    categoryLabel: 'Residencial',
    location: 'Juiz de Fora, MG',
    year: '2023',
    area: '540 m²',
    typology: 'Residência Contemporânea',
    cover: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    narrative:
      'Concebida para acolher o tempo sem pressa. A planta organiza-se em torno de um pátio interno silencioso, onde a ventilação cruzada e a textura tátil dos revestimentos criam uma atmosfera serena e atemporal.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
        caption: '01 / Abertura zenital e continuidade espacial do estar'
      },
      {
        src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=2000&q=85',
        caption: '02 / Cozinha integrada e paleta mineral em tons terrosos'
      }
    ]
  },
  {
    id: 'casa-cubo',
    title: 'Casa Cubo',
    category: 'residencial',
    categoryLabel: 'Residencial',
    location: 'Divinópolis, MG',
    year: '2023',
    area: '490 m²',
    typology: 'Arquitetura Residencial',
    cover: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    narrative:
      'Geometria pura esculpida pela incidência solar. O balanço estrutural protege a intimidade da família enquanto emoldura a linha do horizonte com leveza e rigor construtivo.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
        caption: '01 / Pureza volumétrica e jogos de sombra ao entardecer'
      },
      {
        src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85',
        caption: '02 / Varanda contemplativa e deck em madeira natural'
      }
    ]
  },
  {
    id: 'apartamento-panoramico',
    title: 'Apartamento Panorâmico',
    category: 'residencial',
    categoryLabel: 'Residencial & Interiores',
    location: 'Juiz de Fora, MG',
    year: '2024',
    area: '320 m²',
    typology: 'Arquitetura de Interiores',
    cover: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    narrative:
      'Nas alturas da cidade, a arquitetura interior silencia excessos para privilegiar a vista aberta. Superfícies contínuas, iluminação indireta e mobiliário brasileiro desenham um refúgio urbano de elegância discreta.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
        caption: '01 / Galeria de estar integrada à paisagem urbana'
      },
      {
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85',
        caption: '02 / Suíte master com painéis acústicos e tecidos naturais'
      }
    ]
  },
  {
    id: 'apartamento-garage-studio',
    title: 'Apartamento Garage Studio',
    category: 'comercial',
    categoryLabel: 'Comercial & Construtoras',
    location: 'Juiz de Fora, MG',
    year: '2022',
    area: '195 m²',
    typology: 'Conceito & Incorporação',
    cover: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=85',
    narrative:
      'Um manifesto de morar contemporâneo onde o automóvel, a arte e o cotidiano coexistem no mesmo plano visual. Concreto aparente, aço escovado e luz cênica traduzem identidade forte e alto valor percebido.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=85',
        caption: '01 / Integração entre galeria expositiva e estar contemporâneo'
      },
      {
        src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2000&q=85',
        caption: '02 / Contraste entre concreto aparente e iluminação arquitetural'
      }
    ]
  }
];

const STUDIO_LOCATIONS = {
  divinopolis: {
    address: 'Divinópolis, Minas Gerais — Atendimento presencial mediante agendamento e consultoria remota para todo o Brasil.',
    mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-44.915%2C-20.165%2C-44.865%2C-20.125&layer=mapnik'
  },
  jf: {
    address: 'Juiz de Fora, Minas Gerais — Atendimento presencial mediante agendamento e projetos em âmbito nacional.',
    mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-43.375%2C-21.785%2C-43.325%2C-21.745&layer=mapnik'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const siteHeader = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const exhibitionView = document.getElementById('exhibitionView');
  const projectDetailView = document.getElementById('projectDetailView');

  // 1. Renderizar Grade de Projetos
  function renderPortfolio(filter = 'all') {
    const filtered = filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.category === filter);

    portfolioGrid.innerHTML = filtered.map((project, idx) => `
      <article class="project-card reveal-step" data-project-id="${project.id}" tabindex="0" role="button" aria-label="Explorar obra ${project.title}">
        <div class="project-frame">
          <img
            src="${project.cover}"
            alt="${project.title} — ${project.categoryLabel} em ${project.location}"
            loading="${idx === 0 ? 'eager' : 'lazy'}"
          />
        </div>
        <div class="project-meta-row">
          <h3 class="project-card-title">${project.title}</h3>
          <span class="project-card-loc">${project.categoryLabel} &bull; ${project.location}</span>
        </div>
      </article>
    `).join('');

    observeReveals();
    attachProjectListeners();
  }

  // 2. Abrir Página Individual da Obra (Galeria Dedicada)
  function openProjectDetail(projectId) {
    const index = PROJECTS_DATA.findIndex(p => p.id === projectId);
    if (index === -1) return;

    const project = PROJECTS_DATA[index];
    const prevProject = PROJECTS_DATA[(index - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
    const nextProject = PROJECTS_DATA[(index + 1) % PROJECTS_DATA.length];

    projectDetailView.innerHTML = `
      <div class="detail-topbar">
        <div class="container">
          <button type="button" class="back-to-gallery" id="backToGalleryBtn">
            &larr; Voltar para a galeria de obras
          </button>
        </div>
      </div>

      <header class="detail-hero-header container">
        <span class="eyebrow">${project.categoryLabel} &mdash; ${project.location}</span>
        <h1 class="detail-title">${project.title}</h1>

        <div class="detail-summary-grid">
          <p class="detail-narrative">${project.narrative}</p>
          <dl class="ficha-tecnica">
            <div class="ficha-item">
              <dt>Localização</dt>
              <dd>${project.location}</dd>
            </div>
            <div class="ficha-item">
              <dt>Ano</dt>
              <dd>${project.year}</dd>
            </div>
            <div class="ficha-item">
              <dt>Área Construída</dt>
              <dd>${project.area}</dd>
            </div>
            <div class="ficha-item">
              <dt>Tipologia</dt>
              <dd>${project.typology}</dd>
            </div>
          </dl>
        </div>
      </header>

      <section class="detail-sequence container" aria-label="Sequência fotográfica da obra">
        ${project.gallery.map(item => `
          <figure class="detail-photo-frame reveal-step" data-zoom-src="${item.src}" data-zoom-caption="${project.title} — ${item.caption}">
            <img src="${item.src}" alt="${project.title} — ${item.caption}" loading="lazy" />
            <figcaption class="detail-photo-caption">
              <span>${item.caption}</span>
              <span>Ampliar +</span>
            </figcaption>
          </figure>
        `).join('')}
      </section>

      <nav class="project-pagination" aria-label="Navegação entre obras">
        <div class="container" style="display:flex; justify-content:space-between; align-items:center; width:100%;">
          <button type="button" class="page-nav-btn prev" data-nav-project="${prevProject.id}">
            <span class="page-nav-label">&larr; Obra Anterior</span>
            <span class="page-nav-title">${prevProject.title}</span>
          </button>

          <button type="button" class="page-nav-btn next" data-nav-project="${nextProject.id}">
            <span class="page-nav-label">Próxima Obra &rarr;</span>
            <span class="page-nav-title">${nextProject.title}</span>
          </button>
        </div>
      </nav>
    `;

    exhibitionView.hidden = true;
    projectDetailView.hidden = false;
    siteHeader.classList.add('light-mode');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', `#obra/${project.id}`);

    observeReveals();

    document.getElementById('backToGalleryBtn').addEventListener('click', () => {
      closeProjectDetail('obras');
    });

    projectDetailView.querySelectorAll('[data-nav-project]').forEach(btn => {
      btn.addEventListener('click', () => openProjectDetail(btn.dataset.navProject));
    });

    projectDetailView.querySelectorAll('[data-zoom-src]').forEach(frame => {
      frame.addEventListener('click', () => {
        openLightbox(frame.dataset.zoomSrc, frame.dataset.zoomCaption);
      });
    });
  }

  function closeProjectDetail(targetHash = '') {
    projectDetailView.hidden = true;
    exhibitionView.hidden = false;
    siteHeader.classList.remove('light-mode');
    updateHeaderOnScroll();

    if (targetHash) {
      const targetEl = document.getElementById(targetHash);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', `#${targetHash}`);
      }
    }
  }

  function attachProjectListeners() {
    document.querySelectorAll('.project-card').forEach(card => {
      const id = card.dataset.projectId;
      card.addEventListener('click', () => openProjectDetail(id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectDetail(id);
        }
      });
    });
  }

  // 3. Filtros de Categoria
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderPortfolio(btn.dataset.filter);
    });
  });

  // 4. Navegação do Cabeçalho e Drawer Mobile
  document.querySelectorAll('.nav-link, .mobile-link, .brand').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.slice(1);
        if (!projectDetailView.hidden) {
          e.preventDefault();
          closeProjectDetail(targetId);
        }
      }
      if (mobileDrawer.classList.contains('open')) {
        toggleMobileMenu(false);
      }
    });
  });

  function toggleMobileMenu(forceState) {
    const isOpen = typeof forceState === 'boolean'
      ? forceState
      : !mobileDrawer.classList.contains('open');

    mobileDrawer.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', () => toggleMobileMenu());

  // 5. Cabeçalho Adaptativo ao Scroll
  function updateHeaderOnScroll() {
    if (!projectDetailView.hidden) {
      siteHeader.classList.add('scrolled');
      return;
    }
    if (window.scrollY > 60) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });

  // 6. Ritmo de Galeria (IntersectionObserver)
  function observeReveals() {
    const elements = document.querySelectorAll('.reveal-step:not(.is-visible)');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  // 7. Lightbox / Zoom Interativo
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    lightboxCaption.textContent = caption;
    lightboxModal.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightboxModal.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightboxModal.hidden) closeLightbox();
  });

  // 8. Alternador de Sedes (Divinópolis / Juiz de Fora)
  const studioTabs = document.querySelectorAll('.studio-tab');
  const studioAddress = document.getElementById('studioAddress');
  const studioMap = document.getElementById('studioMap');

  studioTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      studioTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const data = STUDIO_LOCATIONS[tab.dataset.city];
      if (data) {
        studioAddress.textContent = data.address;
        studioMap.src = data.mapUrl;
      }
    });
  });

  // 9. Formulário Editorial & Integração Direta WhatsApp Business
  const contactForm = document.getElementById('contactForm');
  const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');
  const formFeedback = document.getElementById('formFeedback');

  function buildWhatsAppUrl() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const text = [
      'Olá, Sena Arquitetos Associados.',
      nome ? `Nome: ${nome}` : '',
      email ? `E-mail: ${email}` : '',
      whatsapp ? `WhatsApp: ${whatsapp}` : '',
      mensagem ? `Sobre o projeto: ${mensagem}` : ''
    ].filter(Boolean).join('\n');

    return `https://wa.me/5537988511549?text=${encodeURIComponent(text)}`;
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      formFeedback.textContent = 'Por favor, preencha os campos essenciais para iniciarmos o diálogo.';
      contactForm.reportValidity();
      return;
    }
    formFeedback.textContent = 'Mensagem registrada com sucesso. Nossa equipe retornará em breve — ou, se preferir, clique em "Continuar no WhatsApp".';
    contactForm.reset();
  });

  sendWhatsappBtn.addEventListener('click', () => {
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  });

  // Inicialização & Roteamento por Hash
  renderPortfolio('all');
  updateHeaderOnScroll();

  if (window.location.hash.startsWith('#obra/')) {
    const initialId = window.location.hash.replace('#obra/', '');
    openProjectDetail(initialId);
  }
});