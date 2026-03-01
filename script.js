// ============================================
// MENU MOBILE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Fecha menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
        hamburger.classList.remove('active');
    });
});

// ============================================
// ANIMAÇÃO DE NÚMEROS (para seção SOBRE)
// ============================================

function animateCounter(element, target, duration = 1500) {
    let currentValue = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= target) {
            currentValue = target;
            clearInterval(counter);
        }
        element.textContent = Math.floor(currentValue);
    }, 16);
}

// Inicia animação quando a seção sobre entra em vista
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            
            // Anima contadores se existirem
            const stats = entry.target.querySelectorAll('.stat h3');
            stats.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text);
                
                if (!isNaN(number)) {
                    animateCounter(stat, number);
                }
            });
        }
    });
}, observerOptions);

// Observa a seção sobre
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    observer.observe(aboutSection);
}

// ============================================
// ANIMAÇÃO DE FADE-IN PARA CARDS
// ============================================

function addFadeInAnimation() {
    const cards = document.querySelectorAll(
        '.feature-card, .course-card, .contact-card, .timeline-content'
    );

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        cardObserver.observe(card);
    });
}

// Adiciona animação de fade-in no CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

addFadeInAnimation();

// ============================================
// EFEITO DE SCROLL SUAVE
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// ADICIONA CLASSE ATIVA NA NAVEGAÇÃO
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// ANIMAÇÃO DE HOVER PARA SKILL BARS
// ============================================

const skillBars = document.querySelectorAll('.skill-progress');

skillBars.forEach(bar => {
    const parent = bar.parentElement;
    
    parent.addEventListener('mouseenter', () => {
        bar.style.transform = 'scaleX(1.02)';
    });
    
    parent.addEventListener('mouseleave', () => {
        bar.style.transform = 'scaleX(1)';
    });
});

// ============================================
// VALIDAÇÃO BÁSICA (preparado para formulário futuro)
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// ============================================
// EFEITO PARALLAX (opcional para seção hero)
// ============================================

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ============================================
// CONTADOR DE SCROLL PROGRESS
// ============================================

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    
    // Se você quiser adicionar uma barra de progresso, descomentar:
    // const progressBar = document.querySelector('.scroll-progress');
    // if (progressBar) progressBar.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ============================================
// INICIALIZAR AO CARREGAR
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfólio carregado com sucesso!');
    
    // Adiciona classe de loaded
    document.body.classList.add('loaded');
});

// ============================================
// DARK MODE TOGGLE (Opcional)
// ============================================

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Verifica preferência salva
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ============================================
// ANIMAÇÕES DE NÚMEROS
// ============================================

function formatNumber(num) {
    return num.toLocaleString('pt-BR');
}

// ============================================
// FUNÇÕES ÚTEIS
// ============================================

// Copia email para clipboard
function copyEmail() {
    const email = 'vitornunes.ori@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// Copia telefone para clipboard
function copyPhone() {
    const phone = '+5511998519644';
    navigator.clipboard.writeText(phone).then(() => {
        alert('Telefone copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// ============================================
// DEBOUNCE PARA PERFORMANCE
// ============================================

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

// ============================================
// THROTTLE PARA SCROLL EVENTS
// ============================================

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// LAZY LOADING PARA IMAGENS (futuro)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// SERVICE WORKER (para possível PWA no futuro)
// ============================================

if ('serviceWorker' in navigator) {
    // navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW registration failed'));
}

// ============================================
// GOOGLE ANALYTICS (descomentar quando necessário)
// ============================================

// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');

// ============================================
// EVENTOS PERSONALIZADOS
// ============================================

// Event: Seção vista
document.addEventListener('sectionViewed', (e) => {
    console.log('Seção visualizada:', e.detail);
});

// Trigger seção visualizada
document.querySelectorAll('section').forEach(section => {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.dispatchEvent(new CustomEvent('sectionViewed', {
                    detail: { sectionId: section.id }
                }));
            }
        });
    });
    sectionObserver.observe(section);
});
