# 🌐 Guia de Deploy do Portfólio

Este guia explica como colocar seu portfólio online de forma gratuita ou com baixo custo.

## 📋 Opções de Deploy

### 1️⃣ GitHub Pages (GRÁTIS) ⭐ RECOMENDADO

**Vantagens:**
- Totalmente grátis
- Vinculado ao seu GitHub
- URL personalizada
- HTTPS automático

**Passos:**

1. Crie um repositório no GitHub chamado `seu-usuario.github.io`
   - Exemplo: `vitornunes1.github.io`

2. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-usuario.github.io.git
   ```

3. Coloque seus arquivos (index.html, styles.css, script.js, etc.) nesse repositório

4. Faça commit e push:
   ```bash
   git add .
   git commit -m "Inicial commit - Portfólio"
   git push origin main
   ```

5. Acesse: `https://seu-usuario.github.io`

**Adicione domínio customizado (opcional):**
- Vá em Settings → Pages
- Adicione seu domínio personalizado
- Crie um arquivo CNAME na raiz: `seu-dominio.com`

---

### 2️⃣ Vercel (GRÁTIS)

**Vantagens:**
- Deploy em 1 clique
- Performance excepcional
- Automático ao fazer push

**Passos:**

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. Pronto! Seu site está online

**URL automática:** `seu-projeto.vercel.app`

---

### 3️⃣ Netlify (GRÁTIS)

**Vantagens:**
- Deploy fácil
- Preview automático
- Redirects e headers customizados

**Passos:**

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Add new site"
3. Escolha "Deploy manually" ou importe do GitHub
4. Arraste seus arquivos
5. Pronto!

**URL automática:** `seu-site.netlify.app`

---

### 4️⃣ Hospedagem Compartilhada (Pagante)

**Servidores recomendados:**
- Hostinger - R$ 9-20/mês
- Bluehost - $2.95/mês
- SiteGround - R$ 30-50/mês
- GoDaddy - R$ 20-40/mês

**Passos:**
1. Contratar hospedagem
2. Fazer upload via FTP (FileZilla)
3. Acessar via seu domínio

---

### 5️⃣ VPS (Para quem quer mais controle)

**Opções:**
- DigitalOcean - $4-6/mês
- Linode - $5/mês
- AWS (free tier) - Grátis (1 ano)
- Google Cloud - Grátis (12 meses)

**Requirements:** Conhecimento de terminal/SSH

---

## 🚀 Workflow de Deploy Recomendado

```
Desenvolvendo Localmente
        ↓
   Git Commit
        ↓
   Git Push
        ↓
 GitHub Pages/Vercel/Netlify
        ↓
   Automático Deploy
        ↓
   Site Online!
```

---

## 🔧 Preparação para Deploy

Antes de fazer upload, certifique-se de:

- ✅ Todos os links estão funcionando
- ✅ Sem console errors (F12)
- ✅ Responsivo em mobile (F12 → mobile view)
- ✅ Imagens otimizadas
- ✅ Meta tags preenchidas
- ✅ Favicon adicionado

### Checklist de Deployment:

```html
<!-- index.html -->
<head>
    <!-- Meta Tags para SEO -->
    <meta name="description" content="Portfólio de Vitor Nunes - QA & Desenvolvedor">
    <meta name="keywords" content="QA, Desenvolvedor, Testes, Automação">
    <meta name="author" content="Vitor Nunes">
    
    <!-- Open Graph para Redes Sociais -->
    <meta property="og:title" content="Vitor Nunes - QA & Desenvolvedor">
    <meta property="og:description" content="Portfólio profissional de Vitor Nunes">
    <meta property="og:image" content="url-da-imagem">
    <meta property="og:type" content="website">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    
    <!-- Viewport para Mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

---

## 📊 Comparação de Plataformas

| Plataforma | Custo | Facilidade | Performance | Recomendado |
|-----------|-------|-----------|-------------|------------|
| GitHub Pages | Grátis | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ |
| Vercel | Grátis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ |
| Netlify | Grátis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ |
| Hostinger | R$9-20 | ⭐⭐⭐ | ⭐⭐⭐⭐ | ️ |
| DigitalOcean | $4-6 | ⭐⭐ | ⭐⭐⭐⭐⭐ |  |

**Recomendação:** GitHub Pages + Vercel (temos 2 ambientes) ou só Vercel/Netlify

---

## 🎯 Domínio Personalizado

### Comprar Domínio:
- Namecheap.com
- GoDaddy
- Registro.com
- Google Domains

### Configurar DNS (GitHub Pages):

1. Vá em seu registrador
2. Edite os registros DNS
3. Aponte para GitHub Pages:
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   ```

4. Ou use CNAME (mais fácil):
   ```
   CNAME: seu-usuario.github.io
   ```

---

## 📈 After Deploy - Analytics

### Adicione Google Analytics:

```html
<!-- No final do </body> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Ferramentas recomendadas:
- Google Analytics
- Hotjar (heatmaps)
- Vercel Analytics

---

## 🔒 Segurança

- ✅ HTTPS automático (todas as plataformas)
- ✅ Sem dados sensíveis no frontend
- ✅ Validate forms
- ✅ CORS headers

---

## 🚨 Troubleshooting

### Site não aparece?
1. Espere 5-10 minutos
2. Limpe o cache (Ctrl+Shift+Del)
3. Verifique as configurações
4. Veja os logs de deploy

### Imagens não carregam?
1. Verifique caminho relativo
2. Use `/assets/imagem.jpg` em vez de `assets/imagem.jpg`

### Estilos não aplicam?
1. Limpe cache
2. Verifique nome do arquivo CSS
3. Rode `git push` novamente

### Links não funcionam?
1. Verifique `href="#secao"`
2. Confirme IDs das seções

---

## 📱 Testar Antes de Deploy

```bash
# Se tiver Python instalado:
python -m http.server 8000

# Se tiver Node.js:
npx serve
```

Depois acesse: `http://localhost:8000`

---

## ✨ Próximos Passos

1. Deploy em produção
2. Monitorar analytics
3. Coletar feedback
4. Atualizar conteúdo regularmente
5. Manter links atualizados

---

**Parabéns! Seu portfólio está online! 🎉**

Para dúvidas, consulte a documentação oficial das plataformas.
