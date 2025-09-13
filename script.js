// ===============================
// Script JSM Béjaïa
// ===============================

// Menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Compteur prochain match
function countdown() {
  const matchDate = new Date("Sep 19, 2025 15:00:00").getTime();
  const now = new Date().getTime();
  const distance = matchDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Match terminé !";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days}j ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(countdown, 1000);

// Galerie zoom
const galleryImages = document.querySelectorAll(".gallery-grid img");
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "2000";

    const modalImg = document.createElement("img");
    modalImg.src = img.src;
    modalImg.style.maxWidth = "90%";
    modalImg.style.maxHeight = "90%";
    modalImg.style.borderRadius = "10px";

    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    modal.addEventListener("click", () => {
      modal.remove();
    });
  });
});

// Modal joueurs (exemple)
const players = document.querySelectorAll(".player-card");
players.forEach(player => {
  player.addEventListener("click", () => {
    alert(`Informations du joueur : ${player.querySelector("h3").textContent}`);
  });
});
