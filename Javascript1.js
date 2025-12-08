// Javascript1.js

document.addEventListener("DOMContentLoaded", function () {
  // ----- Bouton retour en haut -----
  const scrollUpBtn = document.querySelector(".scroll-up-btn");

  window.addEventListener("scroll", () => {
    if (!scrollUpBtn) return;
    if (window.scrollY > 400) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });

  if (scrollUpBtn) {
    scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ----- Menu burger -----
  const menuBtn = document.querySelector(".menu-btn.burger");
  const menu = document.querySelector(".navbar .menu");
  const menuLinks = document.querySelectorAll(".navbar .menu li a");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
      });
    });
  }

  // ----- Année dynamique dans le footer -----
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ----- Gestion FR / EN -----

  const langButtons = document.querySelectorAll(".lang-btn");
  const translatableElements = document.querySelectorAll("[data-fr][data-en]");

  function setLanguage(lang) {
    // Appliquer le texte sur tous les éléments marqués
    translatableElements.forEach((el) => {
      const text = el.dataset[lang];
      if (!text) return;

      const tag = el.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea") {
        const type = (el.getAttribute("type") || "").toLowerCase();
        if (type === "submit" || type === "button") {
          el.value = text;
        } else {
          el.placeholder = text;
        }
      } else {
        el.innerHTML = text;
      }
    });

    // Style actif sur le bouton
    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Mémoriser le choix
    try {
      localStorage.setItem("site-lang", lang);
    } catch (e) {
      // rien, au cas où localStorage est bloqué
    }
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang || "fr";
      setLanguage(lang);
    });
  });

  // Langue au chargement
  let savedLang = "fr";
  try {
    savedLang = localStorage.getItem("site-lang") || "fr";
  } catch (e) {
    savedLang = "fr";
  }
  setLanguage(savedLang);
});
