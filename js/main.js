const paperHoverSound = document.getElementById("paperHoverSound");
const caseCards = document.querySelectorAll(".case-card");

document.addEventListener("click", () => {
  paperHoverSound.load();
}, { once: true });

let hoverCooldown = false;

caseCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    if (hoverCooldown) return;

    paperHoverSound.currentTime = 0;
    paperHoverSound.volume = 0.15;
    paperHoverSound.play();

    hoverCooldown = true;

    setTimeout(() => {
      hoverCooldown = false;
    }, 10);
  });
});

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);