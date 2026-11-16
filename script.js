/**
 * SENA ARQUITETOS ASSOCIADOS
 * Experiência Bilíngue (PT-BR / EN), Tema Claro/Escuro, Acervo de Obras e Navegação Responsiva
 */

const TRANSLATIONS = {
  pt: {
    page_title: 'Sena Arquitetos Associados — Arquitetura e Design de Interiores',
    meta_description:
      'Mais de 30 anos esculpindo luz, matéria e permanência. Projetos residenciais, comerciais e incorporações em Minas Gerais e em todo o Brasil.',
    skip_link: 'Pular para o conteúdo principal',
    brand_aria: 'Sena Arquitetos Associados — Início',
    brand_sub: 'Arquitetos Associados',
    nav_main_aria: 'Navegação principal',
    nav_mobile_aria: 'Navegação mobile',
    mobile_drawer_aria: 'Menu de navegação',
    lang_group_aria: 'Selecionar idioma',
    menu_open_aria: 'Abrir menu',
    menu_close_aria: 'Fechar menu',
    theme_to_dark_aria: 'Alternar para tema escuro',
    theme_to_light_aria: 'Alternar para tema claro',
    theme_dark_label: 'Tema Escuro',
    theme_light_label: 'Tema Claro',
    mobile_lang_label: 'Idioma',
    mobile_theme_label: 'Aparência',

    nav_works: 'Obras',
    nav_studio: 'O Escritório',
    nav_services: 'Serviços',
    nav_recognition: 'Reconhecimento',
    nav_contact: 'Contato',

    mobile_nav_works: '01. Obras',
    mobile_nav_studio: '02. O Escritório',
    mobile_nav_services: '03. Serviços',
    mobile_nav_recognition: '04. Reconhecimento',
    mobile_nav_contact: '05. Contato',
    mobile_footer_loc: 'Divinópolis • Juiz de Fora • Brasil',

    hero_aria: 'Abertura',
    hero_img_alt:
      'Arquitetura contemporânea em pedra natural, madeira e iluminação indireta quente por Sena Arquitetos Associados',
    hero_eyebrow: 'Divinópolis — Juiz de Fora — Brasil',
    hero_title: 'Três décadas esculpindo<br /><em>luz, matéria e permanência.</em>',
    hero_caption:
      'Arquitetura autoral entre o silêncio da forma e a vitalidade de quem habita.',
    hero_cta: 'Iniciar percurso',
    hero_cta_aria: 'Iniciar percurso pela galeria',

    manifesto_index: 'I — Essência',
    manifesto_quote:
      '“Cada obra nasce da escuta atenta do lugar. Buscamos a síntese onde rigor técnico, proporção e afeto se tornam inseparáveis.”',
    manifesto_sub:
      'Há mais de trinta anos, o escritório conduz projetos residenciais e empreendimentos que atravessam o tempo sem perder o frescor do primeiro traço.',

    works_index: 'II — Acervo Selecionado',
    works_title: 'Obras',
    filter_aria: 'Filtrar obras por categoria',
    filter_all: 'Todas',
    filter_res: 'Residencial',
    filter_com: 'Comercial & Construtoras',

    studio_index: 'III — O Escritório',
    studio_title: 'Identidade própria em cada escala.',
    studio_p1:
      'Fundado pela arquiteta <strong>Miriam Sena</strong>, o Sena Arquitetos Associados construiu ao longo de mais de três décadas uma trajetória pautada pela inquietação criativa e pela precisão construtiva.',
    studio_p2:
      'Com sedes em <strong>Divinópolis</strong> e <strong>Juiz de Fora</strong> e atuação em todo o território nacional, transitamos com naturalidade entre a intimidade da casa contemporânea e a complexidade de grandes empreendimentos imobiliários — sempre com sofisticação, harmonia e atemporalidade.',
    studio_img_alt:
      'Estúdio e atmosfera de materiais naturais Sena Arquitetos Associados',
    studio_caption: 'Ateliê — Matéria natural, desenho e rigor executivo.',

    team_eyebrow: 'Corpo Técnico & Criativo',
    team_heading: 'As pessoas por trás do traço',
    team_aria: 'Equipe Sena Arquitetos Associados',
    role_founder: 'Fundadora • Arquiteta',
    role_architect: 'Arquiteta',
    role_architect_m: 'Arquiteto',
    role_decorator: 'Decoradora',
    role_engineer: 'Engenheira Civil',
    role_intern: 'Estagiário',

    services_index: 'IV — Disciplinas',
    services_title: 'Do território ao detalhe construído',
    services_lead:
      'Acompanhamos toda a jornada da arquitetura — da leitura estratégica do solo à entrega da chave.',
    srv1_title: 'Viabilidade de Terreno',
    srv1_tag: 'Investidores, Construtoras & Incorporadoras',
    srv1_desc:
      'Antes do primeiro esboço, deciframos o potencial silencioso da gleba. Cruzamos índices urbanísticos, vocação de mercado e inteligência espacial para transformar terrenos em empreendimentos de alta liquidez e valor arquitetônico perene.',
    srv2_title: 'Escolha do Terreno',
    srv2_tag: 'Curadoria de Implantação',
    srv2_desc:
      'Orientamos a decisão de compra a partir da leitura sensível da topografia, insolação, ventos dominantes e visuais. Garantimos que o lugar escolhido já carregue em si a alma do projeto que irá receber.',
    srv3_title: 'Projeto Arquitetônico Executivo',
    srv3_tag: 'Rigor & Síntese Construtiva',
    srv3_desc:
      'O desenho elevado ao grau máximo de precisão. Cada encontro de materiais, paginação, infraestrutura e detalhamento técnico é minuciosamente resolvido para que o canteiro execute a obra com fluidez e previsibilidade.',
    srv4_title: 'Projeto Legal',
    srv4_tag: 'Prefeituras & Vigilância Sanitária',
    srv4_desc:
      'Conduzimos todo o trâmite normativo e aprovações junto aos órgãos municipais e sanitários com serenidade e domínio técnico, assegurando conformidade integral sem comprometer a pureza do partido arquitetônico.',
    srv5_title: 'Design de Interiores',
    srv5_tag: 'Atmosfera, Tato & Mobiliário',
    srv5_desc:
      'A extensão íntima da arquitetura. Projetamos marcenarias autorais, iluminação cênica, texturas naturais e curadoria de mobiliário para criar espaços que acolhem o cotidiano com elegância discreta.',
    srv6_title: 'Acompanhamento de Obra',
    srv6_tag: 'Fidelidade ao Traço',
    srv6_desc:
      'Presença ativa no canteiro para zelar pela integridade estética e técnica da concepção original. Acompanhamos decisões de acabamento e compatibilizações para que a obra construída honre fielmente o projeto.',

    rec_index: 'V — Reconhecimento',
    rec_title: 'Publicações & Trajetória',
    rec1_title: 'Anuário de Arquitetura e Design de Minas Gerais',
    rec1_detail: 'Destaque Residencial Contemporâneo — Residencial Terrazo',
    rec2_title: 'Mostra Contemporânea de Interiores MG',
    rec2_detail: 'Curadoria de Espaços Integrados — Apartamento Panorâmico',
    rec3_title: 'Ciclo de Arquitetura Mineira — Juiz de Fora & Divinópolis',
    rec3_detail: 'Homenagem pelos 30 anos de contribuição à paisagem urbana',
    rec4_title: 'Caderno Especial Arquitetura & Matéria',
    rec4_detail: 'Publicação editorial — Casa Cubo e Casa Bonita',

    contact_index: 'VI — Diálogo',
    contact_title: 'Inicie uma conversa sobre o seu próximo espaço.',
    contact_lead:
      'Atendemos projetos residenciais, comerciais e incorporações em Minas Gerais e em todo o Brasil.',
    channel_email_label: 'E-mail',
    studios_aria: 'Sedes do escritório',
    studio_div_tab: 'Sede Divinópolis • MG',
    studio_jf_tab: 'Sede Juiz de Fora • MG',
    map_title: 'Mapa da sede Sena Arquitetos Associados',

    form_name_label: 'Nome completo',
    form_name_ph: 'Como podemos chamá-lo(a)?',
    form_email_label: 'E-mail',
    form_email_ph: 'seu@email.com',
    form_wa_ph: '(00) 00000-0000',
    form_msg_label: 'Sobre o projeto ou terreno',
    form_msg_ph:
      'Conte-nos brevemente sobre a escala, localização ou intenção da obra...',
    form_submit: 'Enviar mensagem',
    form_wa_btn: 'Continuar no WhatsApp',
    form_error:
      'Por favor, preencha os campos essenciais para iniciarmos o diálogo.',
    form_success:
      'Mensagem registrada com sucesso. Nossa equipe retornará em breve — ou, se preferir, clique em "Continuar no WhatsApp".',

    wa_direct_msg:
      'Olá, gostaria de conversar sobre um projeto com a Sena Arquitetos Associados.',
    wa_floating_msg:
      'Olá, vim pelo site da Sena Arquitetos Associados.',
    wa_form_greeting: 'Olá, Sena Arquitetos Associados.',
    wa_form_name: 'Nome',
    wa_form_email: 'E-mail',
    wa_form_phone: 'WhatsApp',
    wa_form_project: 'Sobre o projeto',

    detail_back: '← Voltar para a galeria de obras',
    detail_loc_label: 'Localização',
    detail_year_label: 'Ano',
    detail_area_label: 'Área Construída',
    detail_typology_label: 'Tipologia',
    detail_zoom: 'Ampliar +',
    detail_prev: '← Obra Anterior',
    detail_next: 'Próxima Obra →',
    detail_nav_aria: 'Navegação entre obras',
    detail_seq_aria: 'Sequência fotográfica da obra',
    card_explore_aria: 'Explorar obra',

    lightbox_aria: 'Visualização ampliada da obra',
    lightbox_close_aria: 'Fechar ampliação',
    lightbox_close_btn: 'Fechar &times;',
    floating_wa_aria: 'Conversar via WhatsApp Business',

    footer_note:
      'Sena Arquitetos Associados — Mais de 30 anos de arquitetura e design de interiores.',
    footer_loc: 'Divinópolis • Juiz de Fora • Atuação Nacional',
    footer_rights: '© 2026 Todos os direitos reservados.'
  },

  en: {
    page_title: 'Sena Arquitetos Associados — Architecture & Interior Design',
    meta_description:
      'Over 30 years sculpting light, matter, and permanence. Residential, commercial, and real estate developments in Minas Gerais and across Brazil.',
    skip_link: 'Skip to main content',
    brand_aria: 'Sena Arquitetos Associados — Home',
    brand_sub: 'Associated Architects',
    nav_main_aria: 'Main navigation',
    nav_mobile_aria: 'Mobile navigation',
    mobile_drawer_aria: 'Navigation menu',
    lang_group_aria: 'Select language',
    menu_open_aria: 'Open menu',
    menu_close_aria: 'Close menu',
    theme_to_dark_aria: 'Switch to dark theme',
    theme_to_light_aria: 'Switch to light theme',
    theme_dark_label: 'Dark Theme',
    theme_light_label: 'Light Theme',
    mobile_lang_label: 'Language',
    mobile_theme_label: 'Appearance',

    nav_works: 'Works',
    nav_studio: 'The Studio',
    nav_services: 'Services',
    nav_recognition: 'Recognition',
    nav_contact: 'Contact',

    mobile_nav_works: '01. Works',
    mobile_nav_studio: '02. The Studio',
    mobile_nav_services: '03. Services',
    mobile_nav_recognition: '04. Recognition',
    mobile_nav_contact: '05. Contact',
    mobile_footer_loc: 'Divinópolis • Juiz de Fora • Brazil',

    hero_aria: 'Opening',
    hero_img_alt:
      'Contemporary architecture in natural stone, timber, and warm indirect lighting by Sena Arquitetos Associados',
    hero_eyebrow: 'Divinópolis — Juiz de Fora — Brazil',
    hero_title: 'Three decades sculpting<br /><em>light, matter, and permanence.</em>',
    hero_caption:
      'Authorial architecture between the silence of form and the vitality of those who inhabit it.',
    hero_cta: 'Begin journey',
    hero_cta_aria: 'Begin journey through the gallery',

    manifesto_index: 'I — Essence',
    manifesto_quote:
      '“Every work is born from attentive listening to the site. We seek the synthesis where technical rigor, proportion, and affection become inseparable.”',
    manifesto_sub:
      'For over thirty years, the studio has led residential projects and developments that endure through time without losing the freshness of the first line.',

    works_index: 'II — Selected Archive',
    works_title: 'Works',
    filter_aria: 'Filter works by category',
    filter_all: 'All',
    filter_res: 'Residential',
    filter_com: 'Commercial & Developers',

    studio_index: 'III — The Studio',
    studio_title: 'Distinct identity at every scale.',
    studio_p1:
      'Founded by architect <strong>Miriam Sena</strong>, Sena Arquitetos Associados has built a trajectory spanning over three decades, guided by creative inquiry and constructive precision.',
    studio_p2:
      'With offices in <strong>Divinópolis</strong> and <strong>Juiz de Fora</strong> and projects nationwide, we move seamlessly between the intimacy of the contemporary home and the complexity of large real estate developments — always with sophistication, harmony, and timelessness.',
    studio_img_alt:
      'Studio and natural materials atmosphere at Sena Arquitetos Associados',
    studio_caption: 'Atelier — Natural matter, design, and executive rigor.',

    team_eyebrow: 'Technical & Creative Team',
    team_heading: 'The people behind the line',
    team_aria: 'Sena Arquitetos Associados Team',
    role_founder: 'Founder • Architect',
    role_architect: 'Architect',
    role_architect_m: 'Architect',
    role_decorator: 'Interior Decorator',
    role_engineer: 'Civil Engineer',
    role_intern: 'Architectural Intern',

    services_index: 'IV — Disciplines',
    services_title: 'From territory to built detail',
    services_lead:
      'We accompany the entire architectural journey — from strategic land assessment to key handover.',
    srv1_title: 'Land Feasibility Study',
    srv1_tag: 'Investors, Builders & Real Estate Developers',
    srv1_desc:
      'Before the first sketch, we decipher the quiet potential of the site. We cross-reference urban zoning indices, market vocation, and spatial intelligence to transform land into high-liquidity developments with enduring architectural value.',
    srv2_title: 'Site Selection',
    srv2_tag: 'Siting Curation',
    srv2_desc:
      'We guide land acquisition decisions through a sensitive reading of topography, solar orientation, prevailing winds, and views—ensuring the chosen site already carries the soul of the project it will host.',
    srv3_title: 'Executive Architectural Design',
    srv3_tag: 'Rigor & Constructive Synthesis',
    srv3_desc:
      'Drawing elevated to maximum precision. Every material junction, layout grid, infrastructure system, and technical detail is thoroughly resolved so construction proceeds smoothly and predictably.',
    srv4_title: 'Legal & Permitting Approval',
    srv4_tag: 'Municipalities & Health Authorities',
    srv4_desc:
      'We manage all regulatory procedures and approvals before municipal and sanitary agencies with clarity and technical mastery, ensuring full compliance without compromising architectural purity.',
    srv5_title: 'Interior Design',
    srv5_tag: 'Atmosphere, Tactility & Furniture',
    srv5_desc:
      'The intimate extension of architecture. We design bespoke millwork, scenic lighting, natural textures, and curated furniture to create spaces that embrace daily life with quiet elegance.',
    srv6_title: 'Construction Supervision',
    srv6_tag: 'Fidelity to the Design',
    srv6_desc:
      'Active presence on site to safeguard the aesthetic and technical integrity of the original concept. We oversee finishing decisions and technical coordination so the built work faithfully honors the design.',

    rec_index: 'V — Recognition',
    rec_title: 'Publications & Trajectory',
    rec1_title: 'Minas Gerais Architecture & Design Yearbook',
    rec1_detail: 'Contemporary Residential Highlight — Residencial Terrazo',
    rec2_title: 'MG Contemporary Interiors Exhibition',
    rec2_detail: 'Integrated Spaces Curation — Panoramic Apartment',
    rec3_title: 'Minas Gerais Architecture Cycle — Juiz de Fora & Divinópolis',
    rec3_detail: 'Tribute for 30 years of contribution to the urban landscape',
    rec4_title: 'Special Issue: Architecture & Matter',
    rec4_detail: 'Editorial feature — Casa Cubo and Casa Bonita',

    contact_index: 'VI — Dialogue',
    contact_title: 'Start a conversation about your next space.',
    contact_lead:
      'We serve residential, commercial, and real estate development projects in Minas Gerais and across Brazil.',
    channel_email_label: 'Email',
    studios_aria: 'Studio offices',
    studio_div_tab: 'Divinópolis Office • MG',
    studio_jf_tab: 'Juiz de Fora Office • MG',
    map_title: 'Sena Arquitetos Associados office map',

    form_name_label: 'Full name',
    form_name_ph: 'How may we address you?',
    form_email_label: 'Email',
    form_email_ph: 'you@email.com',
    form_wa_ph: '+55 (00) 00000-0000',
    form_msg_label: 'About your project or site',
    form_msg_ph:
      'Tell us briefly about the scale, location, or vision for your project...',
    form_submit: 'Send message',
    form_wa_btn: 'Continue on WhatsApp',
    form_error:
      'Please fill in the required fields so we can begin our conversation.',
    form_success:
      'Message recorded successfully. Our team will respond shortly — or, if you prefer, click "Continue on WhatsApp".',

    wa_direct_msg:
      'Hello, I would like to discuss an architectural project with Sena Arquitetos Associados.',
    wa_floating_msg:
      'Hello, I reached out via the Sena Arquitetos Associados website.',
    wa_form_greeting: 'Hello, Sena Arquitetos Associados.',
    wa_form_name: 'Name',
    wa_form_email: 'Email',
    wa_form_phone: 'WhatsApp',
    wa_form_project: 'About the project',

    detail_back: '← Back to works gallery',
    detail_loc_label: 'Location',
    detail_year_label: 'Year',
    detail_area_label: 'Built Area',
    detail_typology_label: 'Typology',
    detail_zoom: 'Enlarge +',
    detail_prev: '← Previous Work',
    detail_next: 'Next Work →',
    detail_nav_aria: 'Navigation between works',
    detail_seq_aria: 'Photographic sequence of the work',
    card_explore_aria: 'Explore work',

    lightbox_aria: 'Enlarged view of the work',
    lightbox_close_aria: 'Close enlarged view',
    lightbox_close_btn: 'Close &times;',
    floating_wa_aria: 'Chat via WhatsApp Business',

    footer_note:
      'Sena Arquitetos Associados — Over 30 years of architecture and interior design.',
    footer_loc: 'Divinópolis • Juiz de Fora • Nationwide Practice',
    footer_rights: '© 2026 All rights reserved.'
  }
};

const PROJECTS_DATA = [
  {
    id: 'residencial-terrazo',
    category: 'residencial',
    location: 'Divinópolis, MG',
    year: '2024',
    area: '680 m²',
    cover:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
    pt: {
      title: 'Residencial Terrazo',
      categoryLabel: 'Residencial',
      typology: 'Residência Unifamiliar',
      narrative:
        'Volumes horizontais pousam sobre o relevo mineiro em diálogo contínuo com o jardim. A pedra natural, a madeira ripada e os grandes vãos envidraçados dissolvem a fronteira entre abrigo e paisagem.',
      captions: [
        '01 / Fachada posterior e integração com o espelho d’água',
        '02 / Eixo social permeado pela luz natural da tarde',
        '03 / Detalhe de marcenaria autoral e planos em pedra bruta'
      ]
    },
    en: {
      title: 'Terrazo Residence',
      categoryLabel: 'Residential',
      typology: 'Single-Family Residence',
      narrative:
        'Horizontal volumes rest gently upon the Minas Gerais topography in continuous dialogue with the garden. Natural stone, slatted timber, and expansive glazed spans dissolve the boundary between shelter and landscape.',
      captions: [
        '01 / Rear facade and integration with the reflecting pool',
        '02 / Social axis bathed in warm afternoon natural light',
        '03 / Bespoke millwork detail and raw stone planes'
      ]
    },
    gallerySrcs: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=85'
    ]
  },
  {
    id: 'casa-bonita',
    category: 'residencial',
    location: 'Juiz de Fora, MG',
    year: '2023',
    area: '540 m²',
    cover:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    pt: {
      title: 'Casa Bonita',
      categoryLabel: 'Residencial',
      typology: 'Residência Contemporânea',
      narrative:
        'Concebida para acolher o tempo sem pressa. A planta organiza-se em torno de um pátio interno silencioso, onde a ventilação cruzada e a textura tátil dos revestimentos criam uma atmosfera serena e atemporal.',
      captions: [
        '01 / Abertura zenital e continuidade espacial do estar',
        '02 / Cozinha integrada e paleta mineral em tons terrosos'
      ]
    },
    en: {
      title: 'Casa Bonita',
      categoryLabel: 'Residential',
      typology: 'Contemporary Residence',
      narrative:
        'Conceived to embrace unhurried time. The floor plan is organized around a quiet internal courtyard, where cross-ventilation and tactile surface textures create a serene, timeless atmosphere.',
      captions: [
        '01 / Zenithal skylight and spatial continuity of the living area',
        '02 / Integrated kitchen and mineral palette in earthy tones'
      ]
    },
    gallerySrcs: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=2000&q=85'
    ]
  },
  {
    id: 'casa-cubo',
    category: 'residencial',
    location: 'Divinópolis, MG',
    year: '2023',
    area: '490 m²',
    cover:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    pt: {
      title: 'Casa Cubo',
      categoryLabel: 'Residencial',
      typology: 'Arquitetura Residencial',
      narrative:
        'Geometria pura esculpida pela incidência solar. O balanço estrutural protege a intimidade da família enquanto emoldura a linha do horizonte com leveza e rigor construtivo.',
      captions: [
        '01 / Pureza volumétrica e jogos de sombra ao entardecer',
        '02 / Varanda contemplativa e deck em madeira natural'
      ]
    },
    en: {
      title: 'Cube House',
      categoryLabel: 'Residential',
      typology: 'Residential Architecture',
      narrative:
        'Pure geometry sculpted by solar incidence. The structural cantilever safeguards family privacy while framing the horizon line with lightness and constructive rigor.',
      captions: [
        '01 / Volumetric purity and shadow play at dusk',
        '02 / Contemplative veranda and natural timber deck'
      ]
    },
    gallerySrcs: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85'
    ]
  },
  {
    id: 'apartamento-panoramico',
    category: 'residencial',
    location: 'Juiz de Fora, MG',
    year: '2024',
    area: '320 m²',
    cover:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    pt: {
      title: 'Apartamento Panorâmico',
      categoryLabel: 'Residencial & Interiores',
      typology: 'Arquitetura de Interiores',
      narrative:
        'Nas alturas da cidade, a arquitetura interior silencia excessos para privilegiar a vista aberta. Superfícies contínuas, iluminação indireta e mobiliário brasileiro desenham um refúgio urbano de elegância discreta.',
      captions: [
        '01 / Galeria de estar integrada à paisagem urbana',
        '02 / Suíte master com painéis acústicos e tecidos naturais'
      ]
    },
    en: {
      title: 'Panoramic Apartment',
      categoryLabel: 'Residential & Interiors',
      typology: 'Interior Architecture',
      narrative:
        'High above the city, the interior architecture quiets excess to privilege the open view. Continuous surfaces, indirect lighting, and Brazilian furniture craft an urban sanctuary of understated elegance.',
      captions: [
        '01 / Living gallery integrated with the urban skyline',
        '02 / Master suite with acoustic panels and natural fabrics'
      ]
    },
    gallerySrcs: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85'
    ]
  },
  {
    id: 'apartamento-garage-studio',
    category: 'comercial',
    location: 'Juiz de Fora, MG',
    year: '2022',
    area: '195 m²',
    cover:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=85',
    pt: {
      title: 'Apartamento Garage Studio',
      categoryLabel: 'Comercial & Construtoras',
      typology: 'Conceito & Incorporação',
      narrative:
        'Um manifesto de morar contemporâneo onde o automóvel, a arte e o cotidiano coexistem no mesmo plano visual. Concreto aparente, aço escovado e luz cênica traduzem identidade forte e alto valor percebido.',
      captions: [
        '01 / Integração entre galeria expositiva e estar contemporâneo',
        '02 / Contraste entre concreto aparente e iluminação arquitetural'
      ]
    },
    en: {
      title: 'Garage Studio Apartment',
      categoryLabel: 'Commercial & Developers',
      typology: 'Concept & Development',
      narrative:
        'A manifesto of contemporary living where the automobile, art, and everyday life coexist on the same visual plane. Exposed concrete, brushed steel, and scenic lighting convey strong identity and high perceived value.',
      captions: [
        '01 / Integration between exhibition gallery and contemporary living space',
        '02 / Contrast between exposed concrete and architectural lighting'
      ]
    },
    gallerySrcs: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2000&q=85'
    ]
  }
];

const STUDIO_LOCATIONS = {
  divinopolis: {
    pt: 'Divinópolis, Minas Gerais — Atendimento presencial mediante agendamento e consultoria remota para todo o Brasil.',
    en: 'Divinópolis, Minas Gerais — In-person consultations by appointment and remote advisory across Brazil.',
    mapUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=-44.915%2C-20.165%2C-44.865%2C-20.125&layer=mapnik'
  },
  jf: {
    pt: 'Juiz de Fora, Minas Gerais — Atendimento presencial mediante agendamento e projetos em âmbito nacional.',
    en: 'Juiz de Fora, Minas Gerais — In-person consultations by appointment and architectural projects nationwide.',
    mapUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=-43.375%2C-21.785%2C-43.325%2C-21.745&layer=mapnik'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Estado persistido da aplicação
  let currentLang = localStorage.getItem('sena_lang') || 'pt';
  if (!TRANSLATIONS[currentLang]) currentLang = 'pt';

  const savedTheme = localStorage.getItem('sena_theme');
  let currentTheme =
    savedTheme === 'dark' || savedTheme === 'light'
      ? savedTheme
      : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  let currentFilter = 'all';
  let currentCity = 'divinopolis';
  let activeProjectId = null;

  // Referências DOM
  const siteHeader = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const headerThemeToggle = document.getElementById('headerThemeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const metaThemeColor = document.getElementById('metaThemeColor');

  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const exhibitionView = document.getElementById('exhibitionView');
  const projectDetailView = document.getElementById('projectDetailView');

  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  const studioTabs = document.querySelectorAll('.studio-tab');
  const studioAddress = document.getElementById('studioAddress');
  const studioMap = document.getElementById('studioMap');

  const contactForm = document.getElementById('contactForm');
  const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');
  const formFeedback = document.getElementById('formFeedback');
  const directWaLink = document.getElementById('directWaLink');
  const floatingWaLink = document.getElementById('floatingWaLink');

  // Helper de tradução
  function t(key) {
    return (
      (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
      TRANSLATIONS.pt[key] ||
      key
    );
  }

  // =========================================================================
  // 1. GERENCIAMENTO DE TEMA (CLARO / ESCURO)
  // =========================================================================
  function applyTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('sena_theme', currentTheme);

    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        currentTheme === 'dark' ? '#141210' : '#F7F4EE'
      );
    }

    const ariaLabel =
      currentTheme === 'dark'
        ? t('theme_to_light_aria')
        : t('theme_to_dark_aria');

    if (headerThemeToggle) {
      headerThemeToggle.setAttribute('aria-label', ariaLabel);
      headerThemeToggle.setAttribute('title', ariaLabel);
    }

    if (mobileThemeToggle) {
      mobileThemeToggle.setAttribute('aria-label', ariaLabel);
      const statusText = mobileThemeToggle.querySelector('.theme-status-text');
      if (statusText) {
        statusText.textContent =
          currentTheme === 'dark'
            ? t('theme_light_label')
            : t('theme_dark_label');
      }
    }
  }

  function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  if (headerThemeToggle) {
    headerThemeToggle.addEventListener('click', toggleTheme);
  }
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', toggleTheme);
  }

  // =========================================================================
  // 2. GERENCIAMENTO DE IDIOMAS (PT-BR / EN)
  // =========================================================================
  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('sena_lang', currentLang);
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

    // Título e meta description
    document.title = t('page_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta_description'));

    // Atualizar botões de idioma (Header & Mobile)
    document.querySelectorAll('[data-lang-option]').forEach((btn) => {
      const isSelected = btn.dataset.langOption === currentLang;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-pressed', String(isSelected));
    });

    // Textos simples e atributo data-text (usado no brilho da marca)
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const translated = t(key);
      el.textContent = translated;
      if (el.hasAttribute('data-text')) {
        el.setAttribute('data-text', translated);
      }
    });

    // Textos com HTML interno (ex: <em>, <strong>, <br />)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      el.innerHTML = t(key);
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
    });

    // Atributos ARIA e Alt/Title
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      el.setAttribute('alt', t(el.dataset.i18nAlt));
    });

    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      el.setAttribute('title', t(el.dataset.i18nTitle));
    });

    // Atualizar aria-label do botão menu mobile conforme estado aberto/fechado
    const isMenuOpen = mobileDrawer.classList.contains('open');
    menuToggle.setAttribute(
      'aria-label',
      isMenuOpen ? t('menu_close_aria') : t('menu_open_aria')
    );

    // Atualizar texto do botão de tema no mobile
    applyTheme(currentTheme);

    // Atualizar links diretos do WhatsApp no idioma selecionado
    if (directWaLink) {
      directWaLink.href = `https://wa.me/5537988511549?text=${encodeURIComponent(
        t('wa_direct_msg')
      )}`;
    }
    if (floatingWaLink) {
      floatingWaLink.href = `https://wa.me/5537988511549?text=${encodeURIComponent(
        t('wa_floating_msg')
      )}`;
    }

    // Atualizar endereço da sede selecionada
    if (STUDIO_LOCATIONS[currentCity] && studioAddress) {
      studioAddress.textContent = STUDIO_LOCATIONS[currentCity][currentLang];
    }

    // Limpar feedback anterior se houver
    if (formFeedback) {
      formFeedback.textContent = '';
    }

    // Re-renderizar portfólio mantendo filtro atual
    renderPortfolio(currentFilter);

    // Se uma obra estiver aberta em tela cheia, re-renderizá-la preservando posição
    if (!projectDetailView.hidden && activeProjectId) {
      const currentScroll = window.scrollY;
      openProjectDetail(activeProjectId, false);
      window.scrollTo(0, currentScroll);
    }
  }

  document.querySelectorAll('[data-lang-option]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.dataset.langOption;
      if (selectedLang !== currentLang) {
        applyLanguage(selectedLang);
      }
    });
  });

  // =========================================================================
  // 3. PORTFÓLIO & PÁGINA INDIVIDUAL DA OBRA
  // =========================================================================
  function renderPortfolio(filter = 'all') {
    currentFilter = filter;
    const filtered =
      filter === 'all'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter((p) => p.category === filter);

    portfolioGrid.innerHTML = filtered
      .map((project, idx) => {
        const localized = project[currentLang] || project.pt;
        return `
        <article class="project-card reveal-step" data-project-id="${project.id}" tabindex="0" role="button" aria-label="${t('card_explore_aria')} ${localized.title}">
          <div class="project-frame">
            <img
              src="${project.cover}"
              alt="${localized.title} — ${localized.categoryLabel} — ${project.location}"
              loading="${idx === 0 ? 'eager' : 'lazy'}"
            />
          </div>
          <div class="project-meta-row">
            <h3 class="project-card-title">${localized.title}</h3>
            <span class="project-card-loc">${localized.categoryLabel} &bull; ${project.location}</span>
          </div>
        </article>
      `;
      })
      .join('');

    observeReveals();
    attachProjectListeners();
  }

  function openProjectDetail(projectId, shouldScrollTop = true) {
    const index = PROJECTS_DATA.findIndex((p) => p.id === projectId);
    if (index === -1) return;

    activeProjectId = projectId;
    const project = PROJECTS_DATA[index];
    const localized = project[currentLang] || project.pt;

    const prevProject =
      PROJECTS_DATA[(index - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
    const nextProject = PROJECTS_DATA[(index + 1) % PROJECTS_DATA.length];
    const prevLocalized = prevProject[currentLang] || prevProject.pt;
    const nextLocalized = nextProject[currentLang] || nextProject.pt;

    projectDetailView.innerHTML = `
      <div class="detail-topbar">
        <div class="container">
          <button type="button" class="back-to-gallery" id="backToGalleryBtn">
            ${t('detail_back')}
          </button>
        </div>
      </div>

      <header class="detail-hero-header container">
        <span class="eyebrow">${localized.categoryLabel} &mdash; ${project.location}</span>
        <h1 class="detail-title">${localized.title}</h1>

        <div class="detail-summary-grid">
          <p class="detail-narrative">${localized.narrative}</p>
          <dl class="ficha-tecnica">
            <div class="ficha-item">
              <dt>${t('detail_loc_label')}</dt>
              <dd>${project.location}</dd>
            </div>
            <div class="ficha-item">
              <dt>${t('detail_year_label')}</dt>
              <dd>${project.year}</dd>
            </div>
            <div class="ficha-item">
              <dt>${t('detail_area_label')}</dt>
              <dd>${project.area}</dd>
            </div>
            <div class="ficha-item">
              <dt>${t('detail_typology_label')}</dt>
              <dd>${localized.typology}</dd>
            </div>
          </dl>
        </div>
      </header>

      <section class="detail-sequence container" aria-label="${t('detail_seq_aria')}">
        ${project.gallerySrcs
          .map((src, i) => {
            const caption = localized.captions[i] || '';
            return `
            <figure class="detail-photo-frame reveal-step" data-zoom-src="${src}" data-zoom-caption="${localized.title} — ${caption}">
              <img src="${src}" alt="${localized.title} — ${caption}" loading="lazy" />
              <figcaption class="detail-photo-caption">
                <span>${caption}</span>
                <span>${t('detail_zoom')}</span>
              </figcaption>
            </figure>
          `;
          })
          .join('')}
      </section>

      <nav class="project-pagination" aria-label="${t('detail_nav_aria')}">
        <div class="container" style="display:flex; justify-content:space-between; align-items:center; width:100%; gap:1.5rem;">
          <button type="button" class="page-nav-btn prev" data-nav-project="${prevProject.id}">
            <span class="page-nav-label">${t('detail_prev')}</span>
            <span class="page-nav-title">${prevLocalized.title}</span>
          </button>

          <button type="button" class="page-nav-btn next" data-nav-project="${nextProject.id}">
            <span class="page-nav-label">${t('detail_next')}</span>
            <span class="page-nav-title">${nextLocalized.title}</span>
          </button>
        </div>
      </nav>
    `;

    exhibitionView.hidden = true;
    projectDetailView.hidden = false;
    siteHeader.classList.add('light-mode');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    history.replaceState(null, '', `#obra/${project.id}`);

    observeReveals();

    document
      .getElementById('backToGalleryBtn')
      .addEventListener('click', () => {
        closeProjectDetail('obras');
      });

    projectDetailView.querySelectorAll('[data-nav-project]').forEach((btn) => {
      btn.addEventListener('click', () =>
        openProjectDetail(btn.dataset.navProject, true)
      );
    });

    projectDetailView.querySelectorAll('[data-zoom-src]').forEach((frame) => {
      frame.addEventListener('click', () => {
        openLightbox(frame.dataset.zoomSrc, frame.dataset.zoomCaption);
      });
    });
  }

  function closeProjectDetail(targetHash = '') {
    activeProjectId = null;
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
    document.querySelectorAll('.project-card').forEach((card) => {
      const id = card.dataset.projectId;
      card.addEventListener('click', () => openProjectDetail(id, true));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectDetail(id, true);
        }
      });
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderPortfolio(btn.dataset.filter);
    });
  });

  // =========================================================================
  // 4. MENU MOBILE (ABERTURA, BOTÃO X, CLIQUE FORA, ESC E SCROLL LOCK)
  // =========================================================================
  function syncBodyScrollLock() {
    const isMenuOpen = mobileDrawer.classList.contains('open');
    const isLightboxOpen = !lightboxModal.hidden;
    document.body.classList.toggle('no-scroll', isMenuOpen || isLightboxOpen);
  }

  function toggleMobileMenu(forceState) {
    const isOpen =
      typeof forceState === 'boolean'
        ? forceState
        : !mobileDrawer.classList.contains('open');

    mobileDrawer.classList.toggle('open', isOpen);
    if (mobileBackdrop) {
      mobileBackdrop.classList.toggle('open', isOpen);
      mobileBackdrop.setAttribute('aria-hidden', String(!isOpen));
    }

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? t('menu_close_aria') : t('menu_open_aria')
    );
    mobileDrawer.setAttribute('aria-hidden', String(!isOpen));

    syncBodyScrollLock();

    if (isOpen && mobileCloseBtn) {
      mobileCloseBtn.focus();
    } else if (
      !isOpen &&
      document.activeElement &&
      mobileDrawer.contains(document.activeElement)
    ) {
      menuToggle.focus();
    }
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
  });

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu(false);
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => {
      toggleMobileMenu(false);
    });
  }

  // Fechar menu automaticamente ao clicar em qualquer link de navegação
  document.querySelectorAll('.nav-link, .mobile-link, .brand').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (mobileDrawer.classList.contains('open')) {
        toggleMobileMenu(false);
      }
      if (href && href.startsWith('#')) {
        const targetId = href.slice(1);
        if (!projectDetailView.hidden) {
          e.preventDefault();
          closeProjectDetail(targetId);
        }
      }
    });
  });

  // Fechar menu mobile automaticamente ao redimensionar para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200 && mobileDrawer.classList.contains('open')) {
      toggleMobileMenu(false);
    }
  });

  // =========================================================================
  // 5. CABEÇALHO ADAPTATIVO AO SCROLL
  // =========================================================================
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

  // =========================================================================
  // 6. RITMO DE GALERIA (INTERSECTION OBSERVER)
  // =========================================================================
  function observeReveals() {
    const elements = document.querySelectorAll('.reveal-step:not(.is-visible)');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // =========================================================================
  // 7. LIGHTBOX / ZOOM INTERATIVO
  // =========================================================================
  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    lightboxCaption.textContent = caption;
    lightboxModal.hidden = false;
    syncBodyScrollLock();
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightboxModal.hidden = true;
    lightboxImg.src = '';
    syncBodyScrollLock();
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  // Tecla Escape fecha Lightbox ou Menu Mobile
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!lightboxModal.hidden) {
        closeLightbox();
      } else if (mobileDrawer.classList.contains('open')) {
        toggleMobileMenu(false);
      }
    }
  });

  // =========================================================================
  // 8. ALTERNADOR DE SEDES (DIVINÓPOLIS / JUIZ DE FORA)
  // =========================================================================
  studioTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      studioTabs.forEach((tBtn) => {
        tBtn.classList.remove('active');
        tBtn.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      currentCity = tab.dataset.city;
      const data = STUDIO_LOCATIONS[currentCity];
      if (data) {
        studioAddress.textContent = data[currentLang];
        studioMap.src = data.mapUrl;
      }
    });
  });

  // =========================================================================
  // 9. FORMULÁRIO EDITORIAL & INTEGRAÇÃO DIRETA WHATSAPP BUSINESS
  // =========================================================================
  function buildWhatsAppUrl() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const text = [
      t('wa_form_greeting'),
      nome ? `${t('wa_form_name')}: ${nome}` : '',
      email ? `${t('wa_form_email')}: ${email}` : '',
      whatsapp ? `${t('wa_form_phone')}: ${whatsapp}` : '',
      mensagem ? `${t('wa_form_project')}: ${mensagem}` : ''
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/5537988511549?text=${encodeURIComponent(text)}`;
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      formFeedback.textContent = t('form_error');
      contactForm.reportValidity();
      return;
    }
    formFeedback.textContent = t('form_success');
    contactForm.reset();
  });

  sendWhatsappBtn.addEventListener('click', () => {
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  });

  // =========================================================================
  // INICIALIZAÇÃO GLOBAL
  // =========================================================================
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  updateHeaderOnScroll();

  if (window.location.hash.startsWith('#obra/')) {
    const initialId = window.location.hash.replace('#obra/', '');
    openProjectDetail(initialId, true);
  }
});