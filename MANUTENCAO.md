# 📝 Guia de Manutenção do Portfólio

Este documento explain como manter e atualizar seu portfólio.

## 📅 Calendário de Manutenção

- **Mensal**: Revisão de conteúdo
- **Trimestral**: Otimização técnica
- **Anual**: Redesign e modernização

---

## 🔄 Atualizações Frequentes

### Adicionar Nova Experiência Profissional

No arquivo `index.html`, procure por `<!-- Experience Section -->` e adicione:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Cargo/Posição</h3>
        <p class="company">Empresa | Projeto</p>
        <p class="period">Mês AAAA – Mês AAAA</p>
        <ul class="responsibilities">
            <li>Responsabilidade 1</li>
            <li>Responsabilidade 2</li>
            <li>Responsabilidade 3</li>
        </ul>
    </div>
</div>
```

### Adicionar Nova Habilidade

Procure por `<!-- Skills Section -->` e locate `.skills-list`:

```html
<div class="skill-item">
    <span class="skill-name">Nome da Habilidade</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

Ou para soft skills (tags):

```html
<span class="skill-tag">Nova Habilidade</span>
```

### Adicionar ou Atualizar Curso

Procure por `<!-- Education Section -->` e .courses-grid:

```html
<div class="course-card">
    <div class="course-badge">Curso</div>
    <h4>Nome do Curso</h4>
    <p class="institution">Instituição</p>
    <p class="period">Mês AAAA – Mês AAAA</p>
    <p class="description">
        Descrição do curso...
    </p>
</div>
```

---

## 🎨 Mudanças de Design

### Alterar Tema de Cores

Edite `styles.css`, no início do arquivo:

```css
:root {
    --primary-color: #6c5ce7;     /* Mude essa cor */
    --secondary-color: #a29bfe;   /* E essa */
    --accent-color: #00b894;      /* E essa */
}
```

**Paletas recomendadas:**

```
TECH AZUL:
--primary-color: #0084ff;
--secondary-color: #0099ff;
--accent-color: #00d4ff;

MODERNO VERDE:
--primary-color: #2dd36f;
--secondary-color: #3dd585;
--accent-color: #e6f7ff;

ELEGANTE ROXO:
--primary-color: #9c27b0;
--secondary-color: #e1bee7;
--accent-color: #ff6b9d;
```

### Alterar Fonte

No `styles.css`, encontre `body`:

```css
body {
    font-family: 'Poppins', sans-serif;  /* Mude a fonte */
}
```

Adicione no HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

### Adicionar Seção Nova

Exemplo de template:

```html
<!-- Nova Seção -->
<section class="nova-secao" id="nova">
    <div class="container">
        <h2>Título da Seção</h2>
        <!-- Conteúdo aqui -->
    </div>
</section>
```

Adicione no CSS:

```css
.nova-secao {
    padding: 80px 20px;
    background: white;
}
```

Adicione no menu (`.nav-links`):

```html
<li><a href="#nova">Nova Seção</a></li>
```

---

## 🖼️ Adicionar Imagens

### Criar Pasta de Assets

1. Crie uma pasta `assets/` na raiz
2. Dentro: `assets/images/`
3. Copie suas imagens lá

### Adicionar Imagem de Perfil

```html
<div class="hero-illustration">
    <img src="assets/images/perfil.jpg" alt="Foto de Perfil" class="profile-image">
</div>
```

CSS:
```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--shadow-lg);
}
```

### Otimizar Imagens

1. **Comprimir**: Use [TinyPNG](https://tinypng.com)
2. **Converter**: Use WebP para melhor performance
3. **Tamanho**: Max 500KB por imagem
4. **Dimensões**: Mínimo 500px width

---

## 🔐 Atualizar Contatos

### Mudar Email

1. No HTML, procure por `vitornunes.ori@gmail.com`
2. Substitua por seu email
3. Locais: Email link, contato, footer

### Mudar Telefone

1. Procure por `(11) 998519644`
2. Substitua no `.contact-card` e social links

### Mudar Links Sociais

Procure por:
```html
<a href="https://www.linkedin.com/in/vitor-nunes-qa/">
<a href="https://github.com/VitorNunes1">
```

Substitua pelos seus links.

---

## ✏️ Atualizar Descrição

### Bio Profissional

Procure no HTML:
```html
<p class="hero-description">
    Profissional apaixonado por qualidade...
</p>
```

### Descrição da Seção Sobre

```html
<p>
    Sou um profissional com experiência em...
</p>
```

Atualize esse texto conforme sua evolução profissional.

---

## 🚀 Otimizações de Performance

### Verificar Performance

1. Google PageSpeed Insights
2. GTmetrix
3. WebPageTest

### Melhorias Comuns

```css
/* Usar will-change com moderação */
.elemento-animado {
    will-change: transform;
}

/* Lazy load em imagens */
<img src="image.jpg" loading="lazy" alt="...">

/* Preload de recursos críticos */
<link rel="preload" as="image" href="critical.jpg">
```

---

## 🔍 SEO - Mantendo Otimizado

### Meta Tags Importantes

No `<head>` do HTML:

```html
<!-- Básico -->
<meta name="description" content="Descrição breve sobre você">
<meta name="keywords" content="QA, Desenvolvedor, Python, Java">

<!-- Open Graph (Redes Sociais) -->
<meta property="og:title" content="Vitor Nunes - QA & Desenvolvedor">
<meta property="og:description" content="Portfólio profissional...">
<meta property="og:image" content="https://seu-site.com/imagem.jpg">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Vitor Nunes - QA & Desenvolvedor">
```

### Google Analytics

Adicione no final do `</body>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SEUCODIGO"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SEUCODIGO');
</script>
```

### Sitemap.xml

Crie arquivo `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seu-dominio.com/</loc>
    <lastmod>2025-02-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 🐛 Debugging

### Console Errors

Abra F12 (DevTools) e verifique:
- Console aba
- Network aba (imagens 404?)
- Performance aba

### Links Quebrados

```javascript
// Adicione no console para testar:
document.querySelectorAll('a').forEach(link => {
    if (!link.href.includes('#') && !link.href.startsWith('http')) {
        console.warn('Link relativo', link.href);
    }
});
```

---

## 📱 Testar Responsividade

1. **F12** → Toggle device toolbar
2. Testar em: Mobile, Tablet, Desktop
3. Testar em diferentes navegadores
4. Testar em dispositivos reais

---

## 🔄 Versionamento com Git

### Workflow básico:

```bash
# 1. Fazer alterações
# 2. Ver status
git status

# 3. Adicionar mudanças
git add .

# 4. Fazer commit
git commit -m "Descrição da mudança"

# 5. Enviar para repositório
git push origin main
```

### Mensagens de commit boas:

```
❌ Ruim: "alterações"
✅ Bom: "Feat: Adiciona experiência profissional em 2025"

❌ Ruim: "fix"
✅ Bom: "Fix: Corrige layout responsivo em mobile"

❌ Ruim: "update"
✅ Bom: "Style: Atualiza paleta de cores do tema"
```

---

## 📊 Checklist Mensal

- [ ] Revisar conteúdo de experiências
- [ ] Atualizar habilidades
- [ ] Verificar links externos
- [ ] Verificar desempenho/performance
- [ ] Ver analytics
- [ ] Backup do código
- [ ] Atualizar README se necessário

## 📊 Checklist Trimestral

- [ ] Otimização de performance
- [ ] Revisão de SEO
- [ ] Atualizar meta descriptions
- [ ] Verificar velocidade de carregamento
- [ ] Fazer backup completo
- [ ] Revisar certificados/cursos novos

## 📊 Checklist Anual

- [ ] Análise geral do design
- [ ] Atualizar tema/cores se necessário
- [ ] Renovar certificados antigos
- [ ] Revisar projetos antigos
- [ ] Considerar novo layout
- [ ] Atualizar seção de sobre

---

## 🆘 Problemas Comuns e Soluções

### Problema: Site renderiza lentamente
**Solução:** Comprimir imagens, usar defer em scripts

### Problema: Elementos fora do lugar em mobile
**Solução:** Revisar media queries, testar com DevTools

### Problema: Links não funcionam
**Solução:** Verificar IDs das seções correspondem aos href

### Problema: Estilos antigos aparecem mesmo após mudança
**Solução:** Limpar cache (Ctrl+Shift+Del), fazer push novamente

---

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GitHub Docs](https://docs.github.com/)

---

**Última atualização:** Fevereiro 2025

Mantenha seu portfólio atualizado e ele continuará atraindo oportunidades! 🚀
