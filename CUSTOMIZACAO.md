/* ============================================
   GUIA DE CUSTOMIZAÇÃO
   ============================================ */

/*
   Este arquivo explica como customizar o portfólio
   de forma rápida e fácil.
*/

/* ============================================
   1. MUDANÇA DE CORES PRINCIPAIS
   ============================================ */

/* 
   Para mudar as cores principais, edite essas variáveis em styles.css:
   
   :root {
       --primary-color: #6c5ce7;      // Cor principal - botões, títulos destacados
       --secondary-color: #a29bfe;     // Cor secundária - gradientes
       --accent-color: #00b894;        // Cor de destaque - elementos especiais
   }
   
   Exemplos de paletas legais:
   
   PALETA AZUL MODERNO:
   --primary-color: #0084ff;
   --secondary-color: #0099ff;
   --accent-color: #00d4ff;
   
   PALETA VERDE TECH:
   --primary-color: #00d084;
   --secondary-color: #00e6a0;
   --accent-color: #ff6b6b;
   
   PALETA DARK ELEGANTE:
   --primary-color: #af40ff;
   --secondary-color: #e040fb;
   --accent-color: #ff6b9d;
*/

/* ============================================
   2. MUDANÇA DE FONTES
   ============================================ */

/*
   Por padrão usa: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
   
   Para mudar, substitua em body:
   
   body {
       font-family: 'Roboto', sans-serif;  // Google Font
       // ou
       font-family: 'Inter', sans-serif;   // Google Font Moderna
       // ou
       font-family: 'Poppins', sans-serif; // Google Font Moderna
   }
   
   Para usar Google Fonts, adicione no HTML <head>:
   <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
*/

/* ============================================
   3. ADICIONAR LOGO / AVATAR
   ============================================ */

/*
   No arquivo styles.css, customize a seção .logo:
   
   .logo {
       font-size: 1.8rem;
       font-weight: 700;
       color: var(--primary-color);
       letter-spacing: 2px;
   }
   
   Ou substitua por uma imagem:
   
   .logo {
       width: 50px;
       height: 50px;
       background: url('assets/logo.png') center/contain no-repeat;
   }
*/

/* ============================================
   4. ADICIONAR SEÇÃO COM IMAGEM
   ============================================ */

/*
   Exemplo de seção com imagem responsiva:
   
   HTML:
   <section class="portfolio-section">
       <div class="container">
           <h2>Meus Projetos</h2>
           <div class="projects-grid">
               <div class="project-card">
                   <img src="assets/projeto1.jpg" alt="Descrição">
                   <h3>Nome do Projeto</h3>
               </div>
           </div>
       </div>
   </section>
   
   CSS:
   .projects-grid {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
       gap: 2rem;
   }
   
   .project-card {
       border-radius: 15px;
       overflow: hidden;
       box-shadow: var(--shadow);
   }
   
   .project-card img {
       width: 100%;
       height: 250px;
       object-fit: cover;
   }
*/

/* ============================================
   5. ADICIONAR ÍCONES CUSTOMIZADOS
   ============================================ */

/*
   O portfólio usa Font Awesome. Exemplos:
   
   <i class="fas fa-code"></i>           // Ícone de código
   <i class="fas fa-database"></i>       // Ícone de banco de dados
   <i class="fas fa-robot"></i>          // Ícone de IA
   <i class="fas fa-flask"></i>          // Ícone de teste
   <i class="fas fa-cog"></i>            // Ícone de engrenagem
   <i class="fas fa-server"></i>         // Ícone de servidor
   
   Para ver mais: https://fontawesome.com/icons
*/

/* ============================================
   6. ADICIONAR ANIMAÇÕES CUSTOMIZADAS
   ============================================ */

/*
   Exemplo de animação customizada:
   
   @keyframes slideIn {
       from {
           opacity: 0;
           transform: translateX(-100px);
       }
       to {
           opacity: 1;
           transform: translateX(0);
       }
   }
   
   .elemento {
       animation: slideIn 0.6s ease-out;
   }
*/

/* ============================================
   7. DARK MODE COMPLETO
   ============================================ */

/*
   Para adicionar dark mode completo, adicione em styles.css:
   
   body.dark-mode {
       --dark-bg: #ffffff;
       --light-bg: #1a1a1a;
       --text-dark: #ffffff;
       --text-light: #cccccc;
   }
   
   E em script.js, o dark mode já está preparado!
   Basta descomentar a função toggleDarkMode()
*/

/* ============================================
   8. ADICIONAR SEÇÃO DE BLOG
   ============================================ */

/*
   HTML:
   <section class="blog" id="blog">
       <div class="container">
           <h2>Últimas Postagens</h2>
           <div class="blog-grid">
               <article class="blog-post">
                   <h3>Título do Post</h3>
                   <p class="date">15 de Fevereiro, 2025</p>
                   <p>Resumo do post...</p>
                   <a href="#" class="read-more">Ler Mais</a>
               </article>
           </div>
       </div>
   </section>
   
   CSS:
   .blog-grid {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
       gap: 2rem;
   }
   
   .blog-post {
       padding: 2rem;
       background: #f8f9fa;
       border-radius: 15px;
       transition: var(--transition);
   }
   
   .blog-post:hover {
       transform: translateY(-5px);
       box-shadow: var(--shadow);
   }
*/

/* ============================================
   9. ADICIONAR FORMULÁRIO DE CONTATO
   ============================================ */

/*
   HTML:
   <form class="contact-form" id="contact-form">
       <input type="text" placeholder="Seu Nome" required>
       <input type="email" placeholder="Seu Email" required>
       <textarea placeholder="Sua Mensagem" required></textarea>
       <button type="submit" class="btn btn-primary">Enviar</button>
   </form>
   
   CSS:
   .contact-form {
       display: flex;
       flex-direction: column;
       gap: 1rem;
       max-width: 600px;
       margin: 0 auto;
   }
   
   .contact-form input,
   .contact-form textarea {
       padding: 12px 20px;
       border: 2px solid var(--border-color);
       border-radius: 8px;
       font-family: inherit;
       transition: var(--transition);
   }
   
   .contact-form input:focus,
   .contact-form textarea:focus {
       outline: none;
       border-color: var(--primary-color);
       box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.1);
   }
*/

/* ============================================
   10. ADICIONAR CARRROSSEL DE TESTIMONIALS
   ============================================ */

/*
   HTML:
   <section class="testimonials">
       <div class="container">
           <h2>Depoimentos</h2>
           <div class="testimonials-slider">
               <div class="testimonial-card">
                   <p class="text">"Excelente trabalho..."</p>
                   <p class="author">- Nome da Pessoa</p>
               </div>
           </div>
       </div>
   </section>
   
   Para criar um carrossel funcional, recomendo usar
   Swiper.js ou similar
*/

/* ============================================
   DICAS GERAIS
   ============================================ */

/*
   1. USE GOOGLE FONTS:
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
   
   2. OTIMIZE IMAGENS:
      - Use JPG para fotos
      - Use PNG para gráficos/logos
      - Comprima com TinyPNG
   
   3. ADICIONE FAVICON:
      <link rel="icon" type="image/x-icon" href="favicon.ico">
   
   4. SITE MAP:
      Crie um sitemap.xml para SEO
   
   5. ROBOTS.TXT:
      Crie um robots.txt para indexação
   
   6. META TAGS PARA SEO:
      <meta name="description" content="...">
      <meta name="keywords" content="...">
      <meta name="author" content="Vitor Nunes">
   
   7. OPEN GRAPH (para redes sociais):
      <meta property="og:title" content="">
      <meta property="og:image" content="">
      <meta property="og:description" content="">
*/
