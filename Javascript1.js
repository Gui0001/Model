// Javascript1.js

// =========================
// Bouton "scroll-up"
// =========================
const scrollUpBtn = document.querySelector(".scroll-up-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});

if (scrollUpBtn) {
  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// =========================
// Menu burger (mobile)
// =========================
const menuBtn = document.querySelector(".menu-btn.burger");
const menu = document.querySelector(".navbar .menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Fermer le menu quand on clique sur un lien
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
}

// =========================
// Année automatique dans le footer
// =========================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// =========================
// Scroll doux sur les liens internes
// =========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      e.preventDefault();
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});
