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