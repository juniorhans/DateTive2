/* ==========================================================================
   1. EFEITOS SONOROS (CASOS)
   ========================================================================== */
const paperHoverSound = document.getElementById("paperHoverSound");
// Atualizado para a nova classe dos cartões modernos
const caseCards = document.querySelectorAll(".case-card-modern");

// Carrega o áudio no primeiro clique para evitar bloqueios do navegador
document.addEventListener("click", () => {
  if (paperHoverSound) paperHoverSound.load();
}, { once: true });

let hoverCooldown = false;

caseCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    if (hoverCooldown || !paperHoverSound) return;

    paperHoverSound.currentTime = 0;
    paperHoverSound.volume = 0.15;
    paperHoverSound.play();

    hoverCooldown = true;

    // Pequeno delay para não sobrecarregar o som se o utilizador mover o rato rápido
    setTimeout(() => {
      hoverCooldown = false;
    }, 10);
  });
});


/* ==========================================================================
   2. ANIMAÇÕES DE SCROLL (REVEAL)
   ========================================================================== */
const revealElements = document.querySelectorAll(".reveal-up");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.18
});

revealElements.forEach((el) => {
  revealObserver.observe(el);
});


/* ==========================================================================
   3. MENU MOBILE
   ========================================================================== */
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileOverlay = document.querySelector(".mobile-menu-overlay");
const closeMenu = document.querySelector(".close-menu");

if (menuToggle && mobileMenu && mobileOverlay && closeMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    mobileOverlay.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
  });

  mobileOverlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
  });
}