Markdown
# Sena Arquitetos Associados — Website Institucional

![HTML5](https://img.shields.io/badge/HTML5-Sem%C3%A2ntico-1C1A17?style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-Design%20Tokens-8F5F39?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-744C2D?style=flat-square)
![Responsivo](https://img.shields.io/badge/Layout-Mobile%20First-665B50?style=flat-square)
![Deploy](https://img.shields.io/badge/Deploy-Vercel%20Ready-12100E?style=flat-square)

Plataforma digital institucional desenvolvida para o escritório **Sena Arquitetos Associados**, referência em arquitetura e design de interiores com mais de 30 anos de mercado, sedes em **Divinópolis** e **Juiz de Fora (MG)** e atuação em todo o Brasil.

---

## Conceito & Experiência ("Caminhada pela Galeria")

O projeto foi concebido para ir além de um site institucional convencional, traduzindo a arquitetura do escritório em uma experiência espacial e contemplativa:

* **Ritmo de Exposição:** Seções em tela cheia (*full-bleed*) reveladas suavemente conforme a rolagem via `IntersectionObserver`, utilizando desaceleração longa (`cubic-bezier(0.22, 1, 0.36, 1)`) sem efeitos invasivos.
* **Fotografia como Protagonista:** Imagens em alta resolução apresentadas com cores originais preservadas (sem filtros artificiais), acompanhadas de textos curtos e editoriais que funcionam como legendas de exposição.
* **Continuidade de Marca:** Identidade visual sincronizada com o Instagram oficial do escritório (`@senaarquitetos`), refletindo a materialidade recorrente de suas obras — pedra natural, madeira, concreto aparente e iluminação indireta quente.

---

## Sistema de Design & Tokens (`style.css`)

Toda a identidade visual está centralizada em variáveis CSS globais no seletor `:root`, garantindo consistência cromática e facilidade de manutenção.

### Escala Cromática

| Grupo | Tokens | Valores Hex | Papel na Interface |
| :--- | :--- | :--- | :--- |
| **Branco Quente & Off-White** | `--token-warm-white`, `--token-offwhite` | `#FAF8F4`, `#F7F4EE` | Fundos claros de leitura e tipografia sobre superfícies escuras |
| **Areia & Bege Travertino** | `--token-sand-light`, `--token-sand`, `--token-beige` | `#F1ECE3`, `#E6DDD0`, `#DDD1C0` | Galeria de obras, seção institucional e card de formulário |
| **Fendi & Taupe** | `--token-fendi`, `--token-taupe`, `--token-taupe-dark` | `#C7B9A7`, `#9E8F7E`, `#665B50` | Fios arquitetônicos, divisores sutis e legendas secundárias |
| **Caramelo, Madeira & Espresso** | `--token-caramel`, `--token-wood`, `--token-espresso` | `#8F5F39`, `#744C2D`, `#3B3129` | Destaques editoriais, numeração romana e estados de hover |
| **Iluminação Âmbar** | `--token-amber`, `--token-amber-glow` | `#C68B50`, `#D9A166` | Assinatura de luz indireta em filetes gráficos e acentos pontuais |
| **Grafite & Preto Autoral** | `--token-graphite`, `--token-black` | `#1C1A17`, `#12100E` | Abertura cinematográfica, seção Reconhecimento, botões e textos |

### Alternância de Superfícies
Para criar profundidade sem tornar a navegação cansativa ou monocromática, as seções alternam ritmicamente entre fundos claros, minerais e escuros:
1. **Abertura (Hero):** Grafite Noturno (`#12100E`) com proteção radial localizada para contraste tipográfico.
2. **I. Essência:** Off-White Quente (`#F7F4EE`) com borda vertical em fendi.
3. **II. Obras:** Areia Suave (`#F1ECE3`) para valorizar texturas arquitetônicas sem reflexo excessivo.
4. **III. O Escritório:** Bege Travertino (`#E6DDD0`).
5. **IV. Serviços:** Off-White Quente (`#F7F4EE`) com destaque em areia ao passar o cursor.
6. **V. Reconhecimento:** Grafite Profundo (`#1C1A17`) com tipografia clara e acentos âmbar.
7. **VI. Contato:** Areia Suave (`#F1ECE3`) com formulário em Bege Travertino (`#E6DDD0`).

### Tipografia
* **Editorial / Títulos:** `Cormorant Garamond` (`300`, `400`, `500` e itálico).
* **Interface / Textos / Fichas Técnicas:** `Inter` (`300`, `400`, `500` com `letter-spacing` amplo em caixa-alta).

---

## Arquitetura Completa do Site

* **Cabeçalho Adaptativo & Drawer Mobile:** Inicia transparente sobre a fotografia de abertura e assume fundo translúcido com desfoque (`backdrop-filter: blur(12px)`) ao rolar a página. Em telas menores, aciona um menu drawer em tela cheia acessível por teclado.
* **1. Abertura Cinematográfica (`#inicio`):** Enquadramento *full-bleed* com animação sutil de escala (`heroBreath`), chamada de posicionamento e convite ao scroll.
* **2. Essência (`#curadoria`):** Manifesto institucional que sintetiza os mais de 30 anos de atuação do escritório.
* **3. Acervo de Obras (`#obras`) & Galeria Individual (`#obra/<id>`):**
  * Grid assimétrico de 12 colunas no desktop e coluna única fluida no mobile.
  * Filtro instantâneo por categoria (*Todas*, *Residencial*, *Comercial & Construtoras*).
  * Roteamento dinâmico via hash (`#obra/residencial-terrazo`, `#obra/casa-bonita`, `#obra/casa-cubo`, `#obra/apartamento-panoramico`, `#obra/apartamento-garage-studio`) que abre a página dedicada da obra sem recarregar o navegador.
  * Cada página de obra exibe narrativa conceitual, **Ficha Técnica** (localização, ano, área construída e tipologia), sequência fotográfica em tela cheia, **Lightbox interativo com zoom** e navegação circular (*Obra Anterior* / *Próxima Obra*).
* **4. O Escritório & Corpo Técnico (`#escritorio`):** História da fundação pela arquiteta **Miriam Sena** e apresentação editorial da equipe (*Miriam Sena, Jéssica Nogueira, Natália Sena, Cassia Sena, Vanessa Plácido, Maria Clara Aguiar, Gabriel Portes e Paulo Palmeira*).
* **5. Serviços (`#servicos`):** Detalhamento editorial das 6 disciplinas do escritório:
  1. *Viabilidade de Terreno* (Investidores, Construtoras e Incorporadoras)
  2. *Escolha do Terreno*
  3. *Projeto Arquitetônico Executivo*
  4. *Projeto Legal* (Prefeituras e Vigilância Sanitária)
  5. *Design de Interiores*
  6. *Acompanhamento de Obra*
* **6. Reconhecimento (`#reconhecimento`):** Linha do tempo editorial com anuários, mostras de arquitetura e homenagens.
* **7. Contato & Sedes (`#contato`):**
  * Canais diretos: WhatsApp Business `(37) 98851-1549`, e-mail `senaarquitetos@gmail.com`, Instagram `@senaarquitetos` e Facebook `/senaarquitetosassociados`.
  * Seletor interativo entre **Sede Divinópolis (MG)** e **Sede Juiz de Fora (MG)** com atualização dinâmica de endereço e mapa integrado.
  * Formulário com validação nativa e botão **Continuar no WhatsApp**, que compila automaticamente nome, e-mail, telefone e resumo do projeto na mensagem enviada ao atendimento.

---

## Estrutura de Arquivos

```text
sena-arquitetos-associados/
├── index.html      # Estrutura semântica, meta tags SEO/Open Graph e seções da exposição
├── style.css       # Tokens de cor, tipografia editorial, grid assimétrico, responsividade e animações
├── script.js       # Dados das obras, roteamento por hash, filtros, lightbox, sedes e integração WhatsApp
└── README.md       # Documentação completa do projeto
Execução Local e Manutenção
Rodando Localmente
O projeto foi construído em HTML5, CSS3 e JavaScript puro (Vanilla), sem dependências externas ou etapas de compilação:

Bash
# 1. Clone o repositório
git clone [https://github.com/brunoborjes/sena-arquitetos-associados.git](https://github.com/brunoborjes/sena-arquitetos-associados.git)

# 2. Acesse o diretório do projeto
cd sena-arquitetos-associados

# 3. Inicie um servidor local estático (ou abra o index.html diretamente no navegador)
npx serve .
Gerenciando Obras (script.js)
Para adicionar novos projetos ou substituir as fotografias pelo acervo oficial em alta resolução, edite o array PROJECTS_DATA em script.js:

JavaScript
{
  id: 'residencial-terrazo',
  title: 'Residencial Terrazo',
  category: 'residencial', // 'residencial' ou 'comercial'
  categoryLabel: 'Residencial',
  location: 'Divinópolis, MG',
  year: '2024',
  area: '680 m²',
  typology: 'Residência Unifamiliar',
  cover: 'assets/obras/residencial-terrazo/capa.webp',
  narrative: 'Texto conceitual da obra...',
  gallery: [
    {
      src: 'assets/obras/residencial-terrazo/01.webp',
      caption: '01 / Fachada posterior e integração com o espelho d’água'
    }
  ]
}
Boas práticas para imagens: Utilize arquivos .webp ou .jpg progressivos (largura recomendada de 2000px para capas/hero e 1600px para galerias internas) para equilibrar fidelidade visual e carregamento rápido.

Deploy
Compatível com hospedagem estática em Vercel, Netlify ou GitHub Pages, apontando o diretório raiz (/) sem necessidade de comandos de build.

Performance, SEO & Acessibilidade
Performance: Carregamento sob demanda (loading="lazy") nas fotografias abaixo da dobra e animações restritas a propriedades compostas por GPU (transform e opacity).

Acessibilidade (WCAG): Link de salto para conteúdo principal (skip-link), navegação integral por teclado (Enter/Space nos cards e Esc no modal), estados :focus-visible nítidos e atributos ARIA em abas, filtros, drawer e lightbox.

SEO: Estrutura hierárquica de cabeçalhos (h1 a h3), descrições textuais (alt) detalhadas em todas as fotografias e metadados Open Graph configurados.

Créditos
Arquitetura & Conteúdo: Sena Arquitetos Associados (@senaarquitetos)

UI/UX Design & Desenvolvimento Front-End: Bruno Borjes
